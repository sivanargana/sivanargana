"use client";

import { useMemo, useState } from "react";
import type { ITSkill } from "@/types/profile";

type SkillMatrixProps = {
  skills: ITSkill[];
};

const levels = ["All", "Expert", "Advanced", "Intermediate"] as const;
type Level = (typeof levels)[number];

export default function SkillMatrix({ skills }: SkillMatrixProps) {
  const [level, setLevel] = useState<Level>("All");

  const filteredSkills = useMemo(() => {
    if (level === "All") {
      return skills;
    }
    return skills.filter((item) => item.level === level);
  }, [level, skills]);

  return (
    <section className="px-6 py-18 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <h2 className="mr-4 text-sm uppercase tracking-[0.34em] text-zinc-400">Skill Matrix</h2>
          {levels.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setLevel(item)}
              className={`rounded-full border px-4 py-1 text-sm transition-colors ${
                level === item
                  ? "border-zinc-100 bg-zinc-100 text-black"
                  : "border-zinc-700 text-zinc-300 hover:border-zinc-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((item) => (
            <article
              key={item.skill}
              className="rounded-2xl border border-zinc-700/70 bg-zinc-900/65 p-5 transition-transform duration-300 hover:-translate-y-1"
            >
              <h3 className="text-2xl text-zinc-100">{item.skill}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-zinc-400">{item.level}</p>
              <p className="mt-4 text-zinc-200">Experience: {item.experience}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
