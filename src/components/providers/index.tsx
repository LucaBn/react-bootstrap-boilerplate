// Providers
import { ReactRouterProvider } from "@/components/providers/ReactRouterProvider/ReactRouterProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider/ThemeProvider";

export const Providers = () => {
  return (
    <ThemeProvider>
      <ReactRouterProvider />
    </ThemeProvider>
  );
};
