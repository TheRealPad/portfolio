interface Work {
  title: string;
  startDate: Date;
  endDate?: Date;
  technologies: string[];
  description: string;
  company: string;
}

const works: Work[] = [
  {
    title: "work.seasonal.title",
    startDate: new Date(2019, 6),
    endDate: new Date(2019, 7),
    technologies: [],
    description: "work.seasonal.description",
    company: "Carrefour",
  },
  {
    title: "work.seasonal.title",
    startDate: new Date(2020, 6),
    endDate: new Date(2020, 7),
    technologies: [],
    description: "work.seasonal.description",
    company: "Carrefour",
  },
  {
    title: "work.carrefour.title",
    startDate: new Date(2021, 6),
    endDate: new Date(2021, 11),
    technologies: ["Angular", "Java Spring boot"],
    description: "work.carrefour.description",
    company: "Carrefour",
  },
  {
    title: "work.augeoOne.title",
    startDate: new Date(2022, 9),
    endDate: new Date(2023, 6),
    technologies: ["React TS", "Scss", "Redux", "Docker"],
    description: "work.augeoOne.description",
    company: "Augeo Software",
  },
  {
    title: "work.augeoTwo.title",
    startDate: new Date(2024, 5),
    endDate: new Date(2025, 1),
    technologies: [
      "React TS",
      "Scss",
      "Redux",
      "Docker",
      "Java Spring Boot",
      "MySQL",
      "Liquibase",
    ],
    description: "work.augeoTwo.description",
    company: "Augeo Software",
  },
  {
    title: "work.sopra.title",
    startDate: new Date(2025, 2),
    technologies: [
      "React TS",
      "Scss",
      "Redux",
      "Docker",
      "Java Spring Boot",
      "MySQL",
      "Liquibase",
    ],
    description: "work.sopra.description",
    company: "Sopra Steria",
  },
];

export { works };
