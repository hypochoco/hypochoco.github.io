
import Image from "next/image"

export default function Logo({size, background})
{

  const sizeString = `${size}em`
  const borderRadiusString = `${size/5}em`

  return (
    <div style={background? {width: sizeString, height: sizeString, borderRadius: borderRadiusString, backgroundColor: "white", position: "relative"} : {width: sizeString, height: sizeString, position: "relative"}}>
      <Image src="/icon-ico-256.ico" alt="" fill style={{objectFit: 'cover'}} />
    </div>
  )
}
