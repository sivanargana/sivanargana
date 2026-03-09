import profile from "@/data/sivanargana.json";
import type { ProfileData } from "@/types/profile";

export default function Contact() {
  const data = profile as ProfileData;

  return (
    <main className="px-6 pb-20 pt-36 md:px-12 lg:px-16">
      <div className="mx-auto max-w-5xl rounded-4xl border border-zinc-700 p-8 md:p-12">
        <p className="text-sm uppercase tracking-[0.32em] text-zinc-400">Contact</p>
        <h1 className="mt-4 text-[clamp(2rem,5.5vw,5rem)] leading-[0.95]">Let us work together.</h1>
        <div className="mt-8 grid gap-4 text-zinc-200 md:grid-cols-2">
          <a href={`mailto:${data.contact.email}`} className="rounded-xl border border-zinc-700 p-4 hover:border-zinc-200 transition-colors">{data.contact.email}</a>
          <a href={`tel:${data.contact.mobile}`} className="rounded-xl border border-zinc-700 p-4 hover:border-zinc-200 transition-colors">{data.contact.mobile}</a>
          <p className="rounded-xl border border-zinc-700 p-4 md:col-span-2">{data.contact.location}</p>
        </div>
      </div>
    </main>
  );
}
