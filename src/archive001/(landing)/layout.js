import Footer from "./(footer)/footer";
import Header from "./(header)/header";

export default function LandingLayout({ children }) {
  return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
  );
}
