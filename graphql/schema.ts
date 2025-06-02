export const typeDefs = `
  type WeatherData {
    dt: String
    temp: Float
    feels_like: Float
    summary: String
    icon: String
    wind_speed: Float
    humidity: Int
  }

  type ForecastItem {
    dt: String
    temp_min: Float
    temp_max: Float
    summary: String
    icon: String
  }

  type City {
    name: String
    country: String
    population: Int
  }

  type ForecastData {
    city: City
    forecast: [ForecastItem]
  }

  type CombinedWeather {
    current: WeatherData
    forecast: ForecastData
  }

  type Query {
    weather(lat: Float, lon: Float, units: String): CombinedWeather
  }
`;
