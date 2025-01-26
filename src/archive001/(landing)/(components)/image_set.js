
import styles from "./image_set.module.css"

function ImageSet()
{

  const example = [1, 2, 3, 4, 5, 6, 7]

  return (
    <div className={styles.section}>
      <div className={styles.image_container}>
        {example.map((i,n) => {
          return (<a className={styles.image_set} key={n}>
              <div className={styles.image_set__body}>
                {`image ${i}`}
              </div>
            </a>)
        })}
      </div>
    </div>
  )
}

export default ImageSet
