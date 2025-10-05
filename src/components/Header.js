import React from "react";
import Link from "next/link";

const Header = ({ navigationItems = ["test"] }) => {
  return (
    <header className="header">
      <nav className="header-nav">
        <Link className="Link" key="home" href={`/`}>
          HOME
        </Link>
        <ul>
          {navigationItems.map((item) => {
            return (
              <li key={item}>
                <Link className="Link" href={`/content/${item}`}>
                  {item.toUpperCase()}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
