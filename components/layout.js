import Head from 'next/head'
import Link from 'next/link'
import { ToastContainer } from 'react-toastify';
import styles from './layout.module.scss'
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }) {
  return (
    <div className={styles.main}>
      <Head>
        <title>Cody Luth</title>
        <meta name="description" content="I'm a web developer who specializes in React-Based applications (like NextJS). I also develop all-in-one solutions like Wix." />
        <meta name="keywords" content="Web Developer, Cody, Luth, React, NextJS, Javascript, Freelance" />

        // Google Tag Manager
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WKWRS5K');` }}></script>
      </Head>
      <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WKWRS5K"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
      <div className={'row gx-0 ' + styles.menu}>
        <div className={'col-12 col-md-4 text-center text-md-start ' + styles.name}>
          <Link href="/"><a>{ '// Cody Luth' }</a></Link>
        </div>
        <div className="col-12 col-md-8 align-self-middle text-center text-md-end">
          <a href="https://github.com/luthcody" target="_blank" className={styles.link}>{'{ GitHub }'}</a>
        </div>
      </div>
      <div>
        {children}
      </div>
      <ToastContainer />
    </div>
  )
}