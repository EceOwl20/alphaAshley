import { defineRouting } from 'next-intl/routing';

export const config = {
  locales: ['tr', 'en', 'de'],
  defaultLocale: 'tr',
  localeDetection: true,
  localePrefix: 'always',
  pathnames : {
  '/': {
    tr: '/',
    en: '/',
    de: '/',
  },

     '/iletisim': {
    tr: '/iletisim',
    en: '/contact',
    de: '/kontakt'
  },

  '/hakkimizda': {
    tr: '/hakkimizda',
    en: '/about-us',
    de: '/uber-uns'
  },
  '/insankaynaklari': {
    tr: '/insankaynaklari',
    en: '/human-resources',
    de: '/personalabteilung'
  },
  '/referanslarimiz': {
    tr: '/referanslarimiz',
    en: '/references',
    de: '/referenzen'
  },
  '/saglikturizmi': {
    tr: '/saglikturizmi',
    en: '/health-tourism',
    de: '/gesundheitstourismus'
  },
  '/videolar': {
    tr: '/videolar',
    en: '/videos',
    de: '/videos'
  },
  '/hizmetlerimiz': {
    tr: '/hizmetlerimiz',
    en: '/services',
    de: '/dienstleistungen'
  }

}

};

export const routing = defineRouting(config);