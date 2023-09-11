"use client";

import Link from "next/link";
import { NavbarProps } from "./Navbar.type";
import { usePathname } from "next/navigation";

import styles from "./Navbar.module.css";

const Navbar = ({ el }: NavbarProps) => {
  const pathname = usePathname();
  return (
    <div className={styles.nav}>
      {el.map((el) => {
        return (
          <Link className={pathname !== el.url ? styles.nav__link :  styles.nav__link__active}  key={el.url} href={`${el.url}`}>
            {el.text}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
