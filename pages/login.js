import Head from 'next/head'
import styles from '../styles/Login.module.css'

function Login() {
  return <div className={styles.container}>
  <Head>
    <title>Create Next App</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/favicon.ico" />
  </Head>

  <main className={styles.main}>
      <h1 id="login" className={styles.title}>
        Iniciar sesión
      </h1>
  </main>

  <footer className={styles.footer}>
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
    >
      Coded by Francisco Chardin
    </a>
  </footer>
</div>

}
export default Login