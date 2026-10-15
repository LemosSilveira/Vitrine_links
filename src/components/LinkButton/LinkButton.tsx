import type { CSSProperties } from 'react';
import type { LinkItem } from '../../data/links';
import styles from './LinkButton.module.css';

type LinkButtonProps = {
  link: LinkItem;
};

export default function LinkButton({ link }: LinkButtonProps) {
  const imageStyle = {
    '--img-ratio': `${link.imageWidth} / ${link.imageHeight}`,
  } as CSSProperties;

  const content = (
    <>
      <picture>
        {link.imageDesktop && <source media="(min-width: 768px)" srcSet={link.imageDesktop} />}
        <img
          src={link.image}
          alt={link.label}
          width={link.imageWidth}
          height={link.imageHeight}
          className={styles.image}
          style={imageStyle}
          decoding="async"
        />
      </picture>
      {link.external && <span className="sr-only"> (abre em nova aba)</span>}
    </>
  );

  if (link.external) {
    return (
      <a className={styles.button} href={link.url} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <a className={styles.button} href={link.url}>
      {content}
    </a>
  );
}
