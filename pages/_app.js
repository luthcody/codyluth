import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../global.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
