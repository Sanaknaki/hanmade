import React, { useState } from "react";
import LogoBlack from "../../assets/logo_black.svg";
import LogoBlackSplit1 from "../../assets/logo_black_split_1.svg";
import LogoBlackSplit2 from "../../assets/logo_black_split_2.svg";
import LogoBlackSplit3 from "../../assets/logo_black_split_3.svg";

const Navbar = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <nav className="p-4 static top-0 w-full">
      <div className="w-full mx-auto flex justify-center items-center space-x-6">
        <div
          className="text-white font-bold text-xl flex items-center justify-center h-12 relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ width: 48 * 3 + 8 * 2 }} // 3 images, 4px gap
        >
          {!hovered ? (
            <img
              src={LogoBlack}
              alt="logo"
              className="h-12 transition-all duration-300"
            />
          ) : (
            <div className="flex items-center justify-center gap-0">
              <img src={LogoBlackSplit1} alt="logo split 1" className="h-5" />
              <img src={LogoBlackSplit2} alt="logo split 2" className="h-5" />
              <img src={LogoBlackSplit3} alt="logo split 3" className="h-5" />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
