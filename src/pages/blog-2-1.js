import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

export default function Blog_2_1() {
  return (
    <div className="blog-container">

      <h2 className='blog-title'>
        Boids
      </h2>

      <p>
        by <HashLink className='blog-author' to='/blogs/about_me'>Daniel Cho</HashLink> | <Link to="https://github.com/hypochoco/boids" className='blog-author' target="_blank" rel="noopener noreferrer"> Github Repository </Link> | July 31, 2023
      </p>

      {/* <img className='blog-img' src='./../blog_2_0/untitled.png'/> */}
      <video className='blog-img' autoPlay muted loop>
        <source src="./blog_2_1/animation_0006.mp4" type="video/mp4"/>
      </video>
      <p className='blog-img__caption'>Boids simulation.</p>

      {/* <video className='blog-img' autoPlay muted loop>
        <source src="./blog_2_1/animation_0007.mp4" type="video/mp4"/>
      </video>
      <p className='blog-img__caption'>Caption: thing...</p> */}

      <p>
        In this project, I wanted to recreate the popular boids algorithm by Craig Reynolds. Additionally, I also wanted to structure the project so that it would be readily trainable as a reinforcement learning environment. This would mean the visualization and evaluation are distinct processes, and that it would be structured with reset and step functions. Further, I also employ the entity component system (ecs) architecture pattern to organize the code. So, this would mean adding or removing a behavior would be as simple as adding a component to an entity. 
      </p>

      <h3 className='blog-subtitle'>1. Implementation (WIP)</h3>

      <p>
        WIP - coming soon! You can check out the project repo <Link to="https://github.com/hypochoco/boids" className='blog-author' target="_blank" rel="noopener noreferrer">here</Link>!
      </p>

      <h3 className='blog-subtitle'>2. Collaborations (WIP)</h3>

      <p>
        I use the boids aglorithm as a basis for generating architectural structures. To see that project, please navigate to <HashLink className='blog-author' to='/blogs/blog-1-3'>this page</HashLink>.
      </p>

      <h3 className='blog-subtitle'>3. Conclusions</h3>

      <p>
        WIP - coming soon!
      </p>

    </div>
  )
}