import Image from 'next/image';
import defaultWeatherIcon from '../../public/images/defaultWeatherIcon.png';
import styles from '../atoms/WeatherIcon.module.css';
import { TWeatherIconProps } from '../types';

export default function WeatherIcon({
  iconURL,
  width = 80,
  height = 80,
}: TWeatherIconProps) {
  return (
    <div className={styles.imageWrapper} style={{ width, height }}>
      <Image
        src={iconURL || defaultWeatherIcon}
        alt='weather icon'
        layout='fill'
      />
    </div>
  );
}
