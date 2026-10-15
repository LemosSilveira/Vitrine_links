import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import LinksPage from './pages/LinksPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LinksPage />
  </StrictMode>,
);
