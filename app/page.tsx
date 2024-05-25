import Image from "next/image";
import styles from "./page.module.css";
import Button from "./components/button/Button";
import Show from "./components/showHide/Show";

export default function Home() {
  return (
    <main className={styles.main}>
      <Button />
      <Show />
    </main>
  );
}