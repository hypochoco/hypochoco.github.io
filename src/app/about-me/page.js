
import Image from "next/image"
import styles from "./page.module.css"

export default function AboutMe()
{
  return (
    <div className={styles.about_me}>

      <div className={styles.block}>
        <h2 className={styles.header}>About Me</h2>
      </div>

      <div className={styles.block}>

        <div className={`${styles.inner_block} ${styles.small}`}>
          <Image src={"/about-me/senior-pic.webp"} alt="" fill style={{objectFit: 'cover', borderRadius: "0.5em"}} />
        </div>

        <div className={`${styles.inner_block} ${styles.big} ${styles.block_text}`}>
          <div style={{padding: "1em"}}>
            <h3>Daniel Cho</h3>
            <p>{"I grew up in a suburb of Colorado drawing and tinkering with electronics, which developed into a passion for design and problem solving. I recently graduate with an Sc.B. in Computer Science and Mathematics and an A.B. in Architecture from Brown University and am completing an Sc.M. in Computer Science (AI/ML track). Although these disciplines are seemingly disjoint, I find they're surprisingly similar in process. This website is a documentation of that process into curious fields within and adjacent to art, mathematics, and computer science."}</p>
            <p>{"I hope that the work here can be a kind of stepping stone for others that share similar interests. If anything catches your eye, feel free to reach out, and thanks for visiting!"}</p>
          </div>
        </div>

      </div>

      {/* It'd be nice to add these images, but unsure of a good format. */}

      {/* <div className={`${styles.block} ${styles.reverse}`}>

        <div className={`${styles.inner_block} ${styles.big} ${styles.block_text}`}>
          <div style={{padding: "1em"}}>
            <h3>Daniel Cho</h3>
            <p>{"I grew up in a suburb of Colorado drawing and solving math problems, which developed into a passion for design and problem solving. In May of 2024, I'll be graduating with an Sc.B. in Computer Science and Mathematics and an A.B. in Architecture from Brown University. Although these disciplines are seemingly disjoint, I find they're surprisingly similar in process. This website is a documentation of that process into curious fields within and adjacent to art, mathematics, and computer science."}</p>
            <p>{"I hope that the work here can be a kind of stepping stone for others that share similar interests. If anything catches your eye, feel free to reach out, and thanks for visiting!"}</p>
          </div>
        </div>

        <div className={`${styles.inner_block} ${styles.small}`}>
          <div className={styles.half}>
            <Image src={"/about-me/cripple.webp"} alt="" fill style={{objectFit: 'cover', borderRadius: "0.5em"}} />
          </div>
          <div className={styles.half}>
            <Image src={"/about-me/soccer.webp"} alt="" fill style={{objectFit: 'cover', borderRadius: "0.5em"}} />
          </div>
        </div>
      </div> */}

    </div>
  )
}
