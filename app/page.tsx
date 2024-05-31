'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Button from "./components/button/Button";
import Show from "./components/showHide/Show";
import { BtnProps } from "./components/buttonsProps/btnProps";
import axios from "axios";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { sortState } from "./state";

export default function Home() {


  const [ads, setAds] = useState(1)

  const onTestBtn = () => {
    alert('Hello, How are you?')
  }
  return (
    <main className={styles.main}>
      <Button />
      <Show />
      <BtnProps title="Test Button" onClick={onTestBtn} />



      <span onClick={() => setAds(1)}>Who are you?1</span>
      {
        ads === 1 ? <sub>11111111</sub> : ''
      }

      <span onClick={() => setAds(2)}>Who are you?2</span>
      {
         ads === 2 ? <sub>22222222</sub> : ''
      }

      <span onClick={() => setAds(3)}>Who are you?3</span>
      {
         ads === 3 ? <sub>333333333</sub> : ''
      }


    </main>
  );
}