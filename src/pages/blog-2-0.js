import { HashLink } from 'react-router-hash-link';

export default function Blog_2_0() {
  return (
    <div className="blog-container">

      <h2 className='blog-title'>
        Cooperative Pathfinding
      </h2>

      <p>
        by <HashLink className='blog-author' to='/blogs/about_me'>Daniel Cho</HashLink> | Sept. 15, 2023
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

      <h3 className='blog-subtitle'>1. Explaing the MAPF Problem (WIP)</h3>

      <p>WIP - coming soon!</p>

      <h3 className='blog-subtitle'>2. Implmentation in Unity (WIP)</h3>

      <p>WIP - coming soon!</p>

      <h3 className='blog-subtitle'>3. Optimizations (WIP)</h3>

      <p>WIP - coming soon!</p>

      <h3 className='blog-subtitle'>4. Further Reading (WIP)</h3>

      <p>WIP - coming soon!</p>

    </div>
  )
}