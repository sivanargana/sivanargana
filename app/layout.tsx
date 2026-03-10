import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SmoothScroller from "./components/SmoothScroller";
import profile from "@/data/sivanargana.json";
import type { ProfileData } from "@/types/profile";
 
const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const data = profile as ProfileData;

export const metadata: Metadata = {
  title: `${data.name} | ${data.title}`,
  description: data.profile_summary,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <SmoothScroller>
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroller>
      </body>
    </html>
  );
}
