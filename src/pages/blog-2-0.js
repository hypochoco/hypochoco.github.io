import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

export default function Blog_2_0() {
  return (
    <div className="blog-container">

      <h2 className='blog-title'>
        Cooperative Pathfinding
      </h2>

      <p>
        by <HashLink className='blog-author' to='/blogs/about_me'>Daniel Cho</HashLink> | <Link to="https://github.com/hypochoco/Cooperative-Pathfinding-2" className='blog-author' target="_blank" rel="noopener noreferrer"> Github Repository </Link> | Sept. 15, 2023
      </p>

      <video className='blog-img' autoPlay muted loop>
        <source src="./blog_2_0/movie_001.mp4" type="video/mp4"/>
      </video>
      <p className='blog-img__caption'>Caption: Windowed Hierarchical Cooperative A* (WHCA*) pathfinding implemented in Unity.</p>

      <p>
        This exploration originated from creating a relatively simple mobile videogame, where cats had to be managed moving from one place to another. Because this was a mobile game, though, there was not enough computational power to solve for conflict free paths. As a result, cats were freely allowed to clip through each other, which was quite unsatisfying.
      </p>

      <p> 
        This rather small visual discomfort led to the following exploration into the complex world of multi-agent pathfinding algorithms. 	
      </p>

      <h3 className='blog-subtitle'>1. The MAPF Problem (WIP)</h3>

      <p>WIP - coming soon!</p>

      <h3 className='blog-subtitle'>2.1. Implmentation in Unity (WIP)</h3>

      <p>WIP - coming soon!</p>

      <h3 className='blog-subtitle'>2.2. Time Dependency (WIP)</h3>

      <p>WIP - coming soon!</p>

      <h3 className='blog-subtitle'>3. Optimizations (WIP)</h3>

      <p>WIP - coming soon!</p>

      <h3 className='blog-subtitle'>4. Further Reading (WIP)</h3>

      <p>WIP - coming soon!</p>

    </div>
  )
}