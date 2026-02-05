
import React from 'react';

interface AdsenseProps {
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle';
}

export const Adsense: React.FC<AdsenseProps> = ({ slot = 'XXXX', format = 'auto' }) => {
  // Retornamos null para ocultar os placeholders de anúncio durante o desenvolvimento/preview
  // Para reativar, basta retornar o JSX da div de anúncio.
  return null;
};
