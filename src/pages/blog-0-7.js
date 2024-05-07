import { HashLink } from 'react-router-hash-link';

export default function Blog_0_7() {
  return (
    <div className="blog-container">

      <h2 className='blog-title'>
        Scream
      </h2>

      <p>
        by <HashLink className='blog-author' to='/blogs/about_me'>Daniel Cho</HashLink> | May. 7, 2024
      </p>

      <div className='blog-centering'>
        <img className='blog-img' src='./../blog_0_7/scream.png'/>
      </div>
      <p className='blog-img__caption'>Final image.</p>

      <div className='blog-centering'>
        <img className='blog-img' src='./../blog_0_7/scream-concept.png'/>
      </div>
      <p className='blog-img__caption'>Initial Sketch.</p>

      <div className='blog-centering'>
        <img className='blog-img' src='./../blog_0_7/scream-concept-color.png'/>
      </div>
      <p className='blog-img__caption'>Colored Sketch.</p>

    </div>
  )
}