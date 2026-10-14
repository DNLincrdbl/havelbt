import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer id="kapcsolat" className="bg-navy text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-[0.68rem] font-medium tracking-[0.2em] text-paper/60 uppercase">
            Épületgépészet
          </p>
          <p className="mt-4 font-display text-4xl tracking-tight">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-paper/75">
            {site.legalName} víz-, gáz- és fűtésszerelő. Váci telephely, 1983 óta.
          </p>
        </div>

        <div>
          <p className="text-[0.68rem] font-medium tracking-[0.2em] text-paper/60 uppercase">
            Elérhetőség
          </p>
          <a
            href={site.phoneHref}
            className="mt-4 block font-display text-3xl tracking-tight hover:text-white"
          >
            {site.phoneDisplay}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 block text-sm text-paper/85 underline decoration-paper/30 underline-offset-4 hover:decoration-paper"
          >
            {site.email}
          </a>
          <p className="mt-4 text-sm text-paper/70">Könyvelő iroda: {site.email}</p>
        </div>

        <div>
          <p className="text-[0.68rem] font-medium tracking-[0.2em] text-paper/60 uppercase">
            Telephely
          </p>
          <a
            href={site.mapsHref}
            className="mt-4 block text-lg leading-snug hover:text-white"
          >
            {site.postalCode} {site.city}
            <br />
            {site.street}
            <span className="sr-only"> (térkép, új lapon)</span>
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs tracking-wide text-paper/50 sm:px-8">
          {site.name} · {site.city}
        </p>
      </div>
    </footer>
  );
}
