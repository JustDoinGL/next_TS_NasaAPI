"use client";

import { FooterProps } from "./Footer.type";

import styles from "./Footer.module.css";
import useTheme from "@/hooks/useTheme";

const Footer = ({ text }: FooterProps) => {
  const { isDark } = useTheme();
  return (
    <footer className={styles.footer}>
      <a
        className={isDark ? styles.footer__link : styles.footer__linkLight}
        href="https://github.com/JustDoinGL"
      >
        {text}
      </a>
    </footer>
  );
};

export default Footer;
