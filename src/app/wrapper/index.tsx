import Project from "@scenes/project";
import TimelineElement from "@scenes/timelineElement";
import { UseCases, ViewModels } from "./type";
import { useWrapperContext } from "./wrapper";
import styles from "./styles.module.scss";

function Wrapper() {
  const { view, pushView } = useWrapperContext();

  const close = () => {
    pushView({ useCase: UseCases.None, data: null });
  };

  const modals = {
    [UseCases.Project]: ({ project }: ViewModels[UseCases.Project]) => (
      <Project project={project} />
    ),
    [UseCases.TimelineElement]: ({
      element,
    }: ViewModels[UseCases.TimelineElement]) => (
      <TimelineElement element={element} />
    ),
  };

  return (
    <div>
      {view.useCase !== UseCases.None && (
        <div onClick={close} className={styles.modal}>
          <div className={styles.children} onClick={(e) => e.stopPropagation()}>
            {modals[view.useCase](view.data)}
          </div>
        </div>
      )}
    </div>
  );
}

export { Wrapper };
