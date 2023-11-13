import { HashLink } from 'react-router-hash-link';

export default function Blog_0_3() {
  return (
    <div className="blog-container">

      <h2 className='blog-title'>
        Artist Studies
      </h2>

      <p>
        by <HashLink className='blog-author' to='/blogs/about_me'>Daniel Cho</HashLink> | July 31, 2023
      </p>

      <img className='blog-img' src='./../blog_0_3/3ly study final.png'/>
      <p className='blog-img__caption'>3ly study.</p>

      <img className='blog-img' src='./../blog_0_3/G-Study.png'/>
      <p className='blog-img__caption'>Gliulian study.</p>

      <img className='blog-img' src='./../blog_0_3/3ly.png'/>
      <p className='blog-img__caption'>3ly study.</p>

      <p>
        Beyond just drawing from imagination, I think it’s important to look at works made by other artists. It’s a good way to bring up your own standards and also learn some of their techniques. The rest of the page gives some details on my process of making studies. 
      </p>


      <h3 className='blog-subtitle'>1. 3LY</h3>

      <img className='blog-img' src='./../blog_0_3/Architecture stuff2 progress1.png'/>
      <p className='blog-img__caption'>Progress 1.</p>

      <img className='blog-img' src='./../blog_0_3/Architecture stuff2 progress3.png'/>
      <p className='blog-img__caption'>Progress 2.</p>

      <img className='blog-img' src='./../blog_0_3/Architecture stuff2 progress4.png'/>
      <p className='blog-img__caption'>Progress 3.</p>

      <img className='blog-img' src='./../blog_0_3/Architecture stuff2 progress7.png'/>
      <p className='blog-img__caption'>Progress 4.</p>

      <img className='blog-img' src='./../blog_0_3/Architecture stuff2 progress9.png'/>
      <p className='blog-img__caption'>Progress 5.</p>

      <img className='blog-img' src='./../blog_0_3/3ly study final.png'/>
      <p className='blog-img__caption'>Final.</p>


      <h3 className='blog-subtitle'>2. Gliulian</h3>

      <img className='blog-img' src='./../blog_0_3/G-Study v1.0.png'/>
      <p className='blog-img__caption'>Progress 1.</p>

      <img className='blog-img' src='./../blog_0_3/G-Study.png'/>
      <p className='blog-img__caption'>Final.</p>


      <h3 className='blog-subtitle'>3. 3LY</h3>

      <img className='blog-img' src='./../blog_0_3/3ly.png'/>
      <p className='blog-img__caption'>Final.</p>

    </div>
  )
}