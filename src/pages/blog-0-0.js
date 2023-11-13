import { HashLink } from 'react-router-hash-link';

export default function Blog_0_0() {
  return (
    <div className="blog-container">

      <h2 className='blog-title'>
        Post Apocalyptic - Illustration
      </h2>

      <p>
        by <HashLink className='blog-author' to='/blogs/about_me'>Daniel Cho</HashLink> | July 31, 2023
      </p>

      <p>
        This project is currently a work in progress. In the most recent attempt, I used Blender to get a basic massing of the original idea and then go over with photoshop to make the rest of the image. However, as I’ve tried to render more and more, I don’t feel like I currently have the technical ability to make the project how I wanted. So, instead I’ll try to spend more time in Blender to construct the scene, and then do some minor work in Photoshop to finish the image. But this, of course, means that I have to learn Blender and figure out how to make a scene like this, a fairly time-consuming task. Until then, here are a few old attempts. 
      </p>

      <img className='blog-img' src='./../blog_0_0/post.png'/>
      <p className='blog-img__caption'>Current progress.</p>

      <img className='blog-img' src='./../blog_0_0/BetterBase.png'/>
      <p className='blog-img__caption'>Blender massing model.</p>


      <h3 className='blog-subtitle'>1. Old Attempts</h3>
      <img className='blog-img' src='./../blog_0_0/really-old.jpg'/>
      <p className='blog-img__caption'>Original attempt.</p>


    </div>
  )
}