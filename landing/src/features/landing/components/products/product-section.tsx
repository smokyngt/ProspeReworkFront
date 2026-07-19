'use client';

import { Check, Cloud, Layers, Server } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type Segment = {
  emphasis?: boolean;
  text: string;
};

function getSegments(value: unknown): Segment[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter(
    (item): item is Segment =>
      typeof item === 'object' &&
      item !== null &&
      'text' in item &&
      typeof (item as Segment).text === 'string',
  );
}

function Description({ path }: { path: string }) {
  const { t } = useTranslation();
  const segments = getSegments(
    t(`${path}.descriptionSegments`, { returnObjects: true }),
  );

  if (!segments.length) {
    return null;
  }

  return (
    <p className="mt-4 min-h-[64px] text-[17px] font-medium leading-8 text-neutral-600 dark:text-neutral-300">
      {segments.map((segment, index) =>
        segment.emphasis ? (
          <span key={`${path}-${index}`} className="font-semibold">
            {segment.text}
          </span>
        ) : (
          <span key={`${path}-${index}`}>{segment.text}</span>
        ),
      )}
    </p>
  );
}

function FeatureList({ path }: { path: string }) {
  const { t } = useTranslation();
  const features = t(`${path}.features`, { returnObjects: true });
  const items = Array.isArray(features)
    ? features.filter((item): item is string => typeof item === 'string')
    : [];

  return (
    <div className="space-y-2.5">
      {items.map((item) => (
        <div
          key={item}
          className="grid min-h-14 grid-cols-[1.75rem_minmax(0,1fr)] items-center gap-3 border border-neutral-100 bg-white/70 px-3 py-3 dark:border-neutral-800 dark:bg-neutral-900/40"
        >
          <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center bg-current shadow-sm">
            <Check className="text-white" size={13} strokeWidth={3} />
          </div>
          <span className="text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-300">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

const offerStyles = [
  {
    accent: 'text-orange-500',
    badge: 'bg-orange-500 text-white',
    border:
      'border-orange-200 hover:border-orange-300 dark:border-orange-500/30 dark:hover:border-orange-500/50',
    icon: 'bg-orange-100 text-orange-500 group-hover:bg-orange-100 group-hover:text-orange-600 dark:bg-orange-500/15 dark:text-orange-400 dark:group-hover:bg-orange-500/20',
    panel: 'hover:bg-orange-50/45 dark:hover:bg-orange-500/5',
    shadow: 'hover:shadow-[0_28px_80px_-55px_rgba(255,106,19,0.9)]',
  },
  {
    accent: 'text-neutral-500 dark:text-neutral-400',
    badge: 'bg-neutral-900 text-white',
    border:
      'border-neutral-200 hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700',
    icon: 'bg-neutral-100 text-neutral-600 group-hover:bg-neutral-100 group-hover:text-neutral-950 dark:bg-neutral-800 dark:text-neutral-300 dark:group-hover:bg-neutral-800',
    panel: 'hover:bg-neutral-50/80 dark:hover:bg-neutral-900/60',
    shadow: 'hover:shadow-[0_28px_80px_-58px_rgba(15,23,42,0.65)]',
  },
  {
    accent: 'text-emerald-600 dark:text-emerald-400',
    badge: 'bg-emerald-600 text-white',
    border:
      'border-emerald-200 hover:border-emerald-300 dark:border-emerald-500/30 dark:hover:border-emerald-500/50',
    icon: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-50 group-hover:text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400 dark:group-hover:bg-emerald-500/20',
    panel: 'hover:bg-emerald-50/45 dark:hover:bg-emerald-500/5',
    shadow: 'hover:shadow-[0_28px_80px_-58px_rgba(16,185,129,0.75)]',
  },
];

const icons = [Cloud, Layers, Server];

export default function ProductSection({ id }: { id?: string }) {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto">
     

      <div id={id} className="mb-12 scroll-mt-8 sm:mb-16">
        <h2 className="mb-5 text-balance text-4xl font-semibold leading-[1.08] sm:mb-7 sm:text-5xl lg:text-6xl">
          {t('products.titlePrefix')}
          <br /> {t('products.titleMiddle')}{' '}
          <span className="text-orange-500">
            {t('products.titleHighlight')}
          </span>
        </h2>
        <p className=" mb-8 max-w-4xl text-lg leading-8 text-neutral-600 dark:text-neutral-400 sm:text-xl">
          {t('products.subtitle')}
        </p>
      </div>

      <div className="grid max-w-7xl gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {[0, 1, 2].map((index) => {
          const Icon = icons[index];
          const style = offerStyles[index];
          const badge = t(`products.offers.${index}.badge`);

          return (
            <article
              key={index}
              className={`group relative flex min-h-[440px] flex-col overflow-hidden border bg-white/90 p-6 shadow-sm backdrop-blur transition-all duration-500 ease-out dark:bg-neutral-950/90 sm:p-7 lg:min-h-[500px] lg:p-8 ${style.border} ${style.panel} ${style.shadow}`}
            >
              <div className="mb-8 flex items-start justify-between gap-4">
                <div className={style.accent}>
                  <div
                    className={`flex h-14 w-14 items-center justify-center border border-current/20 transition-colors duration-500 ${style.icon}`}
                  >
                    <Icon size={27} strokeWidth={1.7} />
                  </div>
                </div>
                {badge ? (
                  <span
                    className={`shrink-0 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${style.badge}`}
                  >
                    {badge}
                  </span>
                ) : null}
              </div>

              <h3 className="text-3xl font-bold leading-tight text-neutral-950 transition-colors duration-500 group-hover:text-orange-600 dark:text-neutral-50">
                {t(`products.offers.${index}.title`)}
              </h3>
              <Description path={`products.offers.${index}`} />

              <div className="my-7 h-px bg-neutral-200 dark:bg-neutral-800" />

              <div className={style.accent}>
                <FeatureList path={`products.offers.${index}`} />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
