import { HashLink } from 'react-router-hash-link';

export default function Blog_1_1() {
  return (
    <div className="blog-container">

      <h2 className='blog-title'>
        Fantasy Project (WIP) - Architecture
      </h2>

      <p>
        by <HashLink className='blog-author' to='/blogs/about_me'>Daniel Cho</HashLink> | July 31, 2023
      </p>

      <img className='blog-img' src='./../blog_1_1/untitled.png'/>
      <p className='blog-img__caption'>Test rendering.</p>

      <p>
        With more realistic sites and constraints, I sometimes wonder what it would be like to design architecture for strange environments. In this project, I present myself with a site of rocky mountains and plan to design a watermill for a town located in this strange site. 
      </p>

      <h3 className='blog-subtitle'>1. Process (WIP)</h3>

      <p>
        WIP - Coming soon!!
      </p>
    </div>
  )
}