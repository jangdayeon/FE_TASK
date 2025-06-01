import { useRouter } from 'next/router';
import styles from '../atoms/Btn.module.css';
import { type TBtnProps } from '../types';

export default function Btn({ text }: TBtnProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/${text}`);
  };

  return (
    <button
      className={`${styles.btnLayout} ${styles.btnStyle}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
