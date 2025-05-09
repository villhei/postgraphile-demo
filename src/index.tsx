import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Main from "~/src/app/App";

const container = document.getElementById("app")!;

const root = createRoot(container);
root.render(
  <StrictMode>
    <Main />
  </StrictMode>,
);
