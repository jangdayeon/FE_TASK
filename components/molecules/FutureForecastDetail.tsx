import Image from 'next/image';
import downArrow from '../../public/images/downArrow.svg';
import upArrow from '../../public/images/upArrow.svg';
import WeatherIcon from '../atoms/WeatherIcon';
import styles from '../molecules/FutureForecastDetail.module.css';
import { type TFutureForecastDetailProps } from '../types';

export default function BeforeForecastDetail({
  day,
  isVisible,
  onToggle,
}: TFutureForecastDetailProps) {
  return (
    <section className={styles.container}>
      <div className={styles.summary} onClick={onToggle}>
        <big className={styles.bigText}>{day.date}</big>
        <div className={styles.imageWrapper}>
          {isVisible ? (
            <Image src={downArrow} alt='down' fill />
          ) : (
            <Image src={upArrow} alt='up' fill />
          )}
        </div>
      </div>

      <div
        className={`${styles.detailWrapper} ${
          isVisible ? styles.open : styles.closed
        }`}
      >
        {day.times.map((time, idx) => (
          <div key={idx} className={styles.detail}>
            <section className={styles.leftDetailSection}>
              <WeatherIcon height={'3.5rem'} width={'3.5rem'} />
              <big className={styles.detailTime}>{time.time}</big>
            </section>
            <section className={styles.rightDetailSection}>
              <small className={styles.detailSummary}>{time.summary}</small>
              <big className={styles.detailTemp}>
                {time.minTemp}℃ / {time.maxTemp}℃
              </big>
            </section>
          </div>
        ))}
      </div>
    </section>
  );
}
