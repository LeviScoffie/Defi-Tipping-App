import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { ConnectKitButton } from "connectkit";

function MainBlock() {
  return (
    <main className={styles.main}>
      <ConnectBlock />
      <TitleBlock />
    </main>
  );
}

function ConnectBlock() {
  return (
    <div className={styles.connectDiv}>
      <ConnectKitButton />
    </div>
  );
}

function TitleBlock() {
  return (
    <div className={styles.titleDiv}>
      <h1 className={styles.title}>TipJar</h1>
      <p className={styles.description}>Toss a coin to the witcher ✨</p>
    </div>
  );
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>TipJar</title>
        <meta name="description" content="Tipping app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainBlock />
    </div>
  );
};

export default Home;
