import Head from 'next/head'
import Link from 'next/link'
import { ToastContainer } from 'react-toastify';
import styles from './layout.module.scss'
import 'react-toastify/dist/ReactToastify.css';
import { Metadata } from 'next';


export default function Layout({ children }) {
  return (
    <div className={styles.main}>
      <div className={'row gx-0 ' + styles.menu}>
        <div className={'col-12 col-md-4 text-center text-md-start ' + styles.name}>
          <Link href="/">{ '// Cody Luth' }</Link>
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