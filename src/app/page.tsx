import { Footer, Header, Navbar } from "@/components";
import styles from "./page.module.css";
import fetchEPIC from "@/actions/fetchEPIC";
import Slider from "@/components/UI/slider/Slider";
import { ChangeMode } from "@/components/UI/myToggle/ChangeMode";

const data = [
  { url: "/", text: "EPIC" },
  { url: "/posts", text: "Posts" },
  { url: "/asteroids", text: "Asteroids" }
];

export default async function Home() {
  const { getEPICimg } = fetchEPIC;
  const { arrUrl, dataToDay } = await getEPICimg();

  return (
    <>
      <Header>
        <div className={styles.header}>
          <Navbar el={data} />
          <ChangeMode />
        </div>
      </Header>
      <main className={styles.main}>
        <div className={styles.main__container}>
          <h1 className={styles.main__heading}>Photo Earth {dataToDay}</h1>
          <Slider arrUrl={arrUrl} />
        </div>
      </main>

      <Footer text="Github repository" />
    </>
  );
}
