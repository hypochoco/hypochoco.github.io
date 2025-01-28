
import Image from "next/image"
import global_styles from "./../../page.module.css"
import styles from "./art.module.css"

function Project({ date, title, description, description2, link, image })
{
  return (
    <a className={styles.project} href={link} >
      <div className={styles.project_image}>
        <Image src={image} alt="" fill className={styles.project_image_hover} style={{objectFit: 'cover', borderRadius: "0.5em"}} />
        <div className={styles.project_text}>
          <div className={styles.project_date}>{date}</div>
          <div className={styles.project_title}>{title}</div>
          <div>{description}</div>
        </div>
        <div className={styles.project_description}>{description2}</div>
      </div>
    </a>
  )
}

export default function Art()
{
  return (
    <div id="art" className={styles.art}>
      
      <h2 className={global_styles.section_sub_title}>Art</h2>
      {/* <hr className={global_styles.section_divider} /> */}

      <div className={styles.body}>
        <Project date={"Feb. 20, 2024"} title={"Still life"} description={"more"} description2={"Imaginary still life."} link={"/blogs/still"} image={"/landing/imgs/still.webp"} />
        <Project date={"Sept. 18, 2023"} title={"Tiger and snake"} description={"more"} description2={"Historically inspired illustration."} link={"/blogs/tiger"} image={"/landing/imgs/tigersnake.webp"} />
        <Project date={"March 16, 2020"} title={"Post apocalyptic"} description={"more"} description2={"Environment in PS and Blender."} link={"/blogs/post"} image={"/landing/imgs/post.webp"} />
        <Project date={"Dec. 2, 2019"} title={"Artist studies"} description={"more"} description2={"Collection of artist studies."} link={"/blogs/studies"} image={"/landing/imgs/study.webp"} />
      </div>
    </div>
  )
}