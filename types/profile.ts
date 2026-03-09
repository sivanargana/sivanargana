export type WorkExperience = {
  company: string;
  type: string;
  duration: string;
  description: string;
};

export type EducationItem = {
  degree: string;
  university?: string;
  institution?: string;
  status?: string;
  year?: string;
};

export type ITSkill = {
  skill: string;
  level: string;
  experience: string;
};

export type ProjectItem = {
  name: string;
  duration: string;
  company: string;
  description: string;
  stack: string[];
};

export type ProfileData = {
  name: string;
  title: string;
  specialization: string[];
  availability: string;
  contact: {
    mobile: string;
    email: string;
    location: string;
  };
  experience: {
    total_years: string;
  };
  profile_summary: string;
  key_skills: string[];
  languages: string[];
  online_profiles: {
    codepen: string;
    stackblitz: string;
    github: string;
  };
  work_experience: WorkExperience[];
  education: EducationItem[];
  it_skills: ITSkill[];
  projects: ProjectItem[];
};
