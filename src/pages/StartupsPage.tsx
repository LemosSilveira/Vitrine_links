import type { CSSProperties } from 'react';
import PageShell from '../components/PageShell/PageShell';
import LinkButton from '../components/LinkButton/LinkButton';
import { startupsPage } from '../data/links';
import styles from './StartupsPage.module.css';

export default function StartupsPage() {
  return (
    <PageShell>
      <div className={styles.content}>
        <span className={styles.badge} style={{ '--i': 0 } as CSSProperties}>
          {startupsPage.badge}
        </span>
        <h1 className={styles.title} style={{ '--i': 1 } as CSSProperties}>
          {startupsPage.title}
        </h1>
        <p className={styles.message} style={{ '--i': 2 } as CSSProperties}>
          {startupsPage.message}
        </p>
        <p className={styles.detail} style={{ '--i': 3 } as CSSProperties}>
          {startupsPage.detail}
        </p>
        <div className={styles.backWrap} style={{ '--i': 4 } as CSSProperties}>
          <LinkButton
            link={{
              id: 'back-to-links',
              label: startupsPage.backLabel,
              url: startupsPage.backUrl,
              external: false,
            }}
          />
        </div>
      </div>
    </PageShell>
  );
}
