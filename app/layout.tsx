import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SmoothScroller from "./components/SmoothScroller";
import profile from "@/data/sivanargana.json";
import type { ProfileData } from "@/types/profile";
 
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const data = profile as ProfileData;

export const metadata: Metadata = {
  title: `${data.name} | ${data.title}`,
  description: data.profile_summary,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`} > 
        <Header />
        <SmoothScroller>
          {children}
          <Footer />
        </SmoothScroller>
      </body>
    </html>
  );
}
