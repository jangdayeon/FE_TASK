import { type NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import BtnBundle from '../components/molecules/BtnBundle';
import earth from '../public/images/earth.png';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <main className={styles.homeContainer}>
      <header>
        <h1 className={styles.heroTitle}>
          Welcome to <span className={styles.highLight}>Weather App!</span>
        </h1>
        <p className={styles.explain}>
          <small>Choose a city from the list below to check the weather.</small>
        </p>
      </header>

      <section>
        <BtnBundle />
      </section>

      <div className={styles.imageWrapper}>
        <Image src={earth} alt='earth' fill />
      </div>
    </main>
  );
};

export default Home;
