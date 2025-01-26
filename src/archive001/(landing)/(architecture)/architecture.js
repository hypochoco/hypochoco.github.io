import ImageSet from "../(components)/image_set"
import Image from "next/image"
import global_styles from "./../page.module.css"
import styles from "./architecture.module.css"

function Architecture()
{
  const example = "example... ".repeat(100)

  return (
    <div className={`${global_styles.section} ${styles.architecture}`}>

      <div className={global_styles.image_container}>
        <div className={styles.image_1}>
          <Image src='/landing/imgs/grunge_1.webp' fill={true} style={{objectFit: 'cover'}} alt=""/>
        </div>
        <div className={styles.image_2}>
          <Image src='/landing/imgs/boids.webp' className={styles.image_2_raw} fill={true} style={{objectFit: 'cover'}} alt=""/>
        </div>
        <div className={styles.image_3}>
          <Image src='/landing/imgs/boids.webp' className={styles.image_2_raw} fill={true} style={{objectFit: 'cover'}} alt=""/>
        </div>
        
      </div>

      <div className={`${global_styles.section_body} ${styles.section_body}`}>
        <h1 className={global_styles.section_header}>Architecture</h1>
        <hr className={global_styles.section_divider}/>
        <p>{"Lately, I’ve been interested in the applications of computer science in Architecture. The Boids project, for example, is a structure generated from Craig Reynolds’ classic algorithm that simulates flocking behavior in animals. By keeping a record of where each boid moves in relation to others, we're able to generate an interesting, organic structure."}</p>
      </div>

      <ImageSet />
      
    </div>
  )
}

export default Architecture