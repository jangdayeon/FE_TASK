import Spinner from '../../public/images/spinner-loading.svg';
import styles from '../atoms/Loading.module.css';

export default function Loading({ size = 64 }: { size?: number }) {
  return (
    <div className={styles.loading_wrapper}>
      <Spinner width={size} height={size} className={styles.loading_circle} />
    </div>
  );
}
