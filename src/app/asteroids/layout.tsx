/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";

import styles from "./pages.module.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EPIC",
  description: "Earth Polychromatic Imaging Camera",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header style={{ backgroundColor: "black" }}>
        <div className={styles.header__container}>
          <Link href="/">
            <h2 className={styles.header__title}>ARMAGEDDON 2023</h2>
          </Link>
          <div className={styles.info}>
            <p className={styles.header__text}>LLC "Team im. B. Willis."</p>
            <p className={styles.header__text}>
              We've been blowing up asteroids since 1998.
            </p>
          </div>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
    </>
  );
}
