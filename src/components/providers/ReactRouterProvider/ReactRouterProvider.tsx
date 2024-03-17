import { ReactNode } from "react";

import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

// Components
import App from "@/components/App/App";
import HomePage from "@/components/UI/Templates/HomePage/HomePage";
import { LanguageList } from "@/typings/i18next";

const Error404: ReactNode = <p>Error 404</p>;

const LanguageRoute = () => {
  const { language } = useParams();
  const supportedLanguages = Object.values(LanguageList);

  if (!supportedLanguages.includes(language as LanguageList)) {
    return Error404;
  }

  return <Outlet />;
};

export const ReactRouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path=":language" element={<LanguageRoute />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="*" element={Error404} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
