import { AppProps } from 'next/app';
import '../styles/tailwind.css';
import '../styles/main.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
