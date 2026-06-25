import { cn } from '@/lib/cn';
import { CONTENT, type Content, type Lang, type PriceTone } from '@/lib/protection-content';

export function ProtectionPage({ lang }: { lang: Lang }) {
  const t: Content = CONTENT[lang];

  return (
    <div className="flex w-full flex-col">
      {/* — Top bar — */}
      <header className="sticky top-0 z-30 border-b border-gray-alpha-400 bg-background-100/85 backdrop-blur-md">
        <div className="mx-auto flex h-14 w-full max-w-[1280px] items-center justify-between gap-4 px-5 sm:px-6">
          <a
            href="#top"
            className="flex items-center gap-2 text-label-13 font-medium text-gray-1000 sm:text-label-14"
          >
            <span aria-hidden className="inline-block size-2.5 rotate-45 bg-gray-1000" />
            <span className="truncate">{t.header.brand}</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            <a className="text-label-13 text-gray-900 transition-colors hover:text-gray-1000" href="#opciones">
              {t.header.nav.options}
            </a>
            <a className="text-label-13 text-gray-900 transition-colors hover:text-gray-1000" href="#comparativa">
              {t.header.nav.comparison}
            </a>
            <a className="text-label-13 text-gray-900 transition-colors hover:text-gray-1000" href="#recomendacion">
              {t.header.nav.reco}
            </a>
          </nav>
          <a
            href={t.header.langOther.href}
            aria-label={t.header.langOther.aria}
            className={cn(
              'inline-flex h-8 shrink-0 items-center rounded-md border border-gray-alpha-400 bg-background-100 px-2.5',
              'text-label-12-mono text-gray-1000',
              'transition-colors hover:bg-background-200',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700',
            )}
          >
            {t.header.langOther.label}
          </a>
        </div>
      </header>

      {/* — HERO — */}
      <section id="top" className="border-b border-gray-alpha-400">
        <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-5 py-16 sm:px-6 md:grid-cols-12 md:gap-12 md:py-28">
          <div className="md:col-span-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-alpha-400 px-2.5 py-1 text-label-12-mono uppercase tracking-wide text-gray-900">
              <span aria-hidden className="inline-block size-1.5 rounded-full bg-blue-700" />
              <span>{t.hero.eyebrow}</span>
            </div>
            <h1
              className="text-heading-40 font-semibold tracking-tight text-gray-1000 sm:text-heading-48 md:text-heading-64"
              style={{ overflowWrap: 'anywhere', minWidth: 0 }}
            >
              {t.hero.headline}
            </h1>
            <p className="mt-6 max-w-[58ch] text-copy-16 text-gray-900 sm:text-copy-18">
              {t.hero.sub}
            </p>
          </div>
          <aside className="md:col-span-4 md:border-l md:border-gray-alpha-400 md:pl-8">
            <p className="text-label-12-mono uppercase tracking-wide text-gray-700">
              {t.hero.summary.label}
            </p>
            <dl className="mt-4 space-y-3 text-copy-14">
              {t.hero.summary.items.map((it) => (
                <div key={it.dt} className="flex items-baseline justify-between gap-4 border-b border-gray-alpha-300 pb-3 last:border-b-0 last:pb-0">
                  <dt className="text-gray-900">{it.dt}</dt>
                  <dd className="text-right text-gray-1000">{it.dd}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* — TOC — */}
      <section id="opciones" aria-label={t.toc.kicker} className="border-b border-gray-alpha-400 bg-background-200 scroll-mt-16">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-6 sm:px-6">
          <p className="text-label-12-mono uppercase tracking-wide text-gray-700">
            {t.toc.kicker}
          </p>
          <ol className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {t.options.map((o) => (
              <li key={o.slug} className="flex items-baseline gap-3">
                <span className="text-label-12-mono text-gray-700">{o.n}</span>
                <a
                  href={`#${o.slug}`}
                  className="text-copy-14 text-gray-1000 underline-offset-4 transition-colors hover:text-blue-700 hover:underline"
                  style={{ overflowWrap: 'anywhere', minWidth: 0 }}
                >
                  {o.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* — OPTIONS — */}
      <main>
        {t.options.map((o, i) => (
          <article
            key={o.slug}
            id={o.slug}
            className={cn(
              'border-b border-gray-alpha-400 scroll-mt-16',
              i % 2 === 1 && 'bg-background-200',
            )}
          >
            <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-5 py-14 sm:px-6 md:grid-cols-12 md:gap-10 md:py-24">
              <div className="md:col-span-3">
                <div className="md:sticky md:top-20">
                  <p className="text-label-12-mono uppercase tracking-wide text-gray-700">
                    {t.optionBlock.optionLabel(o.n)}
                  </p>
                  <div className="mt-3">
                    <PriceBadge tone={o.priceTone}>{o.price}</PriceBadge>
                  </div>
                  <p className="mt-4 text-label-13 text-gray-900">
                    {o.requires}
                  </p>
                </div>
              </div>
              <div className="md:col-span-9">
                <h2
                  className="text-heading-24 font-semibold tracking-tight text-gray-1000 sm:text-heading-32 md:text-heading-40"
                  style={{ overflowWrap: 'anywhere', minWidth: 0 }}
                >
                  {o.title}
                </h2>
                <p className="mt-4 max-w-[62ch] text-copy-16 text-gray-900 sm:text-copy-18">
                  {o.pitch}
                </p>

                <div className="mt-10 grid gap-8 md:grid-cols-2">
                  <FactList label={t.optionBlock.coverageLabel} tone="positive" items={o.coverage} />
                  <FactList label={t.optionBlock.notCoveredLabel} tone="negative" items={o.notCovered} />
                </div>

                <div className="mt-8 flex flex-col gap-4 border-t border-gray-alpha-400 pt-6 sm:flex-row sm:items-baseline sm:justify-between">
                  <p className="max-w-[62ch] text-copy-14 text-gray-900">
                    <span className="text-gray-1000">{t.optionBlock.noteLabel}</span> {o.notes}
                  </p>
                  <a
                    href={o.docs}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={cn(
                      'inline-flex shrink-0 items-center gap-1.5 text-label-13 text-blue-700',
                      'underline-offset-4 hover:underline',
                      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700',
                    )}
                  >
                    {t.optionBlock.docsLabel}
                    <span aria-hidden>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </main>

      {/* — COMPARISON — */}
      <section id="comparativa" className="border-b border-gray-alpha-400 scroll-mt-16">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-6 md:py-28">
          <div className="mb-10 max-w-[62ch]">
            <p className="text-label-12-mono uppercase tracking-wide text-gray-700">
              {t.comparison.kicker}
            </p>
            <h2 className="mt-3 text-heading-24 font-semibold tracking-tight text-gray-1000 sm:text-heading-32 md:text-heading-40">
              {t.comparison.headline}
            </h2>
            <p className="mt-4 text-copy-14 text-gray-900 sm:text-copy-16">
              {t.comparison.sub}
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-gray-alpha-400">
            <table className="w-full min-w-[860px] border-collapse text-left">
              <thead>
                <tr className="bg-background-200">
                  <Th>{t.comparison.columns.label}</Th>
                  <Th>{t.comparison.columns.cost}</Th>
                  <Th>{t.comparison.columns.accounts}</Th>
                  <Th>{t.comparison.columns.sso}</Th>
                  <Th>{t.comparison.columns.prod}</Th>
                  <Th>{t.comparison.columns.passthrough}</Th>
                  <Th>{t.comparison.columns.level}</Th>
                </tr>
              </thead>
              <tbody>
                {t.comparison.rows.map((r, i) => (
                  <tr
                    key={r.label}
                    className={cn(
                      'border-t border-gray-alpha-300',
                      i === 1 && 'bg-blue-100/50',
                    )}
                  >
                    <Td className="font-medium text-gray-1000">{r.label}</Td>
                    <Td>
                      <span className="text-label-13-mono text-gray-1000">{r.cost}</span>
                    </Td>
                    <Td>{r.accounts}</Td>
                    <Td>{r.sso}</Td>
                    <Td>{r.prod}</Td>
                    <Td>{r.passthrough}</Td>
                    <Td>
                      <LevelChip level={r.level} />
                    </Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-label-13 text-gray-700">
            {t.comparison.highlightNote}
          </p>
        </div>
      </section>

      {/* — RECOMMENDATION — */}
      <section id="recomendacion" className="border-b border-gray-alpha-400 scroll-mt-16">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-6 md:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-label-12-mono uppercase tracking-wide text-gray-700">
                {t.reco.kicker}
              </p>
              <h2 className="mt-3 text-heading-24 font-semibold tracking-tight text-gray-1000 sm:text-heading-32 md:text-heading-40">
                {t.reco.headline}
              </h2>
              <p className="mt-6 max-w-[40ch] text-copy-16 text-gray-900">
                {t.reco.sub}
              </p>
            </div>
            <ol className="overflow-hidden rounded-lg border border-gray-alpha-400 md:col-span-8">
              {t.reco.steps.map((s, i) => (
                <li
                  key={s.n}
                  className={cn(
                    'grid gap-4 bg-background-100 p-6 md:grid-cols-12 md:p-8',
                    i > 0 && 'border-t border-gray-alpha-300',
                  )}
                >
                  <div className="md:col-span-3">
                    <p className="text-label-12-mono uppercase tracking-wide text-gray-700">
                      {t.reco.stepLabel(s.n)}
                    </p>
                    <p className="mt-2 text-label-16 font-medium text-gray-1000">
                      {s.label}
                    </p>
                  </div>
                  <p className="max-w-[62ch] text-copy-14 text-gray-900 md:col-span-9 sm:text-copy-16">
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* — FOOTER — */}
      <footer className="bg-background-200">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 px-5 py-10 sm:flex-row sm:items-baseline sm:justify-between sm:px-6">
          <p className="max-w-[62ch] text-label-13 text-gray-900">
            {t.footer.note}
          </p>
          <a
            href="https://vercel.com/docs/deployment-protection"
            target="_blank"
            rel="noreferrer noopener"
            className="text-label-13 text-gray-1000 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            {t.footer.docLabel} ↗
          </a>
        </div>
      </footer>
    </div>
  );
}

/* — Bits — */

function PriceBadge({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone: PriceTone;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border px-2 py-1 text-label-13-mono',
        tone === 'accent' && 'border-blue-400 bg-blue-100 text-blue-1000',
        tone === 'neutral' && 'border-gray-alpha-400 bg-background-100 text-gray-1000',
        tone === 'muted' && 'border-gray-alpha-300 bg-background-200 text-gray-900',
      )}
    >
      {children}
    </span>
  );
}

function FactList({
  label,
  items,
  tone,
}: {
  label: string;
  items: string[];
  tone: 'positive' | 'negative';
}) {
  return (
    <div>
      <p className="text-label-12-mono uppercase tracking-wide text-gray-700">
        {label}
      </p>
      <ul className="mt-3 space-y-2.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-baseline gap-3 text-copy-14 text-gray-1000"
          >
            <span
              aria-hidden
              className={cn(
                'mt-2 inline-block size-1.5 shrink-0 rounded-full',
                tone === 'positive' && 'bg-blue-700',
                tone === 'negative' && 'bg-gray-500',
              )}
            />
            <span style={{ overflowWrap: 'anywhere', minWidth: 0 }}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th
      scope="col"
      className="px-4 py-3 text-label-12-mono uppercase tracking-wide text-gray-700"
    >
      {children}
    </th>
  );
}

function Td({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <td className={cn('px-4 py-4 align-top text-copy-14 text-gray-900', className)}>
      {children}
    </td>
  );
}

function LevelChip({ level }: { level: string }) {
  const tone =
    level === 'Edge'
      ? 'border-gray-alpha-400 bg-background-100 text-gray-1000'
      : level === 'App'
        ? 'border-blue-400 bg-blue-100 text-blue-1000'
        : 'border-gray-alpha-300 bg-background-200 text-gray-700';
  return (
    <span className={cn('inline-flex rounded-md border px-2 py-0.5 text-label-12-mono', tone)}>
      {level}
    </span>
  );
}
