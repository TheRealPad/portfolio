import React from "react";
import ReactDOM from "react-dom/client";

import { WrapperContextProvider } from "@app/wrapper/wrapper.tsx";
import { Wrapper } from "@app/wrapper";
import "@app/translations/i18n.ts";
import { Rooter } from "@app/rooter";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WrapperContextProvider>
      <Wrapper />
      <Rooter />
    </WrapperContextProvider>
  </React.StrictMode>
);
