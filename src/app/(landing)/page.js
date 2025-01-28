
/**
 * Main page, simply a container for components.
 */

import AboutMe from "./(sections)/(about_me)/about_me"
import AboutMe1 from "./(sections)/(about_me)/about_me_1"
import Architecture from "./(sections)/(architecture)/architecture"
import Art from "./(sections)/(art)/art"
import Contact from "./(sections)/(contact)/contact"
import Programming from "./(sections)/(programming)/programming"
import Welcome from "./(sections)/(welcome)/welcome"

export default function Landing()
{
  return (
    <div>
      <Welcome />
      {/* <AboutMe /> */} 
      <AboutMe1 />
      <Programming />
      <Architecture />
      <Art />
      <Contact />
    </div>
  )
}
