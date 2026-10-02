import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Fraunces } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Cursor from "@/components/ui/Cursor";
import ScrollProgress from "@/components/ui/ScrollProgress";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "Alabi Emmanuel | Full-stack Developer",
  description:
    "Computer Engineering student and full-stack developer. I build tools people actually use.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${jetbrainsMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      {/* bg-black and text-snow live on body, so the footer and the overscroll area match the page */}
      <body className="min-h-full flex flex-col bg-black text-snow">
        <Cursor />
        <ScrollProgress />
        <Nav />
        <SmoothScroll>{children}</SmoothScroll>
        <Footer />
      </body>
    </html>
  );
}