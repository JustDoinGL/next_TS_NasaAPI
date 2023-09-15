import { InfinityScroll } from "@/components";
import styles from "./pages.module.css";

const AsteroidsPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.img}></div>
        <div className={styles.infinity}>
          <InfinityScroll />
        </div>
      </div>
    </>
  );
};

export default AsteroidsPage;
