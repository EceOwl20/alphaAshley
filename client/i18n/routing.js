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
  }

}

};

export const routing = defineRouting(config);