import Footer from "./footer";
import Nav from "./nav";

import { ParallaxProvider } from "./../lib/parallax";

export default function LandingLayout({ children }) {
  return (
    <div>
      <Nav />
      <ParallaxProvider>{children}</ParallaxProvider>
      <Footer />
    </div>
  );
}

