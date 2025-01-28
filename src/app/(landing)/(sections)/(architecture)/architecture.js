
import Image from "next/image"
import global_styles from "./../../page.module.css"
import styles from "./architecture.module.css"

function Project({ reversed, date, title, description, description_short, link, image })
{
  return (
    <div className={styles.project} style={reversed? {flexDirection: "row-reverse"} : {}}>
      <div className={styles.project_image}>
        <Image src={image} alt="" fill style={{objectFit: 'cover', borderRadius: "0.5em"}} />
      </div>
      {/* <div style={reversed? {textAlign: "right"} : {}}> */}
      <div>
        <div className={styles.project_date}>{date}</div>
        <div className={styles.project_title}>{title}</div>
        <div className={`${styles.project_description} ${styles.long}`}>{description}</div>
        <div className={`${styles.project_description} ${styles.short}`}>{description_short}</div>
        <a style={{display: "inline-block"}} className={global_styles.button} href={link}>view project</a>
      </div>
    </div>
  )
}

export default function Architecture()
{
  return (
    <div id="architecture" className={styles.architecture}>
      <h2 className={global_styles.section_sub_title}>Architecture</h2>
      {/* <hr className={global_styles.section_divider} /> */}
      
      <Project date={"Aug. 21, 2023"} title={"Providence infill"} description={"In Providence, Rhode Island, a building was demolished between Urban Outfitters and Mike's Pizza, leaving behind a uniquely challenging lot. The space is so compact that meeting all building code requirements becomes a significant obstacle. This project aims to transform the lot into student housing for Brown University, navigating the constraints of the site to create a functional and innovative living space."} description_short={"In Providence, Rhode Island, a building was demolished between..."} link={"#architecture"} image={"/landing/imgs/infill.webp"} />
      <Project reversed date={"May. 5, 2024"} title={"Icelandic church lighting"} description={"Churches have a fascinating relationship with lighting, often using it in creative ways to highlight specific elements or create a sense of mystery and awe. Inspired by a trip to Iceland and the captivating beauty of the aurora borealis, this project explores the interplay of light and movement. The design uses stained glass windows to filter light, which is then reflected onto moving water, creating a dynamic and ethereal effect reminiscent of the northern lights."} description_short={"Churches have a fascinating relationship with lighting, often using it in creative ways..."} link={"#architecture"} image={"/landing/imgs/icelandic.webp"} />

    </div>
  )
}
