import { formatDateTimeToCustom } from '../../utils/dateFormatter';
import CurrentLocationTime from '../atoms/CurrentLocationTime';
import CurrentWeather from '../atoms/CurrentWeather';
import WeatherIcon from '../atoms/WeatherIcon';
import styles from '../molecules/CurrentForecast.module.css';
import { type TCurrentForecastProps } from '../types';

export default function CurrentForecast({
  dt,
  feels_like,
  humidity,
  summary,
  icon,
  temp,
  wind_speed,
  city_name,
  city_country,
  city_population,
}: TCurrentForecastProps) {
  return (
    <div className={styles.currentForecastContainer}>
      <div className={styles.sectionLayout}>
        <section className={styles.leftSection}>
          <WeatherIcon iconURL={icon} />
          <CurrentLocationTime
            datetime={formatDateTimeToCustom(dt)}
            location={city_name + ', ' + city_country}
            population={city_population}
          />
        </section>
        <CurrentWeather
          temperature={temp}
          feelsLike={feels_like}
          weatherDescription={summary}
          windSpeed={wind_speed}
          humidity={humidity}
        />
      </div>
    </div>
  );
}
