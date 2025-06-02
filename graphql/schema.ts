import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type CurrentWeather {
    dt: String!
    lat: Float!
    lon: Float!
    temp: Float!
    feels_like: Float!
    summary: String!
    wind_speed: Float!
    humidity: Int!
    timezone: String!
  }

  type Query {
    getCurrentWeather(
      lat: Float!
      lon: Float!
      units: String = "metric"
    ): CurrentWeather!
  }
`;
