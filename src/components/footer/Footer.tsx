import { FooterProps } from "./Footer.type";

import styles from "./Footer.module.css";

const Footer = ({ children }: FooterProps) => {
  return <footer className={styles.footer}>{children}</footer>;
};

export default Footer;
