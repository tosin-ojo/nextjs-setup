import styles from "../styles/pages/Home.module.css";
import HeadTag from "../components/metaTags";

export default function Home() {
  return (
    <div className={styles.container}>
      <HeadTag title={`Creatiff: Home page`} />

      <img src="/logo.png" alt="Creatiff" />
    </div>
  );
}
