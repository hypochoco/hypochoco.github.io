import styles from '../../blogs.module.css'
import Image from 'next/image'
export default function Blog(){return(<div className={styles.blog}><div className={styles.body}><div className={styles.title}><h2 className={styles.title__text}>Icelandic church</h2><p className={styles.title__info}>by Daniel Cho | Spet. 8, 2021</p></div><p>something something something...</p><div><Image src='/blogs/architecture/boids.webp' alt='final boids rendering' width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto', marginTop: '1em' }} /><p className={styles.caption}>final boids rendering</p></div><div><video style={{marginTop: '1em'}} width='100%' height='auto' controls preload='none' autoPlay><source src='/blogs/programming/movie_001.mp4' type='video/mp4' /><track srcLang='en' label='English' />Your browser does not support the video.</video><p className={styles.caption}>testing video</p></div></div></div>)}