import { HashLink } from 'react-router-hash-link';

export default function Blog_1_2() {
  return (
    <div className="blog-container">

      <h2 className='blog-title'>
        Church Architecture - Rendering
      </h2>

      <p>
        by <HashLink className='blog-author' to='/blogs/about_me'>Daniel Cho</HashLink> | July 31, 2023
      </p>


      <img className='blog-img' src='./../blog_1_2/render.png'/>
      <p className='blog-img__caption'>Final render.</p>

      <img className='blog-img' src='./../blog_1_2/iso-1.png'/>
      <p className='blog-img__caption'>Isometric render 1.</p>

      <img className='blog-img' src='./../blog_1_2/iso-2.png'/>
      <p className='blog-img__caption'>Isometric render 2.</p>



      <img className='blog-img' src='./../blog_1_2/untitled.png'/>
      <p className='blog-img__caption'>Black and white traditional church architecture.</p>

      <p>
        Churches are fascinating structures. They manipulate light in ways to convey feelings of otherworldliness to reinforce religious beliefs. The architects design the space so that those inside feel as if they’re standing in a holy place. To that end, I also wanted to explore church architecture and design my own. 
      </p>

      <h3 className='blog-subtitle'>1. Studies (WIP)</h3>

      <p>WIP - coming soon!</p>

      <h3 className='blog-subtitle'>2. Process (WIP)</h3>

      <p>WIP - coming soon!</p>

      <h3 className='blog-subtitle'>3. Conclusion (WIP)</h3>

      <p>WIP - coming soon!</p>

    </div>
  )
}