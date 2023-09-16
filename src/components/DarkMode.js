"use client";
import { MdOutlineLightMode } from "react-icons/md";
import { BsMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
function DarkMode() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      {currentTheme === "light" ? (
        <MdOutlineLightMode
          className="cursor-pointer hover:text-amber-500"
          onClick={() => setTheme("dark")}
        />
      ) : (
        <BsMoonFill
          className="cursor-pointer hover:text-amber-500"
          onClick={() => setTheme("light")}
        />
      )}
    </>
  );
}

export default DarkMode;
