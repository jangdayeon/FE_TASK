import Btn from '../atoms/Btn';
import styles from '../molecules/BtnBundle.module.css';

export default function BtnBundle() {
  return (
    <div className={styles.btnBundleLayout}>
      <Btn text={'Seoul'} />
      <Btn text={'Tokyo'} />
      <Btn text={'Paris'} />
      <Btn text={'London'} />
    </div>
  );
}
