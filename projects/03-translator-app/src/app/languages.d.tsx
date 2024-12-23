export const Lang_Symbols_COUNTRIES = {
  af: 'Afrikaans',
  ak: 'Akan',
  am: 'Amárico',
  ar: 'Árabe',
  as: 'Asamés',
  ay: 'Aimara',
  az: 'Azerbaiyano',
  be: 'Bielorruso',
  bg: 'Búlgaro',
  bho: 'Bhojpuri',
  bm: 'Bambara',
  bn: 'Bengalí',
  bs: 'Bosnio',
  ca: 'Catalán',
  ceb: 'Cebuano',
  ckb: 'Kurdo central',
  co: 'Corso',
  cs: 'Checo',
  cy: 'Galés',
  da: 'Danés',
  de: 'Alemán',
  doi: 'Dogri',
  dv: 'Maldivo',
  ee: 'Ewe',
  el: 'Griego',
  en: 'Inglés',
  eo: 'Esperanto',
  es: 'Español',
  et: 'Estonio',
  eu: 'Euskera',
  fa: 'Persa',
  fi: 'Finlandés',
  fr: 'Francés',
  fy: 'Frisón',
  ga: 'Irlandés',
  gd: 'Gaélico escocés',
  gl: 'Gallego',
  gn: 'Guaraní',
  gom: 'Konkani',
  gu: 'Guyaratí',
  ha: 'Hausa',
  haw: 'Hawaiano',
  he: 'Hebreo',
  hi: 'Hindi',
  hmn: 'Hmong',
  hr: 'Croata',
  ht: 'Criollo haitiano',
  hu: 'Húngaro',
  hy: 'Armenio',
  id: 'Indonesio',
  ig: 'Igbo',
  ilo: 'Ilocano',
  is: 'Islandés',
  it: 'Italiano',
  iw: 'Hebreo',
  ja: 'Japonés',
  jv: 'Javanés',
  jw: 'Javanés',
  ka: 'Georgiano',
  kk: 'Kazajo',
  km: 'Jemer',
  kn: 'Canarés',
  ko: 'Coreano',
  kri: 'Krio',
  ku: 'Kurdo',
  ky: 'Kirguís',
  la: 'Latín',
  lb: 'Luxemburgués',
  lg: 'Luganda',
  ln: 'Lingala',
  lo: 'Lao',
  lt: 'Lituano',
  lus: 'Lushai',
  lv: 'Letón',
  mai: 'Maithili',
  mg: 'Malgache',
  mi: 'Maorí',
  mk: 'Macedonio',
  ml: 'Malayalam',
  mn: 'Mongol',
  zh: 'Chino',
  'zh-CN': 'Chino (simplificado)',
  'zh-TW': 'Chino (tradicional)',
  tr: 'Turco',
  ru: 'Ruso',
  no: 'Noruego',
}

let sortable = []
export type Lang_Symbols = keyof typeof Lang_Symbols_COUNTRIES

for (var lang in Lang_Symbols_COUNTRIES) {
  sortable.push([lang, Lang_Symbols_COUNTRIES[lang as Lang_Symbols]])
}

sortable.sort((a: any, b: any) => {
  return a[1] - b[1]
})

let objSorted: { [key: string]: string } = {}

sortable.forEach(function (item: any) {
  objSorted[item[0]] = item[1]
})

export const entries = Object.entries(objSorted)
