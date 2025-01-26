
import Image from "next/image"
import styles from "./page.module.css"

export default function AboutMe()
{
  return (
    <div className={styles.about_me}>

      <div className={styles.block}>
        <div className={styles.inner_block}>
          <h2>About Me</h2>
        </div>
      </div>

      <div className={styles.block}>
        <div className={styles.inner_block}>
          <div>
            <Image src={"/about-me/senior-pic.webp"} alt="" width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto', borderRadius: "0.5em" }} />
          </div>
        </div>
        <div className={styles.inner_block}>
          <h3>Daniel Cho</h3>
          <p>{"I grew up in a suburb of Colorado drawing and solving math problems, which developed into a passion for design and problem solving. In May of 2024, I'll be graduating with an Sc.B. in Computer Science and Mathematics and an A.B. in Architecture from Brown University. Although these disciplines are seemingly disjoint, I find they're surprisingly similar in process. This website is a documentation of that process into curious fields within and adjacent to art, mathematics, and computer science."}</p>
          <p>{"I hope that the work here can be a kind of stepping stone for others that share similar interests. If anything catches your eye, feel free to reach out, and thanks for visiting!"}</p>
        </div>
      </div>

      <div className={styles.block}>
        {/* <div className={styles.inner_block}>
          <p>...</p>
        </div> */}
        <div className={styles.inner_block} style={{flexDirection: "row", gap: "1em"}}>
          <div>
            <Image src={"/about-me/cripple.webp"} alt="" width={0} height={0} sizes='100vw' style={{ width: '12em', height: 'auto', borderRadius: "0.5em" }} />
          </div>
          <div>
            <Image src={"/about-me/soccer.webp"} alt="" width={0} height={0} sizes='100vw' style={{ width: '12em', height: 'auto', borderRadius: "0.5em" }} />
          </div>
        </div>
      </div>
    </div>
  )
}
