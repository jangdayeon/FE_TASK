import Image from 'next/image';
import earth from '../../public/images/earth.png';
import styles from '../atoms/Introduction.module.css';
import { type TIntroductionProps } from '../types';

export default function Introduction({ text }: TIntroductionProps) {
  return (
    <section className={styles.introducionSection}>
      <div className={styles.imageWrapper}>
        <Image src={earth} alt='earth' fill />
      </div>
      <h1 className={styles.headText}>Weather Information for {text}</h1>
    </section>
  );
}
