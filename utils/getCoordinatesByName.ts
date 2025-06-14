type City = {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: {
    lon: number;
    lat: number;
  };
};

const cities: City[] = [
  {
    id: 1835848,
    name: 'Seoul',
    state: '',
    country: 'KR',
    coord: { lon: 126.977829, lat: 37.56826 },
  },
  {
    id: 1850147,
    name: 'Tokyo',
    state: '',
    country: 'JP',
    coord: { lon: 139.691711, lat: 35.689499 },
  },
  {
    id: 2968815,
    name: 'Paris',
    state: '',
    country: 'FR',
    coord: { lon: 2.3486, lat: 48.853401 },
  },
  {
    id: 2643743,
    name: 'London',
    state: '',
    country: 'GB',
    coord: { lon: -0.12574, lat: 51.50853 },
  },
];

export function getCoordinatesByName(
  cityName: string
): { lon: number; lat: number } | null {
  const city = cities.find(
    (c) => c.name.toLowerCase() === cityName.toLowerCase()
  );
  return city ? city.coord : null;
}
