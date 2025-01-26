import styles from "./header.module.css"
import Image from 'next/image'

function Header()
{
  return (
    <div className={styles.header_container}>
      <div className={styles.header}>
        <div className={styles.logo_container}>

          <div className={styles.logo}>
            <Image src='/icon-ico-256.ico' fill={true} style={{objectFit: 'cover'}} alt=""/>
          </div>
          
          <div className={styles.logo_text}>Hypochoco</div>
        </div>
        <div className={styles.link_container}>
          <div className={styles.link}>link 1</div>
          <div className={styles.link}>link 2</div>
          <div className={styles.link}>link 3</div>
        </div>
      </div>
    </div>
  )
}

export default Header
