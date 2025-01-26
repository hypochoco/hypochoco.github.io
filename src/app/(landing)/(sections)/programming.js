
import Image from "next/image"

import global_styles from "./../page.module.css"
import styles from "./programming.module.css"
import Grid from "../(components)/grid"

export default function Programming()
{
  return (
    <div id="programming" className={styles.programming_container}>
      <div className={styles.programming}>

        <div className={styles.image_0}>
          <Image src="/landing/imgs/wireframe.webp" alt="" fill style={{objectFit: 'cover'}} />
        </div>

        <div className={styles.image_1}>
          <Image src="/landing/imgs/render.webp" alt="" fill style={{objectFit: 'cover'}} />
        </div>

        <div className={styles.body}>
          <h2 className={global_styles.section_title}>Comp Sci</h2>
          <hr className={global_styles.section_divider} />
          <p>{"Lately, I've been interested in the applications of computer science in Architecture. The Boids project, for example, is a structure generated from Craig Reynolds’ classic algorithm that simulates flocking behavior in animals. By keeping a record of where each boid moves in relation to others, we're able to generate an interesting, organic structure."}</p>
        </div>

      </div>

      <div className={styles.links}>
        <Grid />
      </div>
    </div>
  )
}