import styles from '../atoms/CurrentWeather.module.css';
import { TCurrentWeatherProps, type TCurrentLocationTimeProps } from '../types';

export default function CurrentWeather({
  temperature,
  feelsLike,
  weatherDescription,
  windSpeed,
  humidity,
}: TCurrentWeatherProps) {
  return (
    <div className={styles.currentWeatherContainer}>
      <big className={styles.bigText}>{temperature}℃</big>
      <small className={styles.smallText}>
        Feels like {feelsLike}℃ {weatherDescription} 풍속 {windSpeed}m/s 습도{' '}
        {humidity}%
      </small>
    </div>
  );
}
