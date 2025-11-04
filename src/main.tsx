import "@/i18n";
import "@/styles/index.scss";

import React from "react";
import ReactDOM from "react-dom/client";

import { Providers } from "@/components/providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>
);
