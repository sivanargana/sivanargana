import profile from "@/data/sivanargana.json";
import type { ProfileData } from "@/types/profile";

const Footer = () => {
  const data = profile as ProfileData;

  return (
 <footer className="px-6 py-8 text-zinc-400 md:px-12 lg:px-16">
  <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 border-t border-zinc-800 pt-6 text-sm">
    <span>{data.name}</span>
    <span className="text-zinc-600">|</span>
    <span>{data.title}</span>
    <span className="text-zinc-600">|</span>
    <span>{new Date().getFullYear()}</span>
  </div>
 </footer>
  )
}

export default Footer
