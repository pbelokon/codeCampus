import React from "react";
import NavButton from "./NavButton";

const Header = () => {
  return (
    <header className="header box">
      <nav className="header-nav">
        <ul>
          <NavButton />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
