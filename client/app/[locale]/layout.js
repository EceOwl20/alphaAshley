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
import Script from "next/script";
import PixelRouteTracker from "./GeneralComponents/PixelRouteTracker"; 
import { Suspense } from "react";

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
 

const FB_PIXEL_ID = "1310023347499524";

export default async function RootLayout({ children, params }) {
   const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }
     setRequestLocale(locale)
  const messages = await getMessages();

  return (
    <html lang={locale}>
       <head>
        {/* Meta Pixel – head içine yerleşir */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){
                if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)
              }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${roboto.variable} overflow-x-hidden`}>
           <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
           <NextIntlClientProvider locale={locale} messages={messages}>
          <Header/>
          <Header2/>
        
       <Suspense fallback={null}>
            <PixelRouteTracker />
          </Suspense>
        {children}
        <CookiePopup/>
        <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
