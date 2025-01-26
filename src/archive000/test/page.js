
import styles from './../loading.module.css'

function Test()
{
  return (
    <div style={{'backgroundColor': '#404456'}}>
      
      <div>Loading</div>

      <div className={styles.loader}>
        <div className={styles.box}></div>
        <div className={styles.hill}></div>
      </div>

    </div>
  )
}

// [https://blog.hubspot.com/website/css-animation-examples]
  // forever cube with a black background, bear right above that.

export default Test

