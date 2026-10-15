import type { ReactNode } from 'react';
import bgDecoration from '../../assets/bg-decoration.svg';
import Profile from '../Profile/Profile';
import styles from './PageShell.module.css';

interface PageShellProps {
  children: ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className={styles.shell}>
      <img className={styles.decoration} src={bgDecoration} alt="" aria-hidden="true" />
      <header className={styles.navBar}>
        <Profile />
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
