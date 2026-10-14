import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Kivitelezés",
  description:
    "Családi házak, irodaházak, csarnokok és benzinkutak gépészeti kivitelezése. Komplett csőrendszerek, rejtett szerelés, fényképes dokumentáció.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        kicker="Szolgáltatások"
        title="Kivitelezés"
        lede="Vállaljuk családi házak, irodaházak, csarnokok és benzinkutak gépészeti kivitelezését fővállalkozóként és alvállalkozóként egyaránt."
      />

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,42rem)_16rem] lg:gap-20">
          <article className="space-y-14 text-[1.05rem] leading-8">
            <section>
              <h2 className="font-display text-3xl tracking-tight">Csőrendszerek</h2>
              <p className="mt-5">
                A kivitelezések során a korszerű megoldásokat, komplett
                csőrendszereket javasoljuk megrendelőinknek. Csak olyan gyártó
                csöveit építjük be, amelyik a hozzá való idomokat is gyártja,
                bírja a betonkorróziót, és cinkkiválás ellen is védett. A rejtett
                csőszerelésnél szem előtt tartjuk az üzemelés gazdaságosságát és
                az esztétikát is.
              </p>
              <p className="mt-5">
                A különböző rendszerek forgalmazói rendszergaranciát adnak a
                szerelésekre, ha a beépítés technológiáját a kivitelező
                elsajátítja, és a forgalmazó erre irányuló tanfolyamát elvégzi.
                Ezeken a tanfolyamokon folyamatosan részt veszünk.
              </p>
            </section>

            <section className="border-l-2 border-copper pl-6">
              <h2 className="font-display text-3xl tracking-tight">Hosszú távon</h2>
              <p className="mt-5">
                Sajnos a megrendelők egy része előnyben részesíti az olcsóbb
                megoldásokat, és a gépészeten spórol, holott{" "}
                <strong className="font-semibold text-blue">
                  a korszerű megoldás biztonságot és az üzemelés során
                  gazdaságosságot jelent
                </strong>
                . Tehát{" "}
                <strong className="font-semibold text-blue">hosszú távon</strong>{" "}
                mindenképpen{" "}
                <strong className="font-semibold text-blue">megtérül</strong>.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl tracking-tight">Képzés</h2>
              <p className="mt-5">
                Cégünk, felismerve azt, hogy minőségi munkát csak magas szakmai
                felkészültségű szakembertől várhat el,{" "}
                <strong className="font-semibold text-blue">
                  nagy hangsúlyt fektet dolgozóinak képzésére
                </strong>
                . Az új technológiák, fejlesztések megjelenésével szükségszerű a
                folyamatos továbbképzés. Csak így lehet korrektül tájékoztatni a
                megrendelőket a nekik legmegfelelőbb megoldásokról.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl tracking-tight">
                Ajánlás és partnerek
              </h2>
              <p className="mt-5">
                Munkáink nagy részét a régebbi, elégedett megrendelőink hozzák
                barátaik és ismerőseik által. Ezeken kívül régi, folyamatos
                kapcsolatban vagyunk generálkivitelezőkkel csarnokok, irodaházak
                és benzinkutak gépészeti kivitelezésére. Ezek a kivitelezők nem
                egy-egy projektre alakulnak, majd utána megszűnnek: szintén első
                osztályú munkát végeznek, és ezt várják el az alvállalkozótól is.
              </p>
            </section>

            <section className="bg-card px-6 py-7 sm:px-8">
              <h2 className="font-display text-3xl tracking-tight">
                Fényképes dokumentáció
              </h2>
              <p className="mt-5">
                <strong className="font-semibold text-blue">
                  Minden kivitelezést fényképekkel dokumentálunk
                </strong>
                : a csővezetés nyomvonalát, a padlófűtési körök számozását az
                osztó köreinek megfelelően, a lefolyóvezeték nyomvonalát. Ezeket
                céges számítógépen nyilvántartjuk. Egy garnitúrát a beüzemelés
                után a megrendelőnek átadunk.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl tracking-tight">Szerszámok</h2>
              <p className="mt-5">
                A korszerű kivitelezéshez korszerű szerszámok szükségesek, éppen
                ezért folyamatosan naprakészek vagyunk az aktuális technológiákhoz
                szükséges szerszámokkal. Megvesszük, nem béreljük.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl tracking-tight">
                Melyik rendszer illik a házhoz
              </h2>
              <p className="mt-5">
                Leendő megrendelőinknek a megfelelő rendszer kiválasztásához
                javaslom az alábbiak elolvasását. Tapasztalatom szerint a
                radiátoros fűtést a megrendelők nagyjából ismerik. A{" "}
                <Link
                  href="/kazanok#padlofutes"
                  className="font-medium text-blue underline decoration-blue/30 underline-offset-4 hover:decoration-blue"
                >
                  padló- és falfűtés
                </Link>{" "}
                ismeretében és a{" "}
                <Link
                  href="/kazanok"
                  className="font-medium text-blue underline decoration-blue/30 underline-offset-4 hover:decoration-blue"
                >
                  kazánok
                </Link>{" "}
                kiválasztásában vannak hiányosságok.
              </p>
            </section>
          </article>

          <aside className="h-fit border border-line bg-card p-6 lg:sticky lg:top-24">
            <p className="text-[0.68rem] font-medium tracking-[0.18em] text-muted uppercase">
              Ezen az oldalon
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-6">
              <li>Komplett csőrendszerek, rejtett szerelés</li>
              <li>Rendszergarancia, folyamatos képzés</li>
              <li>Fényképes átadás a beüzemelés után</li>
              <li>Saját szerszámpark, nem bérelt gép</li>
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
}
