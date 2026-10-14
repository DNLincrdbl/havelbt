import Link from "next/link";

const milestones = [
  {
    year: "1967",
    text: "Országos szakmai versenyen szerzett szakmunkásvizsga.",
  },
  {
    year: "1983",
    text: "A vállalkozás indul Vácon, csőszerelő kisiparosként.",
  },
  {
    year: "1994",
    text: "Jogfolytonosan társas vállalkozássá alakulunk.",
  },
];

const places = ["Családi házak", "Irodaházak", "Csarnokok", "Benzinkutak"];

export default function HomePage() {
  return (
    <>
      <section className="sheet border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-end">
          <div>
            <p className="text-[0.7rem] font-medium tracking-[0.22em] text-blue uppercase">
              Hável Bt. · épületgépészet · Vác
            </p>
            <h1 className="mt-6 max-w-4xl font-display text-[2.6rem] leading-[1.08] tracking-tight text-ink sm:text-6xl lg:text-[4.25rem]">
              Köszönöm, hogy megtisztel érdeklődésével.
            </h1>
            <p className="mt-8 max-w-xl font-display text-2xl text-ink italic sm:text-3xl">
              Hável Imre vagyok.
            </p>
          </div>

          <aside className="border border-blue/25 p-1">
            <div className="border border-blue/40 bg-card/80 px-4 py-4">
              <p className="text-[0.65rem] font-medium tracking-[0.18em] text-muted uppercase">
                Rajzlap
              </p>
              <dl className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between gap-4 border-b border-line pb-2">
                  <dt className="text-muted">Cég</dt>
                  <dd>Hável Bt.</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-line pb-2">
                  <dt className="text-muted">Alapítva</dt>
                  <dd>1983</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Helyszín</dt>
                  <dd className="text-right">Vác, Nagymező u. 47.</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1fr)_16rem]">
        <div className="max-w-2xl space-y-5 text-[1.05rem] leading-8">
          <p>
            1967-ben országos szakmai versenyen szereztem szakmunkásvizsgát.
            Ezután állami vállalatoknál dolgoztam szakmunkásként. A vállalkozást
            váci telephellyel 1983-ban kezdtem csőszerelő kisiparosként. Később
            az új adótörvények elvárásainak megfelelően egyéni vállalkozó lettem.
            Vállalkozásom fejlődése indokolttá tette a cégforma változását, ezért
            1994-ben, jogfolytonosan társas vállalkozássá alakultunk.
          </p>
          <p>
            Cégünk, felismerve azt, hogy minőségi munkát csak magas szakmai
            felkészültségű szakembertől várhat el,{" "}
            <strong className="font-semibold text-blue">
              nagy hangsúlyt fektet dolgozóinak képzésére
            </strong>
            . Az új technológiák, fejlesztések megjelenésével szükségszerű a
            folyamatos továbbképzés. Így tudjuk korrektül tájékoztatni a
            megrendelőket a nekik legmegfelelőbb megoldásokról.
          </p>
        </div>

        <ol className="border-t border-line lg:border-t-0 lg:border-l lg:pl-8">
          {milestones.map((item) => (
            <li key={item.year} className="border-b border-line py-5">
              <p className="font-display text-2xl text-copper">{item.year}</p>
              <p className="mt-1 text-sm leading-6 text-muted">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-navy text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-[0.7rem] font-medium tracking-[0.22em] text-paper/60 uppercase">
            Fő profilunk
          </p>
          <p className="mt-4 max-w-2xl font-display text-3xl leading-snug tracking-tight sm:text-4xl">
            Víz-, gáz-, csatorna- és fűtési rendszerek kivitelezése.
          </p>
          <ul className="mt-10 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {places.map((place, index) => (
              <li key={place} className="bg-navy px-5 py-6">
                <span className="font-display text-sm text-copper">
                  0{index + 1}
                </span>
                <p className="mt-3 text-xl">{place}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-paper/70">
            Fővállalkozóként és alvállalkozóként egyaránt.{" "}
            <Link
              href="/szolgaltatasok"
              className="text-paper underline decoration-paper/40 underline-offset-4 hover:decoration-paper"
            >
              A kivitelezésről
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
