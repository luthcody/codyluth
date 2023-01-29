import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import { ToastContainer } from 'react-toastify';
import { BsLightbulb, BsLightbulbFill } from 'react-icons/Bs';
import { setCookie, getCookie } from 'cookies-next';
import styles from './layout.module.scss'
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children, lightMode, setLightMode }) {
  const lightModeStyle = lightMode ? (
    <style jsx global>{`
      body {
        background-color: #d1d1d1;
        color: #212121;
      }

      a {
        color: #212121
      }
    `}</style>
  ) : '';

  const lightModeIcon = lightMode ? (<BsLightbulb />) : (<BsLightbulbFill />);

  return (
    <div className={styles.main}>
      {lightModeStyle}
      <Head>
        <title>Cody Luth</title>
        <meta name="description" content="I'm a web developer who specializes in React-Based applications (like NextJS). I also develop all-in-one solutions like Wix." />
        <meta name="keywords" content="Web Developer, Cody, Luth, React, NextJS, Javascript, Freelance" />
      </Head>
            
      <div className={`row gx-0 ${styles.menu} ${lightMode ? styles.menuLight : ''}`}>
        <div className={`col-12 col-md-4 text-center text-md-start ${styles.name}`}>
          <Link href="/"><a>{ '// Cody Luth' }</a></Link>
        </div>
        <div className="col-12 col-md-8 align-self-middle text-center text-md-end mt-1">
          <a href="https://github.com/luthcody" target="_blank" className={`${styles.link} ${lightMode ? styles.linkLight : ''}`}>{'{ GitHub }'}</a>
          <span className="ms-2" onClick={() => { setCookie('lightMode', !lightMode ? 'true' : 'false'); setLightMode(!lightMode); }}>{lightModeIcon}</span>
        </div>
      </div>

      <div>
        {children}
      </div>

      <div className={`text-end ${styles.privacyPolicy} ${lightMode ? styles.privacyPolicyLight : ''}`}>
        <Link href="/privacyPolicy"><a>Privacy Policy</a></Link>
      </div>
      <ToastContainer />
    </div>
  )
}