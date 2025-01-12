import { ReactNode } from "react";

interface Props {
  children: (args: { input: ReactNode; list: ReactNode }) => {
    input: ReactNode;
    list: ReactNode;
  };
}

export { Props };
