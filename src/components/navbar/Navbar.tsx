"use client";

import Link from "next/link";
import { NavbarProps } from "./Navbar.type";
import { usePathname } from "next/navigation";

import styles from "./Navbar.module.css";
import useTheme from "@/hooks/useTheme";

const Navbar = ({ el }: NavbarProps) => {
  const pathname = usePathname();
  const { isDark } = useTheme();

  return (
    <div className={styles.nav}>
      {el.map((el) => {
        const getClassName = isDark
          ? pathname !== el.url
            ? styles.nav__link
            : `${styles.nav__link__active} ${styles.nav__link}`
          : pathname !== el.url
          ? styles.nav__linkDark
          : `${styles.nav__link__activeDark} ${styles.nav__linkDark}`;
        return (
          <Link className={getClassName} key={el.url} href={`${el.url}`}>
            {el.text}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
