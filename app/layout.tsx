import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SmoothScroller from "./components/SmoothScroller";
import profile from "@/data/sivanargana.json";
import type { ProfileData } from "@/types/profile";
 
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
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
      <body className={`${spaceGrotesk.className} antialiased min-h-screen flex flex-col`}>
        <Header />
        <SmoothScroller>
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroller>
      </body>
    </html>
  );
}
