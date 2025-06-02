import { gql } from '@apollo/client';

export const GET_WEATHER = gql`
  query GetWeather($lat: Float!, $lon: Float!, $units: String!) {
    weather(lat: $lat, lon: $lon, units: $units) {
      current {
        dt
        temp
        feels_like
        summary
        icon
        humidity
        wind_speed
      }
      forecast {
        city {
          name
          country
          population
        }
        forecast {
          dt
          temp_min
          temp_max
          summary
          icon
        }
      }
    }
  }
`;
