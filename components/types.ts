export type TBtnProps = {
  text: string;
};
export type TIntroductionProps = {
  text: string;
};
export type TWeatherIconProps = {
  iconURL?: string;
  width?: string | number;
  height?: string | number;
};
export type TCurrentLocationTimeProps = {
  datetime: string;
  location: string;
  population: string;
};
export type TCurrentWeatherProps = {
  temperature: string;
  feelsLike: string;
  weatherDescription: string;
  windSpeed: string;
  humidity: string;
};
export type TCurrentForecastProps = {
  dt: string;
  feels_like: string;
  humidity: string;
  summary: string;
  icon: string;
  temp: string;
  wind_speed: string;
  city_name: string;
  city_country: string;
  city_population: string;
};
type ForecastDetail = {
  dt: string;
  icon: string;
  summary: string;
  temp_max: string;
  temp_min: string;
};

type ForecastMap = Record<string, ForecastDetail[]>;
export type TFiveDaysForecastProps = {
  forecast: ForecastMap;
};

export type TFutureForecastDetailProps = {
  date: string;
  items: ForecastDetail[];
  isVisible: boolean;
  onToggle: () => void;
};
