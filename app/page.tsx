import AboutHome from "./components/AboutHome";
import Banner from "./components/Banner";
import Works from "./components/Works";
import profile from "@/data/sivanargana.json";
import type { ProfileData } from "@/types/profile";
import SkillMatrix from "@/app/components/SkillMatrix";
import ExperienceTimeline from "@/app/components/ExperienceTimeline";
import ContactStrip from "@/app/components/ContactStrip";

 
export default function Home() {
  const data = profile as ProfileData;

  return (
  <>
    <Banner
      name={data.name}
      title={data.title}
      specialization={data.specialization}
      totalExperience={data.experience.total_years}
    />
    <AboutHome
      summary={data.profile_summary}
      availability={data.availability}
      keySkills={data.key_skills}
      languages={data.languages}
    />
    <SkillMatrix skills={data.it_skills} />
    <Works projects={data.projects} />
    <ExperienceTimeline experience={data.work_experience} education={data.education} />
    <ContactStrip contact={data.contact} />
 
  </>
  );
}
