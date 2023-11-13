import { HashLink } from 'react-router-hash-link';

export default function Blog_1_0() {
  return (
    <div className="blog-container">

      <h2 className='blog-title'>
        Traditional Asian Architecture - Rendering
      </h2>

      <p>
        by <HashLink className='blog-author' to='/blogs/about_me'>Daniel Cho</HashLink> | July 31, 2023
      </p>

      <img className='blog-img' src='./../blog_1_0/arch.png'/>
      <p className='blog-img__caption'>Final render.</p>

      <p>
        In this project, there’s no real architecture problem. This is more of an experimentation with Blender and its rendering ability in a pseudo architectural context. Many architecture programs are poorly documented, generally hard to learn, and sometimes quite limited. So, I’ve been trying to learn Blender to get past these problems. And although it, too, has quite a steep learning curve, it’s well documented and is continually updated. Additionally, it also has a quite capable rendering engine. So, it’s presented itself as a great architectural tool, which I’ve been trying to get better at. Accordingly, the goal of this project is to get a better grasp of modeling and rendering in Blender.
      </p>

      <h3 className='blog-subtitle'>1. Process (WIP)</h3>

      <p>
        WIP - process explanation coming soon!
      </p>

      <img className='blog-img' src='./../blog_1_0/progress_0.png'/>
      <p className='blog-img__caption'>Progress 1.</p>

      <img className='blog-img' src='./../blog_1_0/progress_2.png'/>
      <p className='blog-img__caption'>Progress 2.</p>

      <img className='blog-img' src='./../blog_1_0/progress_5.png'/>
      <p className='blog-img__caption'>Progress 3.</p>

      <img className='blog-img' src='./../blog_1_0/progress_6.png'/>
      <p className='blog-img__caption'>Progress 4.</p>

      <img className='blog-img' src='./../blog_1_0/arch.png'/>
      <p className='blog-img__caption'>Final render.</p>

    </div>
  )
}