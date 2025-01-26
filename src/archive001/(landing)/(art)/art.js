
import Image from "next/image"
import ImageSet from "../(components)/image_set"
import styles from "./art.module.css"
import global_styles from "./../page.module.css"

function Art()
{
  const example = "example... ".repeat(100)

  return (
    <div id="#art" className={global_styles.section}>

      <div className={global_styles.section_body}>
        <h1 className={global_styles.section_header}>Art</h1>
        <hr className={global_styles.section_divider}/>
        <p>
          {example}
        </p>
      </div>

      <div className={global_styles.image_container}>
        <div className={styles.test_image_1}>
          <Image src='/landing/imgs/statue_1.webp' fill={true} style={{objectFit: 'cover'}} alt=""/>
        </div>
        <div className={styles.test_image_2}>background image 2</div>
        <div className={styles.test_image_3}>background image 3</div>
      </div>

      <ImageSet />
      
    </div>

    // <div id="about-me" className={`${global_styles.section} ${styles.about_me}`}>

    //   <div className={`${global_styles.image_container} ${styles.image_container}`}>
    //     <div className={styles.image_1}>
    //       <Image src='/landing/imgs/grunge.webp' fill={true} style={{objectFit: 'cover'}} alt=""/>
    //     </div>
    //     <div className={styles.image_2}>
    //       <Image src='/landing/imgs/statue_1.webp' fill={true} style={{objectFit: 'cover'}} alt=""/>
    //     </div>
    //     <div className={styles.image_3}>
    //       <Image src='/landing/imgs/statue_1.webp' fill={true} style={{objectFit: 'cover'}} alt=""/>
    //     </div>
    //   </div>

    //   <div className={global_styles.section_body}>
    //     <h1 className={global_styles.section_header}>About Me</h1>
    //     <hr className={global_styles.section_divider}/>
    //     <div className={styles.logo}>
    //       <Image src='/icon-ico-256.ico' fill={true} style={{objectFit: 'cover'}} alt=""/>
    //     </div>
    //     <p>{"Hey, thanks for visiting--I'm Daniel. My work focuses on art, architecture, and computer science. This site contains my recent projects and documents my processes and thoughts. If you share a curiosity, feel free to reach out."}</p>
    //     <button className={styles.button}>More</button>
    //   </div>

    // </div>
  )
}

export default Art
