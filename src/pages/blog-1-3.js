import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

export default function Blog_1_3() {
  return (
    <div className="blog-container">

      <h2 className='blog-title'>
        Boids
      </h2>

      <p>
        by <HashLink className='blog-author' to='/blogs/about_me'>Daniel Cho</HashLink> | <Link to="https://github.com/hypochoco/boids" className='blog-author' target="_blank" rel="noopener noreferrer"> Github Repository </Link> | Nov. 12, 2023
      </p>

      <img className='blog-img' src='./../blog_1_3/untitled-1.png'/>
      <p className='blog-img__caption'>Final render 1.</p>

      <img className='blog-img' src='./../blog_1_3/untitled.png'/>
      <p className='blog-img__caption'>Final render 2.</p>

      <img className='blog-img' src='./../blog_1_3/untitled-2.png'/>
      <p className='blog-img__caption'>Final render 3.</p>


      <img className='blog-img' src='./../blog_1_3/render-1-1.png'/>
      <p className='blog-img__caption'>Bare render 1.</p>

      <img className='blog-img' src='./../blog_1_3/render-2-2.png'/>
      <p className='blog-img__caption'>Bare render 2.</p>

      <video className='blog-img' autoPlay muted loop>
        <source src="./blog_2_1/animation_0006.mp4" type="video/mp4"/>
      </video>
      <p className='blog-img__caption'>Boids simulation.</p>

      <p>
        When I first started this project, I had a loose idea where I wanted to use a boids simulation to generate some kind of architectural structure. Initially, I thought I could extract from the simulation an interesting snapshot where the boids make some kind of bridge. I could then take this position data, smooth out paths, and then base an architectural structure off the processed lines–maybe adding some topology for a site.
      </p>

      <p>
        However, early attempts at this made me realize that the presence of boids were almost completely lost after trying to hand model a structure. It was visually interesting, but there was a clear, conceptual disconnect. 
      </p>

      <p>
        So instead, I tried making a museum with these boid structures as an exposed scaffolding. This would capture the cube exterior and incorporate more directly the boids. But this too had its flaws, where it went the other way: the program of the building detracted from boids. Trying to maintain building codes like publicly accessible bathrooms and fire escape stairs had me lost. Boids were indeed a central component, but the museum was the disconnect. I felt like I was forcing together oil and water.
      </p>

      <p>
        From here, I took a step back and reevaluated the plausibility of this idea. Architecture generally starts with a problem in the form of a site. Given the constraints of the site, we can generally explore both the intricacies of the actual construction site in addition to the surrounding area. And from here we start the ideation process. In the case of this project though, the problem didn’t start with a site or program but instead an idea. Something like this would lend itself better to a sculptural project rather than an architectural. 
      </p>

      <p>
        And with this shift in perspective, I decided to make a pavilion. They’re very simple in terms of program and are allowed to be more expressive, almost sculptural. Now, I start the ideation process once again.  
      </p>


      <h3 className='blog-subtitle'>1. Process</h3>

      <p>
        The boids simulation stores as a json all positions of each agent at every time step. I took each of these path positions, and reformatted them as lines in an obj file. But when trying to import this into a 3d program, there are too many vertices for it to process anything in a timely manner. Maybe this has to do with how I convert data into an obj file, but nevertheless I continue in a different direction. 
      </p>

      <p>
        Rather than storing all positions, I take a small subset of time steps instead, which seems to work a lot better. But because lines won’t render in a ray-tracer, it’s necessary to add some geometry. I first started by placing rectangular prisms at each vertex, and then connecting those that were in the same path, which generated the following renders. 
      </p>

      <img className='blog-img' src='./../blog_1_3/init-attempt-0.png'/>
      <p className='blog-img__caption'>Initial attempt render 1.</p>

      <img className='blog-img' src='./../blog_1_3/init-attempt-1.png'/>
      <p className='blog-img__caption'>Initial attempt render 2.</p>

      <p>
        It’s definitely not bad. It’s visually interesting and closely connected to the boids–but we can do better.
      </p>

      <p>
        Rather than just connecting prisms between vertices in the same path, we can also connect vertices that are close together. This does bring back the performance issue, though. If the distance threshold is too low, there will be too many lines and the program crashes because of a lack of v-ram. If the threshold is too high, there won’t be enough connections and it ends up not looking too different. With a little trial and error, though, I find an amount I like.
      </p>

      <img className='blog-img' src='./../blog_1_3/mat-lab-vis.png'/>
      <p className='blog-img__caption'>Adding complexity.</p>

      <p>
        Finally, we can again create and connect rectangular prisms. But before we render again, the form has taken a more organic shape, so I also decided to smooth out the geometry. With this, I make the final renders.
      </p>


      <h3 className='blog-subtitle'>2.1. Extra Renders</h3>

      <img className='blog-img' src='./../blog_1_3/render-1-1.png'/>
      <p className='blog-img__caption'>Angle 1.</p>

      <img className='blog-img' src='./../blog_1_3/render-1-2.png'/>
      <p className='blog-img__caption'>Angle 2.</p>

      <img className='blog-img' src='./../blog_1_3/render-1-3.png'/>
      <p className='blog-img__caption'>Angle 3.</p>


      <h3 className='blog-subtitle'>2.2. Extra Renders</h3>

      <img className='blog-img' src='./../blog_1_3/render-2-1.png'/>
      <p className='blog-img__caption'>Angle 1.</p>

      <img className='blog-img' src='./../blog_1_3/render-2-2.png'/>
      <p className='blog-img__caption'>Angle 2.</p>

      <img className='blog-img' src='./../blog_1_3/render-2-3.png'/>
      <p className='blog-img__caption'>Angle 3.</p>


      {/* <h3 className='blog-subtitle'>3. Further</h3>

      <p>
        I definitely like how the renders turned out. They’re strangely organic and interesting to look at, but they kind of look like bones. To fix this, I’d probably turn toward materiality. I’d pick maybe a combination of steel and timber construction to render the structures. Further, maybe it’d be nice to generate a more obvious trimesh geometry and have triangular panels of wood or steel. 
      </p>

      <p>
        To actually put an end to the project, I would have to either make or find a site for this and render it in that environment.
      </p> */}

    </div>
  )
}