import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <p className="text-[0.7rem] font-medium tracking-[0.22em] text-blue uppercase">
        404
      </p>
      <h1 className="mt-4 font-display text-5xl tracking-tight">
        Ez az oldal nem található.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        A keresett cím nincs a Hável Bt. oldalai között.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block border border-navy px-5 py-3 text-sm text-navy hover:bg-navy hover:text-paper"
      >
        Vissza a bemutatkozáshoz
      </Link>
    </div>
  );
}
