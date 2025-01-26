
import styles from './page.module.css'
import Art from "./(art)/art";
import Architecture from './(architecture)/architecture';
import Programming from './(programming)/programming';
import Welcome from './(welcome)/welcome';
import Contact from './(contact)/contact';
import AboutMe from './(about-me)/about_me';

function Landing()
{
  return (
    <div style={{position: "relative"}}>
      <Welcome />
      <AboutMe />
      <Architecture />
      <Programming />
      <Art />
      <Contact />
    </div>
  )
}

export default Landing
