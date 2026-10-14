export const site = {
  name: "Hável Bt.",
  legalName: "Hável és Társa",
  title: "Hável Bt. — víz-, gáz-, fűtésszerelés",
  description:
    "Hável Bt. épületgépészet Vácon. Családi házak, irodaházak, csarnokok és benzinkutak víz-, gáz-, csatorna- és fűtési rendszereinek kivitelezése 1983 óta.",
  url: "https://havel.hu",
  email: "havelbt@t-online.hu",
  phoneDisplay: "06 20 953 5710",
  phoneHref: "tel:+36209535710",
  street: "Nagymező u. 47.",
  postalCode: "2600",
  city: "Vác",
  mapsHref:
    "https://maps.google.com/?q=2600+V%C3%A1c,+Nagymez%C5%91+utca+47.",
} as const;

export const nav = [
  { href: "/", label: "Bemutatkozás" },
  { href: "/szolgaltatasok", label: "Kivitelezés" },
  { href: "/kazanok", label: "Kazánok" },
] as const;

export const manufacturers = [
  { name: "Viessmann", href: "https://www.viessmann.hu/", host: "www.viessmann.hu" },
  { name: "Vaillant", href: "https://www.vaillant.hu/", host: "www.vaillant.hu" },
  { name: "Immergas", href: "https://www.immergas.hu/", host: "www.immergas.hu" },
  { name: "Junkers", href: "https://www.junkers.hu/", host: "www.junkers.hu" },
  { name: "Remeha", href: "https://www.remeha.hu/", host: "www.remeha.hu" },
  { name: "Buderus", href: "https://www.buderus.hu/", host: "www.buderus.hu" },
  { name: "Weishaupt", href: "https://www.weishaupt.hu/", host: "www.weishaupt.hu" },
] as const;

export const boilerSections = [
  { id: "padlofutes", label: "Padlófűtés" },
  { id: "falfutes", label: "Falfűtés" },
  { id: "kondenzacios", label: "Kondenzációs kazán" },
  { id: "turbos", label: "Turbós kazán" },
  { id: "atmoszferikus", label: "Atmoszférikus kazán" },
  { id: "gyartok", label: "Gyártók" },
] as const;
