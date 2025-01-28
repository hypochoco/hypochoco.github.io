import global_styles from "./../../page.module.css"
import styles from "./contact.module.css"
import Image from "next/image"

export default function Contact()
{
  return (
    <div id="contact" className={styles.contact}>

      <div className={styles.body}>
        <h2 className={global_styles.section_sub_title}>Contact</h2>
        <p>{"Thanks for visiting—feel free to reach out via phone or email for inquiries or further communication."}</p>
      </div>

      <div className={styles.links}>
        <a className={global_styles.button} href="mailto:daniel_s_cho@brown.edu">Email</a>
        <a className={global_styles.button} href="tel:7209369354">Phone</a>
      </div>
        
    </div>
  )
}