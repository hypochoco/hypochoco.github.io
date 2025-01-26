
import Image from 'next/image'
import styles from './page.module.css'
import { Parallax, ParallaxProvider } from './../lib/parallax'
import QuickAboutMe from './quickAboutMe'

function Landing()
{
  // when on mobile, turn this off
    // to turn off the speed, just set it to 0....

  const parallaxSpeedFast = 5
  const parallaxSpeed = 2.5

  return (
    <div>

      <div className={styles.cover_image}>
        <Image src='/landing/imgs/arch.webp' fill={true} style={{objectFit: 'cover'}} />

        <Parallax speed={parallaxSpeedFast} style={{position: 'relative', top: '20vh'}}>
          <div className={styles.welcome}>WELCOME</div>
        </Parallax>

        <div className={styles.scroll}>
          <div className={styles.line__false_start} />
        </div>
        <Parallax speed={parallaxSpeed} className={styles.scroll}>
          <div>SCROLL</div>
          <div className={styles.line__start} />
        </Parallax>
      </div>

      <div className={styles.gradient}>
        <div className={styles.line}>

          <Parallax speed={parallaxSpeed}>
            <QuickAboutMe />
          </Parallax>

        </div>
      </div>
    
      <div className={styles.cover_image}>
        <Image src='/landing/imgs/boids.webp' fill={true} style={{objectFit: 'cover'}} />
      </div> 

      <div className={styles.spacer} />

    </div>
  )
}

export default Landing
