import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Code } from "@repo/ui/code";


const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <>
      <Code className={styles.code}>Web</Code>
    </>
  );
}
