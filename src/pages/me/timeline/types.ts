interface TimelineElement {
  name: string;
  startDate: Date;
  endDate: Date;
  description: string;
  type: "SCHOOL" | "WORK";
}

export type { TimelineElement };
