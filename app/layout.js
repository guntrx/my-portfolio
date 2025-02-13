import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "./component/nav";
import Footer from "./component/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "My Portofolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center justify-center mt-2 lg:mt-8 mb-20 lg:mb-40`}
      >
         <main className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col max-w-[640px] w-full">
          <Navbar/>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
