import { Footer, Header, Navbar } from "@/components";
import styles from "./page.module.css";
import fetchEPIC from "@/actions/fetchEPIC";
import Slider from "@/components/UI/slider/Slider";

const data = [{ url: "/", text: "EPIC" }, { url: "/asteroids", text: "Asteroids" }];

export default async function Home() {
  const { getEPICimg } = fetchEPIC;
  const { arrUrl, dataToDay } = await getEPICimg();

  return (
    <>
      <Header>
        <div className={styles.header}>
          <Navbar el={data} />
        </div>
      </Header>
      <main className={styles.main}>
        <div className={styles.main__container}>
          <h1 className={styles.main__heading}>Photo Earth {dataToDay}</h1>
          <Slider arrUrl={arrUrl} />
        </div>
      </main>

      <Footer>
        <div className={styles.footer}>
        <a className={styles.footer__link} href="https://github.com/JustDoinGL">Github repository</a>
        </div>
      </Footer>
    </>
  );
}
