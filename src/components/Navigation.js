"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import navigationData from "@/data/navigationData";

const Navigation = () => {
  const pathname = usePathname(); // e.g. "/content/html"
  const pathParts = pathname.split("/");
  const currentPageName = pathParts[2]; // "html"

  const currentPage = navigationData.pages.find(
    (page) => page.name === currentPageName
  );

  const subpages = currentPage?.subpages || [];

  return (
    <nav className="navigation">
      <ul className="navigation-list">
        {subpages.map((sub) => (
          <li key={sub.url}>
            <Image
              src="/angle-right-square.svg"
              width={30}
              height={30}
              alt="arrow"
            />
            <Link className="navLink" href={sub.url}>
              {sub.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
