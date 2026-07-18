import { execSync } from "node:child_process";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import type { NextConfig } from "next";

const configDir = dirname(fileURLToPath(import.meta.url));

function getBuildId() {
  if (process.env.GIT_SHA) {
    return process.env.GIT_SHA;
  }

  try {
    return execSync("git rev-parse HEAD", {
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
  } catch {
    return `${Date.now()}`;
  }
}

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    externalDir: true,
  },
  outputFileTracingRoot: configDir,
  transpilePackages: ["@prosperify/workspace-sdk"],
  generateBuildId: async () => getBuildId(),
};

export default nextConfig;
