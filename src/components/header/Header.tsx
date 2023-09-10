import { HeaderProps } from "./Header.type";

import styles from "./Header.module.css";

const Header = ({ children }: HeaderProps) => {
  return <header className={styles.header}>{children}</header>;
};

export default Header;
