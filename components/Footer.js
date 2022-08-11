import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> for you
      </footer>

      <h3>Hello world! DMG is demoing a change to the deployment!</h3>
    </>
  )
}
