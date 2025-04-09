import { Montserrat, Roboto } from 'next/font/google'
import "./globals.css";
import Header from './GeneralComponents/Header';
import Header2 from './GeneralComponents/Header2';
import Footer from './GeneralComponents/Footer';

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable} `}>
          <Header/>
          <Header2/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
