import Layout from '../components/layout'
import { SessionProvider } from "next-auth/react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/global.scss'

export default function MyApp({ Component, pageProps : { session, ...pageProps} }) {
  return (
    <SessionProvider session={session}>
      <Layout lightMode={Component.lightMode}>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
