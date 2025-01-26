
import styles from "./nav_bar.module.css"
import Logo from "../(landing)/(components)/logo"
import Link from "next/link"

export default function NavBar()
{
  return (
    <div className={styles.nav}>

      <div className={styles.logo}>
        <Logo size={3} background />
        <div className={styles.logo_title}>Hypochoco</div>
      </div>

      <div className={styles.link_container}>
        <a className={styles.link} href="/">Home</a>
        <Link className={styles.link} href="../#programming">Computer Science</Link>
        <Link className={styles.link} href="../#architecture">Architecture</Link>
        <Link className={styles.link} href="../#art">Art</Link>
        <Link className={styles.link} href="../#contact">Contact</Link>
        <Link className={styles.link} href="../about-me">About Me</Link>
      </div>

    </div>
  )
}
