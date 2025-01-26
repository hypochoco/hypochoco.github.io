import styles from "./grid.module.css"
import Image from "next/image"

export default function Grid()
{

  const example = [1, 2, 3, 4, 5, 6]

  return (
    <div className={styles.grid}>
      {example.map((i,n) => {
        return (
          <div className={styles.item} key={n}>
            <div className={styles.item_text}>
              <div className={styles.item_text__title}>image {i}</div>
              <div className={styles.item_text__more}>MORE</div>
            </div>
            <div className={styles.item_image}>
              <Image src="/landing/imgs/boids.webp" alt="" fill style={{objectFit: 'cover', borderRadius: "0.75em"}}/>
            </div>
          </div>
        )
      })}
    </div>
  )
}
