type ForecastDetail = {
  dt: string;
  icon: string;
  summary: string;
  temp_max: string;
  temp_min: string;
  [key: string]: any;
};

type ForecastMap = Record<string, ForecastDetail[]>;

export function groupForecastByDate(
  dt: string,
  list: ForecastDetail[]
): ForecastMap {
  const grouped: ForecastMap = {};

  list.forEach((item) => {
    const fullDate = item.dt; // e.g., "2025-06-08T03:00:00.000Z"
    const dateOnly = fullDate.split('T')[0]; // "2025-06-08"
    if (dt.split('T')[0] < dateOnly) {
      if (!grouped[dateOnly]) {
        grouped[dateOnly] = [];
      }

      grouped[dateOnly].push(item);
    }
  });

  return grouped;
}
