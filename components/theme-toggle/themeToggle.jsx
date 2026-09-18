import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../constants/theme";

// Sun/moon switch. `onDark` styles it for use over the dark hero.
const ThemeToggle = ({ onDark = false, withLabel = false, className = "" }) => {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <span
        className={`relative w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${
          onDark
            ? "border-white/30 text-white hover:bg-white/10"
            : "border-line/15 text-fg hover:bg-surface"
        }`}
      >
        <FaSun
          className={`absolute text-[15px] transition-all duration-500 ${
            isDark ? "opacity-0 -rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
          }`}
        />
        <FaMoon
          className={`absolute text-[14px] transition-all duration-500 ${
            isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"
          }`}
        />
      </span>
      {withLabel ? (
        <span className="text-base font-medium text-fg">
          {isDark ? "Light mode" : "Dark mode"}
        </span>
      ) : (
        ""
      )}
    </button>
  );
};

export default ThemeToggle;
