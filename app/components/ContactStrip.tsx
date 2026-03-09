type ContactStripProps = {
  contact: {
    mobile: string;
    email: string;
    location: string;
  };
};

export default function ContactStrip({ contact }: ContactStripProps) {
  return (
    <section className="px-6 py-20 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl rounded-4xl border border-zinc-700/80 bg-[linear-gradient(140deg,rgba(39,39,42,0.85),rgba(9,9,11,0.9))] p-8 md:p-12">
        <p className="text-sm uppercase tracking-[0.34em] text-zinc-400">Let us build something sharp</p>
        <h2 className="mt-3 text-[clamp(1.8rem,4.4vw,4rem)] leading-[0.95] text-zinc-100">Open for immediate joining and new product challenges.</h2>
        <div className="mt-8 grid gap-4 text-zinc-200 md:grid-cols-3">
          <a href={`mailto:${contact.email}`} className="rounded-xl border border-zinc-700 p-4 transition-colors hover:border-zinc-200">
            {contact.email}
          </a>
          <a href={`tel:${contact.mobile}`} className="rounded-xl border border-zinc-700 p-4 transition-colors hover:border-zinc-200">
            {contact.mobile}
          </a>
          <p className="rounded-xl border border-zinc-700 p-4">{contact.location}</p>
        </div>
      </div>
    </section>
  );
}
