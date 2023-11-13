import { HashLink } from 'react-router-hash-link';

export default function Blog_0_4() {
  return (
    <div className="blog-container">

      <h2 className='blog-title'>
        Marble Studies
      </h2>

      <p>
        by <HashLink className='blog-author' to='/blogs/about_me'>Daniel Cho</HashLink> | July 31, 2023
      </p>

      <div className='blog-centering'>
        <img className='blog-img' src='./../blog_0_4/study-2-3.png'/>
      </div>
      <p className='blog-img__caption'>Study 1.</p>

      {/* <div className='blog-centering'> */}
        <img className='blog-img' src='./../blog_0_4/study-3-3.png'/>
      {/* </div> */}
      
      <p className='blog-img__caption'>Study 2.</p>

      <div className='blog-centering'>
        <img className='blog-img' src='./../blog_0_4/study-4-2.png'/>
      </div>
      
      <p className='blog-img__caption'>Study 3.</p>

      <p>
        When looking at old art, there’s an immense amount of hidden detail. Beyond just muscles and veins, there’s underlying principles of composition and form. And there’s some amount of indescribable likability, similar to something like the rule of thirds. There isn’t much of a justification why, but we’ve found that things that follow the rule of thirds just look nice. I’m sure someone’s put a word or phrase to each of these phenomena by now, but I’d rather an organic approach rather than an academic one. For this reason, I’ve decided to make studies of a series of marble statues. 
      </p>


      <h3 className='blog-subtitle'>Study 1</h3>

      <div className='blog-centering'>
        <img className='blog-img' src='./../blog_0_4/study-2-1.png'/>
      </div>
      <p className='blog-img__caption'>Study 1, progress 1.</p>

      <div className='blog-centering'>
        <img className='blog-img' src='./../blog_0_4/study-2-2.png'/>
      </div>
      <p className='blog-img__caption'>Study 1, progress 2.</p>

      <div className='blog-centering'>
        <img className='blog-img' src='./../blog_0_4/study-2-3.png'/>
      </div>
      <p className='blog-img__caption'>Study 1, final.</p>


      <h3 className='blog-subtitle'>Study 2</h3>

      <img className='blog-img' src='./../blog_0_4/study-3-1.png'/>
      <p className='blog-img__caption'>Study 2, progress 1.</p>

      <img className='blog-img' src='./../blog_0_4/study-3-2.png'/>
      <p className='blog-img__caption'>Study 2, progress 2.</p>

      <img className='blog-img' src='./../blog_0_4/study-3-3.png'/>
      <p className='blog-img__caption'>Study 2, final.</p>


      <h3 className='blog-subtitle'>Study 3</h3>

      <div className='blog-centering'>
        <img className='blog-img' src='./../blog_0_4/study-4-1.png'/>
      </div>
      <p className='blog-img__caption'>Study 3, progress 1.</p>

      <div className='blog-centering'>
        <img className='blog-img' src='./../blog_0_4/study-4-2.png'/>
      </div>
      <p className='blog-img__caption'>Study 3, final.</p>

    </div>
  )
}