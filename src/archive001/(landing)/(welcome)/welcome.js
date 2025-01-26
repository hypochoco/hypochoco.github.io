"use client";

import { useState } from "react"
import styles from "./welcome.module.css"

import Image from 'next/image'

function Welcome()
{

  const [selected, setSelected] = useState(false)

  return (
    <div className={styles.section}>
      <h1 className={styles.section_header}>WELCOME</h1>
      <div className={selected? styles.scroll: `${styles.scroll} ${styles.shimmer_text}`} onClick={e => setSelected(!selected)}>
        <a href="#about-me" style={{textDecoration: 'none', color: 'inherit', padding: "1em"}}>SCROLL</a>
      </div>
      <div className={styles.cover_image}>
        <Image src="/landing/imgs/arch.webp" fill={true} style={{objectFit: 'cover'}} alt="" priority />
      </div>
    </div>
  )
}

export default Welcome
