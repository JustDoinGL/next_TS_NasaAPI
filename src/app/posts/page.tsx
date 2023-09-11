import { Footer, Header, Navbar, Posts } from "@/components";
import styles from "./page.module.css";

// TODO: { url: "/asteroids", text: "Asteroids" }

const data = [
  { url: "/", text: "EPIC" },
  { url: "/posts", text: "Posts" },
];

export default async function Home() {
  return (
    <>
      <Header>
        <div className={styles.header}>
          <Navbar el={data} />
        </div>
      </Header>
      <main className={styles.main}>
        <Posts />
      </main>
      <Footer>
        <div className={styles.footer}>
          <a
            className={styles.footer__link}
            href="https://github.com/JustDoinGL"
          >
            Github repository
          </a>
        </div>
      </Footer>
    </>
  );
}
