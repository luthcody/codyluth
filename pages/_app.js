import Layout from '../components/layout'
import { SessionProvider } from "next-auth/react"
import { useState, useEffect } from 'react';
import { getCookie } from 'cookies-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/global.scss'

export default function MyApp({ Component, pageProps : { session, ...pageProps} }) {
  const [ lightMode, setLightMode ] = useState(false);

  useEffect(() => {
    const value = getCookie('lightMode');
    setLightMode(value);
  }, [])

  return (
    <SessionProvider session={session}>
      <Layout lightMode={lightMode} setLightMode={setLightMode}>
        <Component {...pageProps} lightMode={lightMode} />
      </Layout>
    </SessionProvider>
  );
}
