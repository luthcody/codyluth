import Head from 'next/head'
import styles from './layout.module.scss'

export default function Layout({ children }) {
  return (
    <div className={styles.main}>
      <Head>
        <title>Cody Luth</title>
      </Head>
      <div className={'row ' + styles.menu}>
        <div className={'col-4 ' + styles.name}>{ '// Cody Luth' }</div>
        <div className="col-8 align-self-middle text-end">
          <a href="https://github.com/luthcody" target="_blank" className={styles.link}>{'{ GitHub }'}</a>
        </div>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}