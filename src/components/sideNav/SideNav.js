import { getSectionList } from "@/helpers/fileHandler";
import styles from "./sidenav.module.css";

import React from "react";
import Link from "next/link";

const SideNav = async ({ section }) => {
  const sections = await getSectionList(section);
  return (
    <aside className={styles.aside}>
      <nav className={styles.nav}>
        <ul>
          {sections.map(({ slug }) => (
            <Link href={`/${section}/${slug}`} key={slug}>
              {slug}
            </Link>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideNav;
