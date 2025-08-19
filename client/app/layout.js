import { Montserrat, Roboto } from 'next/font/google'
import "./globals.css";
import Header from './GeneralComponents/Header';
import Header2 from './GeneralComponents/Header2';
import Footer from './GeneralComponents/Footer';
import CookiePopup from './cookies/components/CookiePopup';

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable} overflow-x-hidden `}>
          <Header/>
          <Header2/>
        {children}
        <CookiePopup/>
        <Footer/>
      </body>
    </html>
  );
}
