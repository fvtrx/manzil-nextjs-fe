"use client";
import { ThemeProvider, useTheme } from "next-themes";
const NextThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  return <ThemeProvider defaultTheme={theme}>{children}</ThemeProvider>;
};
export default NextThemeProvider;
