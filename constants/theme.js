import { useCallback, useEffect, useState } from "react";

// Light/dark theme. The initial theme is applied by an inline script in
// index.html (before first paint) so there's no flash of the wrong theme;
// this hook keeps React in sync and handles toggling.
const STORAGE_KEY = "gce-theme";

const readStored = () => {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "light" || v === "dark" ? v : null;
  } catch {
    return null;
  }
};

const systemTheme = () =>
  window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const apply = (theme) => {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "dark" ? "#07101a" : "#ffffff");
};

export const useTheme = () => {
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  // Follow the operating system until the visitor makes an explicit choice.
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!mq) return;
    const onChange = () => {
      if (readStored()) return;
      const next = systemTheme();
      apply(next);
      setTheme(next);
    };
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  const toggle = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    // Cross-fade colours for this switch only.
    root.classList.add("theme-transition");
    apply(next);
    setTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Private mode / storage blocked: the switch still works for this visit.
    }
    window.dispatchEvent(new CustomEvent("gce-theme-change", { detail: next }));
    setTimeout(() => root.classList.remove("theme-transition"), 400);
  }, [theme]);

  // Keep every toggle on the page (desktop, mobile, drawer) in sync.
  useEffect(() => {
    const onExternal = (e) => setTheme(e.detail);
    window.addEventListener("gce-theme-change", onExternal);
    return () => window.removeEventListener("gce-theme-change", onExternal);
  }, []);

  return { theme, toggle };
};
