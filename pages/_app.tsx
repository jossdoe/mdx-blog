import type { AppProps } from 'next/app'
import codeine from '@jossdoe/codeine';

const { GlobalStyles } = codeine.global;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
