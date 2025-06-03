import { gql, useQuery } from '@apollo/client';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Introduction from '../components/atoms/Introduction';
import { GET_WEATHER } from '../graphql/queries';
import client from '../lib/apollo-client';
import styles from '../styles/Tokyo.module.css';
import { groupForecastByDate } from '../utils/convertToFiveForecast';
import { getCoordinatesByName } from '../utils/getCoordinatesByName';

const CurrentForecast = dynamic(
  () => import('../components/molecules/CurrentForecast'),
  {
    loading: () => <p>Loading Current forecast...</p>, // 사용자 경험 향상
    ssr: false,
  }
);

const FiveDaysForecast = dynamic(
  () => import('../components/molecules/FiveDaysForecast'),
  {
    loading: () => <p>Loading 5-day forecast...</p>, // 사용자 경험 향상
    ssr: false,
  }
);

const Tokyo: NextPage = () => {
  const { lat, lon }: { lat: number; lon: number } =
    getCoordinatesByName('Tokyo')!;
  const { data, loading, error } = useQuery(GET_WEATHER, {
    variables: { lat: lat, lon: lon, units: 'metric' },
    client,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const {
    weather: {
      current: { dt, temp, feels_like, summary, icon, humidity, wind_speed },
      forecast: {
        city: { name, country, population },
        forecast: forecastList,
      },
    },
  } = data;

  const grouped = groupForecastByDate(dt, forecastList);

  return (
    <main className={styles.TokyoContainer}>
      <Introduction text={name} />
      <CurrentForecast
        dt={dt}
        feels_like={feels_like}
        humidity={humidity}
        summary={summary}
        icon={icon}
        temp={temp}
        wind_speed={wind_speed}
        city_name={name}
        city_country={country}
        city_population={population}
      />
      <FiveDaysForecast forecast={grouped} />
    </main>
  );
};
export default Tokyo;
