import textureTopo from '../../assets/texture-topo.png';
import type { LinkItem } from '../../data/links';
import styles from './LinkButton.module.css';

type LinkButtonProps = {
  link: Omit<LinkItem, 'icon'> & { icon?: string };
};

export default function LinkButton({ link }: LinkButtonProps) {
  const content = (
    <>
      <span
        className={styles.texture}
        style={{ backgroundImage: `url(${textureTopo})` }}
        aria-hidden="true"
      />
      {link.icon && (
        <span className={styles.iconWrap}>
          <img className={styles.icon} src={link.icon} alt="" aria-hidden="true" />
        </span>
      )}
      <span className={styles.label}>
        {link.label}
        {link.external && <span className="visually-hidden"> (abre em nova aba)</span>}
      </span>
    </>
  );

  const className = link.icon ? styles.button : `${styles.button} ${styles.compact}`;

  if (link.external) {
    return (
      <a className={className} href={link.url} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <a className={className} href={link.url}>
      {content}
    </a>
  );
}
