import '@styles/globals.scss';
import '@styles/nprogress.scss';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import Router from 'next/router';
import nProgress from 'nprogress';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ThemeProvider>
  );
}
export default MyApp;
