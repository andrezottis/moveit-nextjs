import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExpirienceBar } from "../components/ExpirienceBar";
import { Profile } from "../components/Profile";

import styles from "../styles/pages/Home.module.css";
import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <ExpirienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown/>
        </div>
        <div>

        </div>
      </section>
    </div>
  );
}
