
import styles from "./welcome.module.css"
import Image from "next/image";

export default function Welcome()
{
  return (
    <div className={styles.body}>

      <Image src="/landing/imgs/boids.webp" alt="" fill style={{objectFit: 'cover'}} />
      
      <div className={styles.welcome}>Welcome</div>
      <div className={styles.scroll_container}>
        <a href="#quick-about-me" className={`${styles.scroll} ${styles.shimmer}`}>scroll</a>
      </div>

    </div>
  )
}
