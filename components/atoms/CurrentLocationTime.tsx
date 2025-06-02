import styles from '../atoms/CurrentLocationTime.module.css';
import { type TCurrentLocationTimeProps } from '../types';

export default function CurrentLocationTime({
  date,
  time,
  location,
  population,
}: TCurrentLocationTimeProps) {
  return (
    <div className={styles.currentLocationTimeContainer}>
      <section className={styles.ceilSection}>
        {date}. {time}
      </section>
      <section className={styles.bottomSection}>
        <big className={styles.bigText}>{location}</big>
        <small className={styles.smallText}>(인구수:{population})</small>
      </section>
    </div>
  );
}
