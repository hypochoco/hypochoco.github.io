import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

export default function Blog_1_5() {
  return (
    <div className="blog-container">

      <h2 className='blog-title'>
        Providence Infill
      </h2>

      <p>
        by <HashLink className='blog-author' to='/blogs/about_me'>Daniel Cho</HashLink> | Jan. 9, 2024
      </p>

      <img className='blog-img' src='./../blog_1_5/interior-1-high-res.png'/>
      <p className='blog-img__caption'>Interior 1.</p>

      <img className='blog-img' src='./../blog_1_5/interior-2-high-res.png'/>
      <p className='blog-img__caption'>Interior 2.</p>

      <img className='blog-img' src='./../blog_1_5/elevation.png'/>
      <p className='blog-img__caption'>Elevation.</p>

      <img className='blog-img' src='./../blog_1_5/site-image.jpg'/>
      <p className='blog-img__caption'>Image of site.</p>

      <img className='blog-img' src='./../blog_1_5/new-typologies-roof.png'/>
      <p className='blog-img__caption'>Roof typologies.</p>

      <img className='blog-img' src='./../blog_1_5/new-typologies-store-fronts.png'/>
      <p className='blog-img__caption'>Roof typologies.</p>

      <img className='blog-img' src='./../blog_1_5/plan-1-1.png'/>
      <p className='blog-img__caption'>First floor plan.</p>

      <img className='blog-img' src='./../blog_1_5/plan-2-1.png'/>
      <p className='blog-img__caption'>Second floor plan.</p>

      <img className='blog-img' src='./../blog_1_5/section-1.png'/>
      <p className='blog-img__caption'>Section.</p>

      <h3 className='blog-subtitle'>Description (WIP)</h3>

      <p>coming soon!!</p>




    </div>
  )
}