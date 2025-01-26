
import styles from './nav.module.css'
import { Roboto } from 'next/font/google';

function Nav()
{
  return (
    <div className={styles.nav}>

      <div className={styles.row}>
        <img src='/icon-ico-256.ico' className={styles.logo}/>
        <div className={styles.title}>HYPOCHOCO</div>
      </div>

      <div className={styles.row}>
        <div className={styles.entry}>HOME</div>
        <div className={styles.entry}>ART</div>
        <div className={styles.entry}>ARCHITECTURE</div>
        <div className={styles.entry}>PROGRAMMING</div>
        
        <div>|</div>

        <div className={styles.entry}>CONTACT</div>
        <div className={styles.entry}>ABOUT ME</div>
      </div>

    </div>
  )
}

export default Nav



