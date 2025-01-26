
import styles from './quickAboutMe.module.css'
import { Roboto } from 'next/font/google'


function QuickAboutMe()
{
  return (
    <div className={styles.about_me__container}>
      <div className={styles.about_me}>

        <div className={styles.left}>
          <div className={styles.title}>ABOUT ME</div>
          <hr />
          <img src='/icon-ico-256.ico' className={styles.logo}/>
          <div>Hey, thanks for visiting--my name's Daniel. My work focuses on art, architecture, and computer science. This site contains my recent projects and documents my processes and thoughts. If you at all share a curiosity, feel free to reach out.</div>
          <button className={styles.about__button}>MORE</button>
        </div>
        
        <img src='/landing/imgs/statue.webp' className={styles.statue} />

      </div>
    </div>
  )
}

export default QuickAboutMe