import { useState } from 'react';
import { TFiveDaysForecastProps } from '../types';
import styles from './FiveDaysForecast.module.css';
import FutureForecastDetail from './FutureForecastDetail';

export default function FiveDaysForecast({ city }: TFiveDaysForecastProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const sampleData = [
    {
      date: 'May 23',
      weather: '맑음',
      temperature: 22,
      detail: '햇빛이 강하니 자외선 차단제를 바르세요.',
      times: [
        {
          imgUrl: '/images/sun.svg',
          time: '오전 9시',
          summary: '맑음',
          minTemp: '18',
          maxTemp: '22',
        },
        {
          imgUrl: '/images/sun.svg',
          time: '오후 3시',
          summary: '약간 더움',
          minTemp: '22',
          maxTemp: '25',
        },
      ],
    },
    {
      date: 'May 24',
      weather: '흐림',
      temperature: 24,
      detail: '종일 흐리지만 비는 오지 않습니다.',
      times: [
        {
          imgUrl: '/images/cloud.svg',
          time: '오전 9시',
          summary: '흐림',
          minTemp: '20',
          maxTemp: '23',
        },
        {
          imgUrl: '/images/cloud.svg',
          time: '오후 3시',
          summary: '흐림',
          minTemp: '22',
          maxTemp: '24',
        },
      ],
    },
    {
      date: 'May 25',
      weather: '비',
      temperature: 21,
      detail: '우산을 꼭 챙기세요. 오후에 강한 비가 내립니다.',
      times: [
        {
          imgUrl: '/images/rain.svg',
          time: '오전 9시',
          summary: '약한 비',
          minTemp: '18',
          maxTemp: '20',
        },
        {
          imgUrl: '/images/rain.svg',
          time: '오후 3시',
          summary: '강한 비',
          minTemp: '20',
          maxTemp: '21',
        },
      ],
    },
    {
      date: 'May 26',
      weather: '천둥',
      temperature: 23,
      detail: '낮 동안 천둥과 번개가 동반될 수 있습니다.',
      times: [
        {
          imgUrl: '/images/thunder.svg',
          time: '오전 9시',
          summary: '천둥 주의',
          minTemp: '19',
          maxTemp: '21',
        },
        {
          imgUrl: '/images/thunder.svg',
          time: '오후 3시',
          summary: '번개 주의',
          minTemp: '21',
          maxTemp: '23',
        },
      ],
    },
    {
      date: 'May 27',
      weather: '맑음',
      temperature: 26,
      detail: '쾌청한 하루입니다. 나들이에 좋아요!',
      times: [
        {
          imgUrl: '/images/sun.svg',
          time: '오전 9시',
          summary: '맑음',
          minTemp: '22',
          maxTemp: '25',
        },
        {
          imgUrl: '/images/sun.svg',
          time: '오후 3시',
          summary: '쾌청',
          minTemp: '25',
          maxTemp: '26',
        },
      ],
    },
  ];

  return (
    <section className={styles.fiveDaysForecastContainer}>
      <h2 className={styles.head}>5-day Forecast</h2>
      {sampleData.map((day, idx) => (
        <FutureForecastDetail
          key={idx}
          day={day}
          isVisible={expandedIndex === idx}
          onToggle={() =>
            setExpandedIndex((prev) => (prev === idx ? null : idx))
          }
        />
      ))}
    </section>
  );
}
