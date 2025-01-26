
/**
 * Main page, simply a container for components.
 */

import AboutMe from "./(sections)/about_me"
import Architecture from "./(sections)/architecture"
import Art from "./(sections)/art"
import Contact from "./(sections)/contact"
import Programming from "./(sections)/programming"
import Welcome from "./(sections)/welcome"

export default function Landing()
{
  return (
    <div>
      <Welcome />
      <AboutMe />
      <Programming />
      <Architecture />
      <Art />
      <Contact />
    </div>
  )
}
