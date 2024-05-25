import Image from "next/image";
import styles from "./page.module.css";
import Button from "./components/button/Button";

export default function Home() {
  return (
    <main className={styles.main}>
      <Button title="რეგისტრაცია" mode="block" />
    </main>
  );
}