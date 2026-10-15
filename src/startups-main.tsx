import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import StartupsPage from './pages/StartupsPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StartupsPage />
  </StrictMode>,
);
