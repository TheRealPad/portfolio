import { Project } from "@app/data/project.ts";
import { TimelineElement } from "../../pages/me/timeline/types.ts";

enum UseCases {
  None,
  Project,
  TimelineElement,
}

interface ViewModels {
  [UseCases.None]: null;
  [UseCases.Project]: { project: Project };
  [UseCases.TimelineElement]: { element: TimelineElement };
}

export { UseCases };
export type { ViewModels };
