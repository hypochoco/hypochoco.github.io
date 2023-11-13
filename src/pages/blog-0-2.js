import { HashLink } from 'react-router-hash-link';

export default function Blog_0_2() {
  return (
    <div className="blog-container">

      <h2 className='blog-title'>
        Palace Guards - Concept
      </h2>

      <p>
        by <HashLink className='blog-author' to='/blogs/about_me'>Daniel Cho</HashLink> | July 31, 2023
      </p>

      <p>
        Currently this project is a work in progress. I started his idea sometime in highschool, and I wanted to revisit it. At the moment, though, I haven’t had the time to work on this. 
      </p>

      <img className='blog-img' src='./../blog_0_2/pgsv0.png'/>
      <p className='blog-img__caption'>Current state of the project.</p>

      <img className='blog-img' src='./../blog_0_2/old-palace-guards.png'/>
      <p className='blog-img__caption'>Old state.</p>

    </div>
  )
}