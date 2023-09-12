import { Footer, Header, Navbar, Posts } from "@/components";
import styles from "./page.module.css";
import { ChangeMode } from "@/components/UI/myToggle/ChangeMode";

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
          <ChangeMode />
        </div>
        <div className=""></div>
      </Header>
      <main className={styles.main}>
        <Posts />
      </main>
      <Footer text="Github repository" />
    </>
  );
}
