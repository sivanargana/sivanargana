import type { EducationItem, WorkExperience } from "@/types/profile";

type ExperienceTimelineProps = {
  experience: WorkExperience[];
  education: EducationItem[];
};

export default function ExperienceTimeline({ experience, education }: ExperienceTimelineProps) {
  return (
    <section className="px-6 py-18 md:px-12 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="mb-8 text-sm uppercase tracking-[0.34em] text-zinc-400">Experience</h2>
          <div className="space-y-5">
            {experience.map((item) => (
              <article key={`${item.company}-${item.duration}`} className="rounded-2xl border border-zinc-700/70 bg-zinc-900/60 p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{item.duration}</p>
                <h3 className="mt-3 text-2xl text-zinc-100">{item.company}</h3>
                <p className="mt-1 text-zinc-300">{item.type}</p>
                <p className="mt-4 text-zinc-200">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <h2 className="mb-8 text-sm uppercase tracking-[0.34em] text-zinc-400">Education</h2>
          <div className="space-y-4">
            {education.map((item) => (
              <article key={`${item.degree}-${item.year ?? item.status ?? "n-a"}`} className="rounded-2xl border border-zinc-700/70 p-5">
                <h3 className="text-xl text-zinc-100">{item.degree}</h3>
                <p className="mt-1 text-zinc-300">{item.university ?? item.institution}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-zinc-400">{item.status ?? item.year}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
