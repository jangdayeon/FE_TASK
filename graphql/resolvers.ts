import fetch from 'cross-fetch';

export const resolvers = {
  Query: {
    weather: async (
      _: any,
      { lat, lon, units }: { lat: number; lon: number; units: string }
    ) => {
      const [currentRes, forecastRes] = await Promise.all([
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=61113fd7dcbf219de0de9f7af6beddec`
        ),
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=61113fd7dcbf219de0de9f7af6beddec`
        ),
      ]);

      const currentData = await currentRes.json();
      const forecastData = await forecastRes.json();

      return {
        current: {
          dt: new Date(currentData.dt * 1000).toISOString(),
          temp: currentData.main.temp,
          feels_like: currentData.main.feels_like,
          summary: currentData.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png`,
          wind_speed: currentData.wind.speed,
          humidity: currentData.main.humidity,
        },
        forecast: {
          city: {
            name: forecastData.city.name,
            country: forecastData.city.country,
            population: forecastData.city.population,
          },
          forecast: forecastData.list.map((data: any) => ({
            dt: new Date(data.dt * 1000).toISOString(),
            temp_min: data.main.temp_min,
            temp_max: data.main.temp_max,
            summary: data.weather[0].description,
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          })),
        },
      };
    },
  },
};
