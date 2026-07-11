
import styles from "./footer.module.css"
import Logo from "../(landing)/(components)/logo"
import Link from "next/link"
import { siteConfig, emailHref, telHref } from "@/config/site"

export default function Footer()
{
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <Logo size={3} background />
        <div className={styles.logo_title}>{siteConfig.siteName}</div>
      </div>
      <div className={styles.link_container}>
        <div>
          <div className={styles.link_title}>Contact</div>
          <a className={styles.link} href={telHref}>{siteConfig.phone.display}</a>
          <a className={styles.link} href={emailHref}>{siteConfig.email}</a>
        </div>
        <div>
          <div className={styles.link_title}>Page Links</div>
          <Link className={styles.link} href="/#programming">Computer Science</Link>
          <Link className={styles.link} href="/#architecture">Architecture</Link>
          <Link className={styles.link} href="/#art">Art</Link>
        </div>
      </div>
    </div>
  )
}