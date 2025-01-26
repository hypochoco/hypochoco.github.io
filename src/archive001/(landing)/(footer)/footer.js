import Image from "next/image"
import styles from "./footer.module.css"

function Footer()
{
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <div className={styles.logo_image}>
          <Image src='/icon-ico-256.ico' fill={true} style={{objectFit: 'cover'}} alt=""/>
        </div>
        <div className={styles.logo_text}>
          Hypochoco
        </div>
      </div>
      <div className={styles.link_body}>
        <div className={styles.link_container}>
          <div className={styles.link_title}>Contact</div>
          <a className={styles.link}>email</a>
          <a className={styles.link}>phone</a>
        </div>
        <div className={styles.link_container}>
          <div className={styles.link_title}>Page Links</div>
          <a className={styles.link}>link 1</a>
          <a className={styles.link}>link 2</a>
          <a className={styles.link}>link 3</a>
        </div>
      </div>
    </div>
  )
}

export default Footer

