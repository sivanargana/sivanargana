type AboutHomeProps = {
  summary: string;
  availability: string;
  keySkills: string[];
  languages: string[];
};

const AboutHome = ({ summary, availability, keySkills, languages }: AboutHomeProps) => {
  return (
  <section className="px-6 py-18 md:px-12 lg:px-16">
    <div className="mx-auto max-w-7xl">
    <div className="grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-8" data-speed="1.08">
           <p className="text-[clamp(1.6rem,3.3vw,2.5rem)] font-light leading-[1.15] text-zinc-100 whitespace-pre-line">{summary}</p>
      </div>
      <div className="lg:col-span-4" data-speed="1.05">
        <div className="aspect-square max-w-55 rounded-full border border-zinc-600 bg-zinc-100 text-black flex flex-col items-center justify-center text-xl font-medium">
          {availability}
        </div>
      </div>
    </div>

    <div className="mt-12 flex flex-wrap gap-3">
      {keySkills.map((skill) => (
        <span key={skill} className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-200 transition-colors hover:border-zinc-200 hover:text-white">
          {skill}
        </span>
      ))}
    </div>
 
    </div>
  </section>  
  )
}

export default AboutHome