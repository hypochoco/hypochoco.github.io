
import styles from "./loading.module.css"
import Logo from "../(landing)/(components)/logo"

export default function Loading()
{
  return (
    <div className={styles.loading}>
      <Logo size={6} />
      <div>...</div>
    </div>
  )
}
