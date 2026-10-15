import { profile } from '../../data/links';
import styles from './Profile.module.css';

export default function Profile() {
  return (
    <div className={styles.logo} data-name="Assinaturas-UFC-Inova-02">
      <img
        className={styles.wordmark}
        src={profile.logoWordmark}
        alt="UFC Inova"
        width={128}
        height={21}
      />
      <img
        className={styles.tagline}
        src={profile.logoTagline}
        alt=""
        aria-hidden="true"
        width={75}
        height={7}
      />
    </div>
  );
}
