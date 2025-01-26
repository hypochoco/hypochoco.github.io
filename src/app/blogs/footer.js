
import styles from "./footer.module.css"
import Logo from "../(landing)/(components)/logo"
import Link from "next/link"

export default function Footer()
{
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <Logo size={3} background />
        <div className={styles.logo_title}>Hypochoco</div>
      </div>
      <div className={styles.link_container}>
        <div>
          <div className={styles.link_title}>Contact</div>
          <a className={styles.link} href="tel:7209369354">+1 (720) 936-9354</a>
          <a className={styles.link} href="mailto:daniel_s_cho@brown.edu">daniel_s_cho@brown.edu</a>
        </div>
        <div>
          <div className={styles.link_title}>Page Links</div>
          <Link className={styles.link} href="../#programming">Computer Science</Link>
          <Link className={styles.link} href="../#architecture">Architecture</Link>
          <Link className={styles.link} href="../#art">Art</Link>
        </div>
      </div>
    </div>
  )
}