import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

export default function Blog_1_6() {
  return (
    <div className="blog-container">

      <h2 className='blog-title'>
        Cener for Performing Arts
      </h2>

      <p>
        by <HashLink className='blog-author' to='/blogs/about_me'>Daniel Cho</HashLink> | Jan. 9, 2024
      </p>

      <img className='blog-img' src='./../blog_1_6/another-exterior-render-1.png'/>
      <p className='blog-img__caption'>Interior 1.</p>

      <img className='blog-img' src='./../blog_1_6/render.png'/>
      <p className='blog-img__caption'>Interior 1.</p>






      <h3 className='blog-subtitle'>Description (WIP)</h3>

      <p>coming soon!!</p>




    </div>
  )
}