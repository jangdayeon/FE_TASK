import { gql, useQuery } from '@apollo/client';
import { NextPage } from 'next';
import Introduction from '../components/atoms/Introduction';
import CurrentForecast from '../components/molecules/CurrentForecast';
import FiveDaysForecast from '../components/molecules/FiveDaysForecast';
import { GET_WEATHER } from '../graphql/queries';
import client from '../lib/apollo-client';
import styles from '../styles/London.module.css';
import { groupForecastByDate } from '../utils/convertToFiveForecast';
import { getCoordinatesByName } from '../utils/getCoordinatesByName';

const London: NextPage = () => {
  const { lat, lon }: { lat: number; lon: number } =
    getCoordinatesByName('London')!;
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
    <main className={styles.LondonContainer}>
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
export default London;
