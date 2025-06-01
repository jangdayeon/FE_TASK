import { NextPage } from 'next';
import Introduction from '../components/atoms/Introducion';
import styles from '../styles/Seoul.module.css';

const Seoul: NextPage = () => {
  return (
    <main className={styles.SeoulContainer}>
      <Introduction text='Seoul' />
    </main>
  );
};
export default Seoul;
