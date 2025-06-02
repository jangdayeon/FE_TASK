import Image from 'next/image';
import defaultWeatherIcon from '../../public/images/defaultWeatherIcon.png';
import styles from '../atoms/WeatherIcon.module.css';
import { TWeatherIconProps } from '../types';

export default function WeatherIcon({ iconURL }: TWeatherIconProps) {
  iconURL = 'https://openweathermap.org/img/wn/10d@2x.png';
  return (
    <div className={styles.imageWrapper}>
      <Image src={iconURL || defaultWeatherIcon} alt='weather icon' fill />
    </div>
  );
}
