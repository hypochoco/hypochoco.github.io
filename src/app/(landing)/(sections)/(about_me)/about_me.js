import Logo from "../../(components)/logo"
import global_styles from "./../../page.module.css"
import styles from "./about_me.module.css"
import Image from "next/image"

export default function AboutMe()
{
  return (
    <div id="quick-about-me" className={styles.about_me}>

      <div className={styles.image_0}>
        <Image src="/landing/imgs/grunge.webp" alt="" fill style={{objectFit: 'cover'}} />
      </div>

      <div className={styles.image_1}>
        <Image src="/landing/imgs/statue_1.webp" alt="" fill style={{objectFit: 'cover'}} />
      </div>

      <div className={styles.image_2}>
        <Image src="/landing/imgs/statue_1.webp" alt="" fill style={{objectFit: 'cover'}} />
      </div>

      <div className={styles.body}>
        <h2 className={global_styles.section_title}>About me</h2>
        <hr className={global_styles.section_divider} />
        <Logo size={7.5} />
        <p>{"Hey, thanks for visiting--I'm Daniel. My work focuses on art, architecture, and computer science. This site contains my recent projects and documents my processes and thoughts. If you share a curiosity, feel free to reach out."}</p>
        <a className={global_styles.button} href="about-me">more</a>
      </div>

    </div>
  )
}