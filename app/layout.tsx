import '@/app/ui/global.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { inter } from '@/app/ui/fonts';
import theme from '@/app/theme';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children} </ThemeProvider>{' '}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
