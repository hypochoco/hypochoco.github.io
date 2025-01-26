
import styles from "./contact.module.css"

function Contact()
{
  const example = "example... ".repeat(100)

  return (
    <div className={styles.section}>

      <div className={styles.section_text}>
        <h1>Contact</h1>
        <p>
          {example}
        </p>
      </div>

      <div className={styles.image_container}>
        <div className={styles.test_image_1}>background image 1</div>
        <div className={styles.test_image_2}>background image 2</div>
        <div className={styles.test_image_3}>background image 3</div>
      </div>
      
    </div>
  )
}

export default Contact
