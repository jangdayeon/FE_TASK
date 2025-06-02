import fetch from 'cross-fetch';

export const resolvers = {
  Query: {
    getCurrentWeather: async (
      _: any,
      { lat, lon, units }: { lat: number; lon: number; units: string }
    ) => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=61113fd7dcbf219de0de9f7af6beddec`
      );
      const data = await res.json();

      return {
        dt: new Date(data.dt * 1000).toISOString(),
        lat: data.coord.lat,
        lon: data.coord.lon,
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        summary: data.weather[0].description,
        wind_speed: data.wind.speed,
        humidity: data.main.humidity,
        timezone: data.timezone.toString(),
      };
    },
  },
};
