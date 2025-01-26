
import styles from "./nav_bar.module.css"
import Logo from "./logo"

export default function NavBar()
{
  return (
    <div className={styles.nav}>

      <div className={styles.logo}>
        <Logo size={3} background />
        <div className={styles.logo_title}>Hypochoco</div>
      </div>

      <div className={styles.link_container}>
        <a className={styles.link} href="#">Home</a>
        <a className={styles.link} href="#programming">Computer Science</a>
        <a className={styles.link} href="#architecture">Architecture</a>
        <a className={styles.link} href="#art">Art</a>
        <a className={styles.link} href="#contact">Contact</a>
        <a className={styles.link} href="about-me">About Me</a>
      </div>

    </div>
  )
}
