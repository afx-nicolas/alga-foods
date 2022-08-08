import { CircleNotch } from 'phosphor-react';
import styles from './Loading.module.sass';

export default function Loading() {
  return (
    <div className={styles.overlay}>
      <CircleNotch className={styles.icon} size={96} />
    </div>
  );
}
