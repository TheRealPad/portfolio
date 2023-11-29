interface Project {
  title: string;
  description: string;
  isTeamProject: boolean;
  groupSize?: number;
  keywords: string[];
  link?: string;
  github?: string;
}

export type { Project };
