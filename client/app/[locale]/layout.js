import { Montserrat, Roboto } from 'next/font/google'
import "../globals.css";
import Header from './GeneralComponents/Header';
import Header2 from './GeneralComponents/Header2';
import Footer from './GeneralComponents/Footer';
import CookiePopup from './cookies/components/CookiePopup';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const inter = Montserrat({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
 
const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
})

export const metadata = {
  title: "Alpha Ashley Danışmanlık",
  description: "Alpha Ashley Danışmanlık",
    icons: {
    icon: "/favicon.ico",          
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",     
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}


export default async function RootLayout({ children, params }) {
   const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }
     setRequestLocale(locale)
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${inter.variable} ${roboto.variable} overflow-x-hidden `}>
           <NextIntlClientProvider locale={locale} messages={messages}>
          <Header/>
          <Header2/>
        {children}
        <CookiePopup/>
        <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
