import { HashLink } from 'react-router-hash-link';

export default function Blog_0_6() {
  return (
    <div className="blog-container">

      <h2 className='blog-title'>
        Still Life
      </h2>

      <p>
        by <HashLink className='blog-author' to='/blogs/about_me'>Daniel Cho</HashLink> | May. 7, 2024
      </p>

      <div className='blog-centering'>
        <img className='blog-img' src='./../blog_0_6/sketch-composition-1.png'/>
      </div>
      <p className='blog-img__caption'>Sketch Composition.</p>

      <div className='blog-centering'>
        <img className='blog-img' src='./../blog_0_6/still-life-comp-2.png'/>
      </div>
      <p className='blog-img__caption'>Still Life Composition 1.</p>

      <div className='blog-centering'>
        <img className='blog-img' src='./../blog_0_6/still-life-comp-6.png'/>
      </div>
      <p className='blog-img__caption'>Still Life Composition 2.</p>

      <div className='blog-centering'>
        <img className='blog-img' src='./../blog_0_6/still-life-v1.png'/>
      </div>
      <p className='blog-img__caption'>Final Image.</p>

    </div>
  )
}