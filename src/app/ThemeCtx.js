"use client";
import { ThemeProvider } from "next-themes";

function ThemeCtx({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-gray-950 bg-[#eee] dark:text-[#eee] text-gray-800 transition-colors duration-300 select-none min-h-screen ">
        {children}
      </div>
    </ThemeProvider>
  );
}

export default ThemeCtx;
