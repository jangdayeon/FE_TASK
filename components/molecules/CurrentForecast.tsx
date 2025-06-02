'use server';

import { gql, useQuery } from '@apollo/client';
import client from '../../lib/apollo-client';
import { formatDateTimeToCustom } from '../../utils/dateFormatter';
import CurrentLocationTime from '../atoms/CurrentLocationTime';
import CurrentWeather from '../atoms/CurrentWeather';
import WeatherIcon from '../atoms/WeatherIcon';
import styles from '../molecules/CurrentForecast.module.css';
import { type TCurrentForecastProps } from '../types';

const GET_WEATHER = gql`
  query GetCurrentWeather($lat: Float!, $lon: Float!) {
    getCurrentWeather(lat: $lat, lon: $lon) {
      dt
      temp
      feels_like
      summary
      wind_speed
      humidity
    }
  }
`;

export default function CurrentForecast({ city }: TCurrentForecastProps) {
  const { data, loading, error } = useQuery(GET_WEATHER, {
    variables: { lat: 37.5665, lon: 126.978 }, // Seoul
    client,
  });
  console.log('🚀 ~ CurrentForecast ~ data:', data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { dt, feels_like, humidity, summary, temp, wind_speed } =
    data.getCurrentWeather;

  return (
    <div className={styles.currentForecastContainer}>
      <div className={styles.sectionLayout}>
        <section className={styles.leftSection}>
          <WeatherIcon iconURL={''} />
          <CurrentLocationTime
            datetime={formatDateTimeToCustom(dt)}
            location={'Seoul'}
            population={'10349312'} // 인구수는 별도 API 필요
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
