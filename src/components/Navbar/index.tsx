import { useState } from "react";
import { ReactComponent as LogoBlack } from "../../assets/logo_black.svg";
import { ReactComponent as LogoBlackSplit1 } from "../../assets/logo_black_split_1.svg";
import { ReactComponent as LogoBlackSplit2 } from "../../assets/logo_black_split_2.svg";
import { ReactComponent as LogoBlackSplit3 } from "../../assets/logo_black_split_3.svg";

const Navbar = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <nav className="p-4 static top-0 w-full">
      <div className="w-full mx-auto flex justify-center items-center space-x-6">
        {/* Mobile: just the main logo */}
        <div className="md:hidden flex items-center justify-center h-12">
          <LogoBlack className="h-12 w-auto" />
        </div>
        {/* Desktop: split/hover logic */}
        <div
          className="hidden md:flex items-center justify-center h-12 relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ width: 48 * 3 + 8 * 2 }}
        >
          {/* Single logo */}
          <LogoBlack
            className={`h-12 w-auto absolute left-1/2 top-0 -translate-x-1/2 transition-opacity duration-300 ${
              hovered ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            style={{ zIndex: 2 }}
          />
          {/* Split logos */}
          <div
            className={`flex items-center justify-center gap-1 h-12 absolute left-1/2 top-0 -translate-x-1/2 transition-opacity duration-300 ${
              hovered ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            style={{ zIndex: 3 }}
          >
            <LogoBlackSplit1 className="h-8 w-auto" />
            <LogoBlackSplit2 className="h-8 w-auto" />
            <LogoBlackSplit3 className="h-8 w-auto" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
