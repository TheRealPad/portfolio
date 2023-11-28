import { TimelineElement } from "./types.ts";

const timelineElements: TimelineElement[] = [
  {
    name: "Epitech",
    description: "timelineElements.epitech",
    type: "SCHOOL",
    startDate: new Date("2020-10-1"),
    endDate: new Date("2025-05-1"),
    color: "#0091d2",
  },
  {
    name: "San Francisco State University",
    description: "timelineElements.sfsu",
    type: "SCHOOL",
    startDate: new Date("2023-08-16"),
    endDate: new Date("2024-05-1"),
    color: "#CD9700",
  },
  {
    name: "Carrefour DSI",
    description: "timelineElements.carrefour",
    type: "WORK",
    startDate: new Date("2021-07-1"),
    endDate: new Date("2021-12-31"),
    color: "#254F9A",
  },
  {
    name: "Augeo Software (1)",
    description: "timelineElements.augeoOne",
    type: "WORK",
    startDate: new Date("2022-10-1"),
    endDate: new Date("2023-03-31"),
    color: "#f26200",
  },
  {
    name: "Augeo Software (2)",
    description: "timelineElements.augeoTwo",
    type: "WORK",
    startDate: new Date("2023-04-1"),
    endDate: new Date("2023-07-31"),
    color: "#f26200",
  },
];

export { timelineElements };
