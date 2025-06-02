import { NextPage } from 'next';
import Introduction from '../components/atoms/Introduction';
import CurrentForecast from '../components/molecules/CurrentForecast';
import FiveDaysForecast from '../components/molecules/FiveDaysForecast';
import styles from '../styles/Seoul.module.css';

const Seoul: NextPage = () => {
  return (
    <main className={styles.SeoulContainer}>
      <Introduction text='Seoul' />
      <CurrentForecast city='Seoul' />
      <FiveDaysForecast city='Seoul' />
    </main>
  );
};
export default Seoul;
