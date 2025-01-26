
import NavBar from "./(components)/nav_bar"
import Footer from "./(components)/footer"

export default function LandingLayout({ children })
{
  return (
    <div>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}
