
import Image from "next/image"
import global_styles from "./../../page.module.css"
import styles from "./programming.module.css"

function Project({ date, title, description, link, image})
{
  return (
    <a className={styles.project} href={link}>
      <div className={styles.project_image}>
        <Image src={image} alt="" fill style={{objectFit: 'cover', borderRadius: "0.5em", backgroundColor: "gray"}} />
      </div>
      <div className={styles.project_body}>
        <div className={styles.project_date}>{date}</div>
        <div className={styles.project_title}>{title}</div>
        <div className={styles.project_description}>{description}</div>
      </div>
    </a>
  )
}

export default function Programming()
{
  return (
    <div id="programming" className={styles.programming}>
      <h2 className={global_styles.section_sub_title}>Computer Science</h2>
      {/* <hr className={global_styles.section_divider} /> */}
      
      <div className={styles.body}>
        
        <div className={styles.sub_body_0}>
          <div className={styles.image_0}>
            <Image src="/landing/imgs/boids.webp" alt="" fill style={{objectFit: 'cover', borderRadius: "0.5em"}} />
          </div>
          <div className={styles.text}>
            <div className={styles.date}>May 27, 2024</div>
            <div className={styles.title}>Boids Generation</div>
            <div className={`${styles.description} ${styles.long}`}>{"By tracing the positional history of a 3D implementation of Craig Reynolds' classic BOID algorithm, we can observe how dynamic patterns evolve over time, forming intricate structures that interact with their foundational elements. By also establishing connections based on proximity, these emergent forms take on an unexpectedly organic quality, arising from a minimal set of structured rules."}</div>
            <div className={`${styles.description} ${styles.short}`}>{"By tracing the positional history of a 3D implementation of Craig Reynolds' classic BOID algorithm..."}</div>
            <div>
              <a className={global_styles.button} href="/blogs/boids">view project</a>
            </div>
          </div>
        </div>

        <div className={styles.sub_body_1}>
          <Project date={"Oct. 18, 2024"} title={"Stable diffusion NeRF"} description={"Combination of stable diffusion and NeRF to generate novel views with limited images."} link={"#programming"} image={"/landing/imgs/nerf.webp"}/>
          <Project date={"Dec. 21, 2023"} title={"Soft body simulation"} description={"Finite element methods in C++, OpenGL and tetrahedral internal structures to simulate soft bodies."} link={"#programming"} image={"/landing/imgs/soft.webp"}/>
          <Project date={"Nov. 10, 2023"} title={"Ray tracer"} description={"Unbiased ray tracer in C++ and OpenGL with various BSDF profiles."} link={"#programming"} image={"/landing/imgs/raytracer.webp"}/>
          <Project date={"Sept. 8, 2021"} title={"Cooperative pathfinding"} description={"Conflict-oriented windowed hierarchical cooperative A* pathfinding in Unity."} link={"#programming"} image={"/landing/imgs/pathfinding.webp"}/>
        </div>

      </div>
    </div>
  )
}