interface TimelineElement {
  name: string;
  startDate: Date;
  endDate: Date;
  description: string;
  type: "SCHOOL" | "WORK";
  color: string;
}

export type { TimelineElement };
