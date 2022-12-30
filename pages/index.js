import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import {
  Hero,
  LetsWorkTogether,
  OurBackground,
  OurExcellencePeople,
  OurService,
  OurValues,
} from "../views";
export default function Home() {
  return (
    <>
      <Head>
        <title>SWIFTax Consulting</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-col">
          <Hero />
          <OurBackground />
          <OurService />
          <OurExcellencePeople />
          <OurValues />
          <LetsWorkTogether />
        </div>
      </main>
    </>
  );
}
