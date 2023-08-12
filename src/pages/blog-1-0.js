import { HashLink } from 'react-router-hash-link';

export default function Blog_1_0() {
  return (
    <div className="blog-container">

      <h2 className='blog-title'>
        Example blog...
      </h2>

      <p>
        by <HashLink className='blog-author' to='/blogs/about_me'>Daniel Cho</HashLink> | July 31, 2023
      </p>

      <img className='blog-img' src='./../blog_1_0/arch.png'/>
      <p className='blog-img__caption'>Caption: thing...</p>

      <img className='blog-img' src='./../blog_1_0/progress_0.png'/>
      <p className='blog-img__caption'>Caption: thing...</p>

      <img className='blog-img' src='./../blog_1_0/progress_2.png'/>
      <p className='blog-img__caption'>Caption: thing...</p>

      <img className='blog-img' src='./../blog_1_0/progress_5.png'/>
      <p className='blog-img__caption'>Caption: thing...</p>

      <img className='blog-img' src='./../blog_1_0/progress_6.png'/>
      <p className='blog-img__caption'>Caption: thing...</p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <h3 className='blog-subtitle'>1. Test</h3>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  )
}