import { ReactNode } from "react";

interface Props {
  className?: string;
  children: (args: { input: ReactNode; list: ReactNode }) => {
    input: ReactNode;
    list: ReactNode;
  };
}

export { Props };
