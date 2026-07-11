import Footer from "../blogs/footer";
import NavBar from "../blogs/nav_bar";

export const metadata = {
  title: "About Me",
}

export default function AboutMeLayout({ children })
{
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}
