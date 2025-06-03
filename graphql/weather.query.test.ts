// __tests__/weather.query.test.ts
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import request from 'supertest';
import { resolvers } from './resolvers';
import { typeDefs } from './schema';

let server: ApolloServer;
let serverUrl: string;

beforeAll(async () => {
  server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 0 },
  });

  serverUrl = url;
});

afterAll(async () => {
  await server.stop();
});

describe('GraphQL Weather Query', () => {
  it('returns current and forecast weather data', async () => {
    const query = `
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

    const variables = {
      lat: 37.57,
      lon: 126.98,
      units: 'metric',
    };

    const response = await request(serverUrl)
      .post('/')
      .send({ query, variables });

    const data = response.body.data.weather;

    expect(data).toHaveProperty('current');
    expect(data.current).toHaveProperty('temp');
    expect(data.forecast.city).toHaveProperty('name');
    expect(Array.isArray(data.forecast.forecast)).toBe(true);
  });
});
