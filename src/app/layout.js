import "./globals.css";
import { Inter } from "next/font/google";
import AosInit from "@/utils/aos";
import ScrollToTop from "@/utils/ScrollToTop";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fast-Food app",
  description: "online fast-food store",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={inter.className}>
        <AosInit />
         <ScrollToTop/>
        {children}
    
       
      </body>
    </html>
  );
}


