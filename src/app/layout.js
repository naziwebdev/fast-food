import "./globals.css";
import AosInit from "@/utils/aos";
import ScrollToTop from "@/utils/ScrollToTop";
import localFont from 'next/font/local'



const shabnam = localFont({
  src: '/fonts/shabnam/Shabnam-Medium.ttf',
  fontFamily: 'Shabnam',
});

export const metadata = {
  title: "Fast-Food app",
  description: "online fast-food store",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" >
      <body  className={shabnam.className}>
        <AosInit />
         <ScrollToTop/>
        {children}
    
       
      </body>
    </html>
  );
}


