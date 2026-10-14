import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { boilerSections, manufacturers } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kazánok és fűtések",
  description:
    "Padlófűtés, falfűtés, kondenzációs, turbós és atmoszférikus kazánok. Áttekintés a Hável Bt. tapasztalatai alapján.",
};

const floorLimits = [
  { place: "Munkahely, ahol főként állnak", temp: "27 °C" },
  { place: "Lakó- és irodahelyiségek", temp: "29 °C" },
  { place: "Közlekedőfolyosók, előszobák", temp: "30 °C" },
  { place: "Fürdőszobák és uszodák", temp: "33 °C" },
  { place: "Ritkán használt helyiségek", temp: "35 °C" },
];

function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-line pt-12">
      <p className="font-display text-sm text-copper">{index}</p>
      <h2 className="mt-2 font-display text-4xl tracking-tight text-ink">{title}</h2>
      <div className="mt-6 space-y-5 text-[1.05rem] leading-8">{children}</div>
    </section>
  );
}

export default function BoilersPage() {
  return (
    <>
      <PageHeader
        kicker="Tudnivalók"
        title="Kazánok és fűtések"
        lede="Áttekintés a padló- és falfűtésről, valamint a kondenzációs, turbós és atmoszférikus kazánokról. A radiátoros fűtést a megrendelők általában ismerik; a választásnál itt szokott hiányozni a kép."
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
        <nav aria-label="Tartalom" className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-[0.68rem] font-medium tracking-[0.18em] text-muted uppercase">
            Fejezetek
          </p>
          <ol className="mt-4 flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0">
            {boilerSections.map((section, index) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="flex items-baseline gap-3 py-2 text-sm whitespace-nowrap text-ink hover:text-blue lg:whitespace-normal"
                >
                  <span className="font-display text-copper">0{index + 1}</span>
                  {section.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article>
          <Section id="padlofutes" index="01" title="Padlófűtés">
            <p>
              A fűtéstechnikában{" "}
              <strong className="font-semibold text-blue">
                a padlófűtést a hidegburkolatú helyiségek komfortfokozatának
                emelése érdekében
              </strong>
              , a helyiség optimális hőmérséklet-eloszlása miatt sokan szívesen
              alkalmazzák. Magyarországon több cég kínál melegvizes padlófűtést,
              nagy a választék. A rendszerek felépítésükben és szerkezeti
              anyagaikban eltérnek, a beépítés és a szerelési elv viszont
              mindegyiknél ugyanaz.
            </p>
            <h3 className="pt-2 font-display text-2xl tracking-tight">
              A rendszer működési elve
            </h3>
            <p>
              A fűtéshez használt, legfeljebb 50–55 °C hőmérsékletű meleg vizet
              egy szivattyú szállítja a hőtermelőtől (fűtőkészülék, hőcserélő) a
              fűtendő helyiségek közelében elhelyezett elosztó csomópontig. Az
              osztó csonkjairól a fűtővíz a padlószerkezetbe, az esztrichbe
              betonozott csöveken keresztül áramlik. Áramlás közben hőjének nagy
              részét átadja a padlószerkezetnek, majd a lehűlt víz a gyűjtőn
              keresztül kerül vissza a hőtermelőhöz.
            </p>
            <p>
              A padlóburkolat felmelegedve sugárzással (70%) és konvekcióval (30%)
              adja le a hőjét a környezetnek. Mivel a sugárzásos hőleadás a
              nagyobb mértékű, a padlófűtést a sugárzó fűtések közé soroljuk. Az
              egész padlófelületet fűtőfelületnek használva egyenletes
              hőfokeloszlást kapunk a helyiségben. A padlófelületnek különleges
              szerepe van, mert ezzel a felülettel közvetlenül érintkezünk.
            </p>
            <p>
              A padlófűtéssel fűtött helyiségek{" "}
              <strong className="font-semibold text-blue">
                tervezésekor és kivitelezésekor
              </strong>{" "}
              kötelezően be kell tartani az ide vonatkozó egészségügyi
              határértékeket. A padló felületi hőmérséklete a helyiség
              rendeltetésétől függ.
            </p>
            <dl className="divide-y divide-line border-y border-line">
              {floorLimits.map((row) => (
                <div
                  key={row.place}
                  className="flex items-baseline justify-between gap-6 py-3 text-base"
                >
                  <dt>{row.place}</dt>
                  <dd className="font-display text-xl text-blue">{row.temp}</dd>
                </div>
              ))}
            </dl>
            <p className="border-l-2 border-copper pl-5">
              Véleményünk szerint{" "}
              <strong className="font-semibold text-blue">
                igazán jó komfortot a radiátoros és a padlófűtéses mód együttes
                alkalmazása ad
              </strong>
              . Optimális megoldás: padlófűtés kőtemperálásra, radiátor
              helyiségfűtésre. Célszerű a hőigényt megfelezni, és ahhoz beépíteni
              a radiátort, illetve a padlófűtést. A vegyes fűtés megadja a
              kellemes közérzetet, és a szabályozásra is gyorsan reagál.
              Természetesen ez a megoldás drágább, mint ha csak az egyik
              rendszert építenénk ki.
            </p>
            <p>
              A padlófűtés a családi házak, a csarnok- és teremfűtések, valamint
              az uszodaterek fűtésénél egyaránt a{" "}
              <strong className="font-semibold text-blue">
                nagyon gyakran alkalmazott fűtési módok
              </strong>{" "}
              közé tartozik, emiatt sok szerelő szívesen alkalmazza. Az országban
              számos autószalon és üzem épült padlófűtéssel, és a gondos
              tervezésnek és kivitelezésnek köszönhetően jól működnek. A
              padlófűtés ugyanakkor nem „alap” megoldás, ezért az épületgépészeti
              tervezésre fokozott figyelmet kell fordítani: az esetleges hibát
              csak roncsolásos javítással és helyreállítással lehet orvosolni.
            </p>
            <h3 className="pt-2 font-display text-2xl tracking-tight">
              Szabályozástechnika
            </h3>
            <p>
              Az ehhez kapcsolódó szabályozástechnika bonyolultabb, mint a
              hagyományos radiátoros fűtésnél. A padlófűtés optimális használata
              érdekében lehetséges, hogy a hagyományos előremenő
              vízhőmérséklet-szabályozáson kívül az előírt előremenő
              vízhőmérséklet megállapításához a visszatérő vízhőmérsékletet is
              figyelembe vegye a szabályozó.
            </p>
          </Section>

          <Section id="falfutes" index="02" title="Falfűtés">
            <p>
              A{" "}
              <strong className="font-semibold text-blue">falfűtés</strong>{" "}
              egyszerre magas termikus komfortérzetet és nagyfokú építészeti
              alkotói szabadságot tesz lehetővé. Padlófűtéssel kombinálva
              érezhetők igazán az előnyei.
            </p>
            <p>
              Ennek a fűtési módnak az előnye, hogy a helyiségben a{" "}
              <strong className="font-semibold text-blue">
                hőmérséklet-eloszlás egyenletes
              </strong>
              . A fal kellemes hősugárzása miatt a{" "}
              <strong className="font-semibold text-blue">
                padló és a mennyezet között
              </strong>{" "}
              is egyenletes hőmérséklet alakul ki.
            </p>
            <p>
              Ha a padlófűtést falfűtéssel kombináljuk, még nagyobb lesz a
              fűtőfelület, így tovább csökkenthető az előremenő hőmérséklet. Ez
              kedvez az alternatív energiaforrásoknak: napenergia, hőszivattyú,
              földkollektor.
            </p>
            <p>
              Különösen kellemes, hogy a padló esztrichrétegéhez képest a
              vékonyabb vakolat, illetve a gipszszál-erősítéses lemez gyorsabb
              szabályozhatóságot ad, a rövid felfűtési idő miatt.
            </p>
            <p>
              Falfűtésnél optimális hőmérséklet-eloszlás, kellemes hősugárzás,
              rövid felfűtési idő, energiaköltség-megtakarítás és kevés kosz
              tapasztalható, valamint a rendszer ideális az alternatív
              energiaforrások kihasználására.
            </p>
          </Section>

          <Section id="kondenzacios" index="03" title="Kondenzációs kazánok">
            <p>
              A kondenzációs kazán működésének alapelve, hogy a füstgázban lévő
              víz rejtett hőjét visszanyerjük: a gőzfázisból folyadékfázisba
              történő átváltozással, kondenzálással. Az így nyert energia adja a
              kazánok{" "}
              <strong className="font-semibold text-blue">
                100% feletti hatásfokát
              </strong>
              . A hatásfok emelését a füstgázok minél alacsonyabb hőmérsékletre
              történő visszahűtésével érjük el. A kondenzációs kazán az alacsony
              hőmérsékletű fűtések, például a{" "}
              <strong className="font-semibold text-blue">padlófűtés</strong>,
              megvalósításának{" "}
              <strong className="font-semibold text-blue">ideális eszköze</strong>.
            </p>
            <blockquote className="border-l-2 border-line pl-5 text-muted italic">
              „Kicserélhetem-e a hagyományos kazánt kondenzációsra? A
              kondenzációs kazán csak padlófűtéssel működik jól? Miért kellenek
              sokkal nagyobb radiátorok, mint régen?”
            </blockquote>
            <p>
              A kondenzáció csak akkor jön létre, ha a kazánba visszatérő víz
              hőmérséklete alacsonyabb az égéstermékben lévő vízgőz harmatponti
              hőmérsékleténél. Ez a feltétel az alacsony hőmérsékletű
              rendszereknél teljesül: padlófűtés, falfűtés, alacsony hőfokon
              üzemelő radiátorok. Ezekben az esetekben tudjuk a legjobban
              kihasználni a kondenzációs technikát.
            </p>
            <h3 className="pt-2 font-display text-2xl tracking-tight">
              A kondenzáció és a távozó égéstermék hőmérséklete
            </h3>
            <p>
              A hagyományos, 90/70 °C-os hőfoklépcsőre méretezett rendszer esetén
              a kondenzációs kazán működni fog, de a kondenzáció csak az átmeneti,
              őszi–tavaszi időszakokban jelentkezik, amikor a rendszer
              hőmérséklete megfelelően alacsony. A tapasztalatok szerint ez a
              fűtési idény mintegy 30–35%-a. A fennmaradó időben a kondenzációs
              kazán úgy üzemel, mint egy jó minőségű hagyományos kazán, és így
              nem jutunk hozzá a füstgázban tárolt többlet hőmennyiséghez.
              Hagyományos, főként tisztán radiátoros rendszer esetén a
              kondenzációs kazán — amely lényegesen drágább a hagyományos
              készülékeknél — nem a legjobb megoldás.
            </p>
            <p>
              Padlófűtéses rendszernél már sokkal jobb a helyzet. Itt a jellemző
              hőfoklépcső 60/45 °C körüli, tehát az alacsony visszatérő
              hőmérséklet miatt a készülék szinte a teljes fűtési időszakban
              kondenzációval működik. Egy hiányosság marad: a még mindig
              viszonylag magas füstgázhőmérséklet miatt a hőenergia egy része a
              kéményen távozik. E rendszerek hatásfoka 104–105%.
            </p>
            <p>
              A{" "}
              <a href="#gyartok" className="font-medium text-blue underline decoration-blue/30 underline-offset-4">
                gyártók
              </a>{" "}
              által megadott 108%-os hatásfokot a kondenzációs kazánok 40/30 °C-ra
              méretezett rendszerekben tudják elérni. Ekkor minden üzemállapotban
              létrejön a kondenzáció, és a távozó égéstermék hőmérséklete is a
              lehető legalacsonyabb.
            </p>
            <p>
              Egy kondenzációs kazánhoz csatlakozó rendszernél a legfontosabb
              elvárás a minél alacsonyabb működési hőmérséklet. Ez felvet egy nem
              elhanyagolható problémát: bármely hőleadó alacsonyabb hőfoklépcső
              esetén lényegesen kisebb hőmennyiséget képes leadni, mint magasabb
              hőfoklépcsőnél. Ugyanakkora hőmennyiséghez tehát nagyobb hőleadó,
              jellemzően radiátor kell. Egy 90/70 °C-os rendszerben üzemelő
              radiátor mintegy kétszer nagyobb hőmennyiséget ad le, mint a
              60/45 °C-os rendszerben működő.
            </p>
            <p>
              Új rendszernél, ha a megrendelő kondenzációs kazánt szeretne,
              célszerű a padlófűtés, lehetőleg minél kisebb közeghőmérséklettel,
              kiegészítő fűtésként pedig az alacsonyabb hőfoklépcsőre méretezett,
              és így valamivel nagyobb radiátorok.
            </p>
            <p>
              Más a helyzet a{" "}
              <strong className="font-semibold text-blue">
                fűtési rendszer felújításakor
              </strong>
              . Ha kondenzációs kazánra van igény,{" "}
              <strong className="font-semibold text-blue">
                első lépésként javítani kell az épület hőtechnikai jellemzőit
              </strong>
              , azaz minél jobb hőszigetelést kell alkalmazni. Ez, mivel
              mérsékli a helyiségek hőigényét, már önmagában is csökkenti a
              rendszerben lévő vízhőmérsékletet. Ha a radiátorokat is nagyobbra
              lehet cserélni, megfelelő eredmény érhető el.
            </p>
            <p>
              A modern kondenzációs készülékek szabályozástechnikája és az általuk
              biztosítható melegvíz-komfort nem tér el jelentősen a jó minőségű
              hagyományos berendezésekétől. Működhetnek szobatermosztátról vagy
              külső, időjárásfüggő szabályzóról. Létezik kombi kialakítású
              változatuk, de alkalmazható indirekt fűtésű használati
              melegvíz-tároló is. Méretükben és külső megjelenésükben is
              hasonlítanak hagyományos társaikra.
            </p>
            <p>
              A legnagyobb hátrányuk a viszonylag magas ár. Ez tagadhatatlan, de
              a technológia különleges minőségű anyagokat és magas szintű
              szabályozást igényel. A kapcsolódó fűtési rendszer beruházási
              költsége is magasabb lehet, mint a hagyományos megoldásoknál.
            </p>
            <p>
              Ezzel szemben számos előnyük van.{" "}
              <strong className="font-semibold text-blue">
                Éves szinten 15–18%-kal magasabb hatásfokkal üzemelhetnek
              </strong>
              , mint akár a legjobb minőségű nem kondenzációs kazánok. Ezt
              fokozza, hogy a kondenzációs kazánok{" "}
              <strong className="font-semibold text-blue">
                hatásfoka nem csökken, ha a berendezés részterhelésen működik
              </strong>{" "}
              — márpedig a fűtési idény nagy részében ez a jellemző —, sőt ilyenkor
              a technológia sajátosságai miatt nő a kihasználtság. Ez válasz lehet
              a magas árra is: a takarékos működéssel a többletköltség idővel
              megtérül. Erre ma 4–6 évet mondanak, de ez az időszak az energiaárak
              növekedésével rövidülhet. A kazánok kibocsátási értékei rendkívül
              jók, alacsony a CO<sub>2</sub>- és NO<sub>x</sub>-szint, vagyis{" "}
              <strong className="font-semibold text-blue">környezetbarát</strong>{" "}
              termékek. Alkalmazásuk és szerelésük nem feltételez különleges
              ismereteket, csak a{" "}
              <strong className="font-semibold text-blue">
                fűtési rendszer átgondolt megtervezését igénylik
              </strong>
              .
            </p>
            <p>
              A kondenzációs kazánok minden fontos jellemző tekintetében magasabb
              szinten állnak, mint a hagyományos készülékek. Érdemes azon
              fáradozni, hogy a magyar fűtési piacon egyre több jelenjen meg
              belőlük: ez környezetvédelmi és energetikai szempontból is a
              hasznunkra válik.
            </p>
          </Section>

          <Section id="turbos" index="04" title="Turbós kazánok">
            <p>
              A típus beépítése akkor javasolt, ha az épületen fokozott légzárású
              ajtók és ablakok vannak.
            </p>
            <p>
              A kazánok zárt égésterűek. Az égéshez szükséges levegőt közvetlenül
              kívülről veszik, akár a távozó füstgázzal előmelegítve azt. Az égés,
              a szellőzés és a füstgáz-elvezetés teljesen elválik a szoba
              levegőjétől. Baleseti szempontból{" "}
              <strong className="font-semibold text-blue">
                rendkívül biztonságos
              </strong>
              .
            </p>
          </Section>

          <Section id="atmoszferikus" index="05" title="Atmoszférikus kazánok">
            <p>
              Nyitott égésterű készülékek. A füstgáz kedvezőtlen időjárási
              viszonyok, helytelen szerelés vagy kéményeltömődés esetén az épület
              légterébe kerülhet. A tömören záródó nyílászárókkal vigyázni kell,
              ne vegyék el a kazán elől az égési levegőt. A füstgáz
              visszaáramlása ellen füstgázszenzoros készülékkel lehet védekezni.
            </p>
            <p>
              A készüléktípus olcsóbban üzemeltethető, kisebb a karbantartási
              igénye, üzembiztosabb, és maga a berendezés is lényegesen olcsóbb.
            </p>
          </Section>

          <Section id="gyartok" index="06" title="Gyártók">
            <p>
              További részleteket a gyártók oldalain lehet olvasni.
            </p>
            <ul className="grid gap-px bg-line sm:grid-cols-2">
              {manufacturers.map((maker) => (
                <li key={maker.href} className="bg-paper">
                  <a
                    href={maker.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-baseline justify-between gap-4 px-4 py-4 hover:bg-card"
                  >
                    <span className="font-medium">{maker.name}</span>
                    <span className="text-sm text-muted">
                      {maker.host}
                      <span className="sr-only"> (új lapon nyílik)</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Section>
        </article>
      </div>
    </>
  );
}
