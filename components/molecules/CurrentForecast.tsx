import CurrentLocationTime from '../atoms/CurrentLocationTime';
import CurrentWeather from '../atoms/CurrentWeather';
import WeatherIcon from '../atoms/WeatherIcon';
import styles from '../molecules/CurrentForecast.module.css';
import { type TCurrentForecastProps } from '../types';

export default function CurrentForecast({ city }: TCurrentForecastProps) {
  city = 'Seoul';
  return (
    <div className={styles.currentForecastContainer}>
      <div className={styles.sectionLayout}>
        <section className={styles.leftSection}>
          <WeatherIcon iconURL={''} />
          <CurrentLocationTime
            date={'May 23'}
            time={'03:00am'}
            location={'Seoul, KR'}
            population={'10349312'}
          />
        </section>
        <CurrentWeather
          temperature={'292.98'}
          feelsLike={'291.91'}
          weatherDescription={'clear sky'}
          windSpeed={'3.33'}
          humidity={'34'}
        />
      </div>
    </div>
  );
}
