/* eslint-disable react/no-unescaped-entities */
import { Footer, Header } from "@/components";
import type { Metadata } from "next";

import styles from "./pages.module.css";

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
      <Header>
        <div className={styles.header__container}>
          <h2 className={styles.header__title}>ARMAGEDDON 2023</h2>
          <div>
            <p className={styles.header__text}>LLC "Team im. B. Willis."</p>
            <p className={styles.header__text}>
              We've been blowing up asteroids since 1998.
            </p>
          </div>
        </div>
      </Header>
      <main>{children}</main>
      <Footer>
        <></>
      </Footer>
    </>
  );
}
