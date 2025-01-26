import global_styles from "./../page.module.css"
import styles from "./contact.module.css"
import Image from "next/image"

export default function Contact()
{
  return (
    <div id="contact" className={styles.contact}>

      <div className={styles.image_0}>
        <Image src="/landing/imgs/grunge_2.webp" alt="" fill style={{objectFit: 'cover'}} />
      </div>

      <div className={styles.image_1}>
        <Image src="/landing/imgs/statue_3.webp" alt="" fill style={{objectFit: 'cover'}} />
      </div>

      <div className={styles.image_2}>
        <Image src="/landing/imgs/statue_3.webp" alt="" fill style={{objectFit: 'cover'}} />
      </div>

      <div className={styles.body}>
        <h2 className={global_styles.section_title}>Contact</h2>
        <hr className={global_styles.section_divider} />
        <p>{"Thanks for visiting--feel free to reach out via phone or email for any inquiries or further communication."}</p>
        <div style={{display: "flex", flexDirection: "row", gap: "1em", fontWeight: "300"}}>
          <a className={global_styles.button} href="tel:7209369354">Phone</a>
          <a className={global_styles.button} href="mailto:daniel_s_cho@brown.edu">Email</a>
        </div>
      </div>

    </div>
  )
}