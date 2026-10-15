import iconTecnologica from '../assets/icon-tecnologica.svg';
import iconStartups from '../assets/icon-startups.svg';
import iconLaboratorios from '../assets/icon-laboratorios.svg';
import logoWordmark from '../assets/logo-wordmark.svg';
import logoTagline from '../assets/logo-tagline.svg';

const base = import.meta.env.BASE_URL;

export interface LinkItem {
  id: string;
  label: string;
  url: string;
  external: boolean;
  icon: string;
}

export const profile = {
  logoWordmark,
  logoTagline,
};

// Ordem e textos conforme o frame mobile (246:61) — ver docs/figma/design-context-desktop.md
// para a divergência de ordem/texto encontrada no frame desktop (246:221).
export const links: LinkItem[] = [
  {
    id: 'vitrine-tecnologica',
    label: 'Vitrine Tecnológica',
    url: 'https://vitrinetecnologicaufc.vercel.app/',
    external: true,
    icon: iconTecnologica,
  },
  {
    id: 'vitrine-startups',
    label: 'Vitrine de Startups',
    // Página interna em construção. Quando a vitrine real existir,
    // troque só esta URL pela externa e mude external para true.
    url: `${base}startups/`,
    external: false,
    icon: iconStartups,
  },
  {
    id: 'vitrine-laboratorios',
    label: 'Vitrine de Laboratórios',
    url: 'http://selinka.ufc.br/vitrines/laboratorios',
    external: true,
    icon: iconLaboratorios,
  },
];

export const startupsPage = {
  title: 'Vitrine de Startups',
  badge: 'Em construção',
  message: 'Esta página ainda está em construção.',
  detail: 'Estamos preparando a Vitrine de Startups. Volte em breve!',
  backLabel: 'Voltar para as vitrines',
  backUrl: base,
};
