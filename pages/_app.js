import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from '../components/ThemeRegistry/EmotionChache';
import theme from '../components/ThemeRegistry/theme';

export default function MyApp({ Component, pageProps }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}