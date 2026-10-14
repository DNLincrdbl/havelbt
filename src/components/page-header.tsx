export function PageHeader({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="sheet border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-[0.7rem] font-medium tracking-[0.22em] text-blue uppercase">
          {kicker}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{lede}</p>
      </div>
    </header>
  );
}
