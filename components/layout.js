import Head from 'next/head'
import styles from './layout.module.scss'

export default function Layout({ children }) {
  return (
    <div className={styles.main}>
      <Head>
        <title>Cody Luth</title>
      </Head>
      <div className={'row ' + styles.menu}>
        <div className={'col-12 col-md-4 text-center text-md-start ' + styles.name}>{ '// Cody Luth' }</div>
        <div className="col-12 col-md-8 align-self-middle text-center text-md-end">
          <a href="https://github.com/luthcody" target="_blank" className={styles.link}>{'{ GitHub }'}</a>
        </div>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}