'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Button from "./components/button/Button";
import Show from "./components/showHide/Show";
import { BtnProps } from "./components/buttonsProps/btnProps";
import axios from "axios";

export default function Home() {
  const onTestBtn = () => {
    alert('Hello, How are you?')
  }
  return (
    <main className={styles.main}>
      <Button />
      <Show />
      <BtnProps title="Test Button" onClick={onTestBtn} />
    </main>
  );
}