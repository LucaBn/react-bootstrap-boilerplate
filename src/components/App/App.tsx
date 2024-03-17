import React, { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";

// Components
import Navbar from "@/components/UI/Organisms/Navbar/Navbar";
import Footer from "@/components/UI/Organisms/Footer/Footer";

// Providers
import { useTheme } from "@/components/providers/ThemeProvider";

// Constants
import { ThemeList } from "@/constants/themes";

const App: React.FC = () => {
  const { theme } = useTheme();

  const { pathname } = useLocation();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    const currentPathWithoutLang = pathname.split("/").slice(2).join("/");
    const previousPathWithoutLang = previousPathname.current
      .split("/")
      .slice(2)
      .join("/");

    if (currentPathWithoutLang !== previousPathWithoutLang) {
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }

    previousPathname.current = pathname;
  }, [pathname]);

  const textColorClass =
    theme === ThemeList.Dark
      ? `text-${ThemeList.Light}`
      : `text-${ThemeList.Dark}`;

  document.body.dataset.bsTheme = theme;

  return (
    <div className={`${textColorClass}`}>
      <Navbar />
      <main className="bg-body-secondary">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
