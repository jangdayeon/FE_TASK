import { type TCurrentLocationTimeProps } from '../types';
import styles from './CurrentLocationTime.module.css';

export default function CurrentLocationTime({
  datetime,
  location,
  population,
}: TCurrentLocationTimeProps) {
  return (
    <div className={styles.currentLocationTimeContainer}>
      <section className={styles.ceilSection}>{datetime}</section>
      <section className={styles.bottomSection}>
        <big className={styles.bigText}>{location}</big>
        <small className={styles.smallText}>(인구수:{population})</small>
      </section>
    </div>
  );
}
