import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from "@/Components/Navber";
import Footer from "@/Components/Footer";
import NextAuthProvider from "@/Provider/NextAuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextAuthProvider><body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navber/>
        {children}
        <Footer/>
      </body></NextAuthProvider>
      
    </html>
  );
}
