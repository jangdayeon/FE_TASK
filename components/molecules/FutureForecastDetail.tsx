import Image from 'next/image';
import downArrow from '../../public/images/downArrow.svg';
import upArrow from '../../public/images/upArrow.svg';
import { dateFormatter } from '../../utils/dateFormatter';
import WeatherIcon from '../atoms/WeatherIcon';
import styles from '../molecules/FutureForecastDetail.module.css';
import { type TFutureForecastDetailProps } from '../types';

export default function FutureForecastDetail({
  date,
  items,
  isVisible,
  onToggle,
}: TFutureForecastDetailProps) {
  return (
    <section className={styles.container}>
      <div className={styles.summary} onClick={onToggle}>
        <big className={styles.bigText}>
          {dateFormatter(date).split('.')[0]}
        </big>
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
        {items.map((i, idx) => (
          <div key={idx} className={styles.detail}>
            <section className={styles.leftDetailSection}>
              <WeatherIcon
                height={'3.5rem'}
                width={'3.5rem'}
                iconURL={i.icon}
              />
              <big className={styles.detailTime}>
                {dateFormatter(i.dt).split('. ')[1]}
              </big>
            </section>
            <section className={styles.rightDetailSection}>
              <small className={styles.detailSummary}>{i.summary}</small>
              <big className={styles.detailTemp}>
                {i.temp_min}℃ / {i.temp_max}℃
              </big>
            </section>
          </div>
        ))}
      </div>
    </section>
  );
}
