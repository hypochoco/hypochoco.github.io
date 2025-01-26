
import { ParallaxProvider } from '../lib/parallax' 

export default function Layout({ children }) {
  return(
    <ParallaxProvider>{children}</ParallaxProvider>
  )
}

