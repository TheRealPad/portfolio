import { Project } from "@app/data/project.ts";

enum UseCases {
  None,
  Project,
}

interface ViewModels {
  [UseCases.None]: null;
  [UseCases.Project]: { project: Project };
}

export { UseCases };
export type { ViewModels };
