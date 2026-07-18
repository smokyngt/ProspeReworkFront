ARG NODE_VERSION=22-bookworm-slim

FROM node:${NODE_VERSION} AS build

WORKDIR /app

COPY workspace/sdk/package*.json ./workspace/sdk/
COPY workspace/sdk/tsconfig.json ./workspace/sdk/
COPY workspace/sdk/src ./workspace/sdk/src/
WORKDIR /app/workspace/sdk
RUN npm ci --no-fund && npm run build

WORKDIR /app
COPY landing/package*.json ./landing/
WORKDIR /app/landing
RUN npm ci --no-fund

COPY landing/ ./

RUN npm run build

FROM node:${NODE_VERSION} AS runtime

RUN groupadd --system --gid 1001 nextjs \
 && useradd --system --uid 1001 --gid nextjs nextjs

WORKDIR /app

COPY --from=build --chown=nextjs:nextjs /app/landing/.next/standalone ./
COPY --from=build --chown=nextjs:nextjs /app/landing/.next/static ./.next/static
COPY --from=build --chown=nextjs:nextjs /app/landing/public ./public

RUN   --mount=type=cache,target=/var/cache/apt,sharing=locked \
      --mount=type=cache,target=/var/lib/apt,sharing=locked \
      apt-get update \
      && apt-get upgrade -y --no-install-recommends \
      && apt-get install -y --no-install-recommends \
          libc-bin libc6 tini wget \
      && rm -rf /var/lib/apt/lists/*

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV NODE_ENV=production

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD wget -qO- http://localhost:3000/ || exit 1

ENTRYPOINT ["tini", "-s", "--"]
CMD ["node", "server.js"]
