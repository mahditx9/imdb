import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import DarkMode from "./DarkMode";
function Header() {
  return (
    <div className="flex items-center justify-between py-2 px-3 max-w-6xl sm:mx-auto">
      <div className="flex items-center gap-5">
        <MenuItem title="Home" path="/" Icon={AiFillHome} />
        <MenuItem title="About" path="/" Icon={FcAbout} />
      </div>
      <div className="flex items-center gap-5 text-xl">
        <DarkMode />
        <div>
          <span className="bg-amber-500 p-1 rounded-lg">IMDb </span>
          <span className="sm:inline ml-1 hidden">Clone</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
