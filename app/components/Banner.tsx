import Ticker from "./Ticker";

type BannerProps = {
  name: string;
  title: string;
  specialization: string[];
  totalExperience: string;
};

export default function Banner({ name, title, specialization, totalExperience }: BannerProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
  <>
  <section className="relative min-h-screen overflow-hidden px-6 pt-34 pb-16 md:px-12 lg:px-16">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(244,114,182,0.2),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.2),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(245,158,11,0.25),transparent_40%)]" />
    <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12">
      <div className="lg:col-span-7" data-speed="1.08">
        <p className="mb-6 text-sm uppercase tracking-[0.36em] text-zinc-300">{totalExperience} crafting product interfaces</p>
        <h1 className="text-[clamp(2.6rem,7.2vw,6rem)] leading-[0.9] font-semibold uppercase text-zinc-50">
          {name}
        </h1>
        <p className="mt-4 max-w-xl text-[clamp(1.2rem,2.3vw,2rem)] font-light text-zinc-100">{title}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {specialization.map((item) => (
            <span key={item} className="rounded-full border border-zinc-600 px-4 py-1 text-sm uppercase tracking-[0.15em] text-zinc-100">
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="relative lg:col-span-5" data-speed="0.9">
        <div className="relative overflow-hidden rounded-4xl border border-zinc-700/60 bg-zinc-900/60 shadow-[0_35px_100px_rgba(0,0,0,0.45)]">
          <img src={`${basePath}/avtar.png`} alt={name} className="h-[520px] w-full object-contain object-bottom" />
        </div>
      </div>
    </div>
    <div className="relative mt-14 -mx-6 border-t border-zinc-700/50 pt-8 md:-mx-12 lg:-mx-16" data-speed="1.05">
      <Ticker name={name} title={title} />
    </div>
  </section>
  </>
  );
}
