
import ImageSet from "../(components)/image_set"
import styles from "./programming.module.css"
import global_styles from "./../page.module.css"

function Programming()
{
  const example = "example ".repeat(60)

  return (
    <div className={`${global_styles.section} ${styles.programming}`}>

      <div className={global_styles.image_container}>
        <div className={styles.test_image_1}>background image 1</div>
        <div className={styles.test_image_2}>background image 2</div>
        <div className={styles.test_image_3}>background image 3</div>
      </div>

      <div className={styles.section_body_container}>
        <div className={styles.section_body}>
          <h1 className={global_styles.section_header}>Programming</h1>
          <hr className={global_styles.section_divider}/>
          <p>{example}</p>
        </div>
      </div>
      
      <ImageSet />
      
    </div>
  )
}

export default Programming
