import type { CSSProperties } from 'react';
import { links } from '../../data/links';
import LinkButton from '../LinkButton/LinkButton';
import styles from './LinkList.module.css';

export default function LinkList() {
  return (
    <ul className={styles.list}>
      {links.map((link, index) => (
        <li key={link.id} className={styles.item} style={{ '--i': index } as CSSProperties}>
          <LinkButton link={link} />
        </li>
      ))}
    </ul>
  );
}
