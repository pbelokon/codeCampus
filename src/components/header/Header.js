import styles from "./header.module.css";
import { getContentList } from "@/helpers/fileHandler";
import Link from "next/link";
const Header = async () => {
  const sections = await getContentList();

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <ul>
          {sections.map((section) => (
            <Link href={`/${section}`} key={section}>
              {section}
            </Link>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
