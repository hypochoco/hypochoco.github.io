import { HashLink } from 'react-router-hash-link';

export default function Blog_2_1() {
  return (
    <div className="blog-container">

      <h2 className='blog-title'>
        Example blog...
      </h2>

      <p>
        by <HashLink className='blog-author' to='/blogs/about_me'>Daniel Cho</HashLink> | July 31, 2023
      </p>

      {/* <img className='blog-img' src='./../blog_2_0/untitled.png'/> */}
      <video className='blog-img' autoPlay muted loop>
        <source src="./blog_2_1/animation_0006.mp4" type="video/mp4"/>
      </video>
      <p className='blog-img__caption'>Caption: thing...</p>

      {/* <video className='blog-img' autoPlay muted loop>
        <source src="./blog_2_1/animation_0007.mp4" type="video/mp4"/>
      </video>
      <p className='blog-img__caption'>Caption: thing...</p> */}

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <h3 className='blog-subtitle'>1. Test</h3>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <h3 className='blog-subtitle'>1. Conclusions</h3>

    </div>
  )
}