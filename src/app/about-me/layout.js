import Footer from "../(landing)/(components)/footer";
import NavBar from "../blogs/nav_bar";

export default function AboutMeLayout({ children })
{
  return (
    <div>
      <title>Hypochoco - About Me</title>
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}
