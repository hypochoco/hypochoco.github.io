import Footer from "./footer";
import NavBar from "./nav_bar";

export default function BlogsLayout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
