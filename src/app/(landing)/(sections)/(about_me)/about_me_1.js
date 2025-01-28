import global_styles from "./../../page.module.css"
import styles from "./about_me_1.module.css"
import Image from "next/image"

export default function AboutMe1()
{
  return (
    <div id="quick-about-me" className={styles.about_me}>

      <div className={styles.image_0} />

      <div className={styles.image_1}>
        <Image src="/landing/imgs/render.webp" alt="" fill style={{objectFit: 'cover'}} />
      </div>

      <div className={styles.body}>
        <h2 className={styles.section_title}>{"Hello, I'm "}<span className={styles.section_title_alt}>Daniel</span></h2>
        <hr className={global_styles.section_divider} />
        <p className={styles.text}>{"Thanks for visiting. My work focuses on art, architecture, and computer science. This site contains my recent projects and documents my processes and thoughts. If you share a curiosity, feel free to reach out."}</p>
        <div className={styles.button}>
          <a className={global_styles.button} href="about-me">more</a>
        </div>
      </div>

    </div>
  )
}
