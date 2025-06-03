import { useState } from 'react';
import { TFiveDaysForecastProps } from '../types';
import styles from './FiveDaysForecast.module.css';
import FutureForecastDetail from './FutureForecastDetail';

export default function FiveDaysForecast({ forecast }: TFiveDaysForecastProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  return (
    <section className={styles.fiveDaysForecastContainer}>
      <h2 className={styles.head}>5-day Forecast</h2>
      {Object.entries(forecast).map(([date, items], idx) => (
        <FutureForecastDetail
          key={idx}
          date={date}
          items={items}
          isVisible={expandedIndex === idx}
          onToggle={() =>
            setExpandedIndex((prev) => (prev === idx ? null : idx))
          }
        />
      ))}
    </section>
  );
}
