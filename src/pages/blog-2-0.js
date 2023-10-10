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
        This exploration originated from creating a relatively simple mobile videogame, where cats had to be managed moving from one place to another. Because this was a mobile game, though, there was not enough computation power to solve for conflict free paths. As a result, cats were freely allowed to clip through each other. But how unsatisfying...  
      </p>

      <p>It was at a research place where I was exposed to contiuous, rather than discree, methods of pathfinding. Such an environemnt could be encoded into a differential equation and then solved for to reconstruct paths. There are many benefits to this such as relatively easily working with differeing agent speeds and sizes, a task that tends to be more painful in this grid approach. Further, agents are not confied wholly to this grid like movement, and instead can be encoded to move within a defined space.</p>

      <p>This rather small visual discomfort led to the following deep dive into cooperative pathfinding. </p>

      <h3 className='blog-subtitle'>1. Explaing the pathfinding algorithm...</h3>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>


      <h3 className='blog-subtitle'>2. Implmentation</h3>
      <h3 className='blog-subtitle'>3. Optimizations</h3>
      <h3 className='blog-subtitle'>4. Further Reading</h3>


    </div>
  )
}