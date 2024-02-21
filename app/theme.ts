'use client';

import { Inter, Lusitana } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const theme = createTheme({
  typography: {
    fontFamily: lusitana.style.fontFamily,
    h1: {
      fontSize: '1.75rem',
      lineHeight: '2.5rem',
      fontWeight: 600,
      '@media (min-width:900px)': {
        fontSize: '3.125rem',
        lineHeight: '3rem',
      },
    },
  },
});

export default theme;
