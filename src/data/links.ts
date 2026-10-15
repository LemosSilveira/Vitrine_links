import vitrineTecnologica from '../assets/vitrines/vitrine-tecnologica.svg';
import vitrineStartups from '../assets/vitrines/vitrine-startups.svg';
import vitrineLaboratorios from '../assets/vitrines/vitrine-laboratorios.svg';
import vitrineTecnologicaDesktop from '../assets/vitrines/vitrine-tecnologica-desktop.svg';
import vitrineStartupsDesktop from '../assets/vitrines/vitrine-startups-desktop.svg';
import vitrineLaboratoriosDesktop from '../assets/vitrines/vitrine-laboratorios-desktop.svg';
import logoWordmark from '../assets/logo-wordmark.svg';
import logoTagline from '../assets/logo-tagline.svg';

const base = import.meta.env.BASE_URL;

export interface LinkItem {
  id: string;
  label: string;
  url: string;
  external: boolean;
  image: string;
  imageDesktop: string | null;
  imageWidth: number;
  imageHeight: number;
}

export const profile = {
  logoWordmark,
  logoTagline,
};

// Ordem e textos conforme o Figma v2 (mobile 246:61 e desktop 246:221 concordam agora).
// Ver docs/figma/design-context-{mobile,desktop}-v2.md.
export const links: LinkItem[] = [
  {
    id: 'vitrine-tecnologica',
    label: 'Vitrine Tecnológica',
    url: 'https://vitrinetecnologicaufc.vercel.app/',
    external: true,
    image: vitrineTecnologica,
    imageDesktop: vitrineTecnologicaDesktop,
    imageWidth: 207,
    imageHeight: 205,
  },
  {
    id: 'vitrine-startups',
    label: 'Vitrine de Startups',
    // Página interna em construção. Quando a vitrine real existir,
    // troque só esta URL pela externa e mude external para true.
    url: `${base}startups/`,
    external: false,
    image: vitrineStartups,
    imageDesktop: vitrineStartupsDesktop,
    imageWidth: 207,
    imageHeight: 216,
  },
  {
    id: 'vitrine-laboratorios',
    label: 'Vitrine de Laboratórios',
    url: 'http://selinka.ufc.br/vitrines/laboratorios',
    external: true,
    image: vitrineLaboratorios,
    imageDesktop: vitrineLaboratoriosDesktop,
    imageWidth: 207,
    imageHeight: 205,
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
