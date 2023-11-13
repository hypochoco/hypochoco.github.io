import { HashLink } from 'react-router-hash-link';

export default function Blog_0_5() {
  return (
    <div className="blog-container">

      <h2 className='blog-title'>
        Tiger and Snake - Illustration
      </h2>

      <p>
        by <HashLink className='blog-author' to='/blogs/about_me'>Daniel Cho</HashLink> | Nov. 7, 2023
      </p>

      <div className='blog-centering'>
        <img className='blog-img' src='./../blog_0_5/1-3-wip-final.png'/>
      </div>
      <p className='blog-img__caption'>Final image.</p>

      <p>
        I started this painting in my final year of undergrad. I was busy with school and work, so much so that it'd been a little over a year since I last made a painting, which was a bit unnerving. I thought that by this point, I’d have forgotten how to draw. And I was afraid that I would end up wasting my time trying. 
      </p>

      <p>
        When I finished this, though, I remembered that despite feeling inadequate, it was never about competency.
      </p>

      <p>
        After entering college, I sometimes find myself steering clear of things I once liked after seeing someone else do it–because trying meant presenting, presenting meant comparing, and comparing meant competing, and I didn’t want the vulnerabilities of competition. But at the end of the day, it’s not something that should hold someone back from doing what they like doing.
      </p>

      
      <h3 className='blog-subtitle'>1. Process</h3>

      <p>
        When I started this, I was indeed rusty, but I could still manage to put down lines where I wanted and stumbled my way through the anatomy. In this sketching phase, I made sure to pay special attention to proportions and gesture–small mistakes now would take hours to fix later after I start the rendering process.
      </p>

      <div className='blog-centering'>
        <img className='blog-img' src='./../blog_0_5/1-0-sketch.png'/>
      </div>
      <p className='blog-img__caption'>Base sketch.</p>

      <p>
        At this point, I throw in some colors and mix them around until I find something that looks right. I would love to throw in some mumbo jumbo about color theory, but frankly I’m not any good at it yet. For now, though, I’ve found that putting down a primary, secondary, and a few highlight colors give decent results. Further, it also seems to work well when the primary color is a shade of red, green, or blue. 
      </p>

      <div className='blog-centering'>
        <img className='blog-img' src='./../blog_0_5/1-0-base-colors.png'/>
      </div>
      <p className='blog-img__caption'>Base colors.</p>

      <p>
        I initially had a vision for a lion or a tiger on the side and flowers on the other, but it felt quite unbalanced. So, I decided to add a snake to the other side. In hindsight, though, this was lazily done. I definitely could have tried more compositions with these two subjects and found something that worked better. But at the time, I didn’t think too much of it and continued the painting. 
      </p>

      <div className='blog-centering'>
        <img className='blog-img' src='./../blog_0_5/1-0-final-sketch.png'/>
      </div>
      <p className='blog-img__caption'>Final sketch.</p>

      <p>
        At this point, I start the rendering process. The current image sits around 1500x1000 pixels, which is not enough for details. So, I increased the image to 3500x4200 pixels. The reason I start the image at a relatively small size is because it’s both faster on a laptop and prevents me from getting lost in the details. 
      </p>

      <p>
        After resizing the image, I darken it using the photoshop levels adjustment and then mask out parts that’ll receive the most light.
      </p>

      <div className='blog-centering'>
        <img className='blog-img' src='./../blog_0_5/1-1-lighting-pass.png'/>
      </div>
      <p className='blog-img__caption'>Lighting pass.</p>
      
      <p>
        After making these final, broad adjustments, it’s time to work on finer details. Around hard transitions between light and shadow, I add saturated borders to mimic an effect found in real lighting. This phenomenon is well explained by Marco Bucci in his video series “10 Minutes to Better Painting,” specifically the video on color harmony. After making these effects and other small lighting fixes, I move on to rendering the face, the most important feature of this painting. It’s located at the center of the image and all other elements converge toward the face. So, it’s important to get this and the hands right. Generally, the audience is lenient when these features are believable–even if other portions of the image are incorrect or missing. It’s generally overlooked as long as these are done well.
      </p>

      <div className='blog-centering'>
        <img className='blog-img' src='./../blog_0_5/1-1-first-rendering-pass.png'/>
      </div>
      <p className='blog-img__caption'>First rendering pass.</p>

      <p>
        Here, I take a step back and look at the painting as a whole. And it’s almost there, but something’s not quite right. The face looks too masculine when viewed in conjunction with the muscular arms. Even further, the neck is ever so slightly longer than it should be. So, I try making the facial features more feminine by rounding the cheekbones and the jaw. I also lower the head a little to make the neck more believable. 
      </p>

      <div className='blog-centering'>
        <img className='blog-img' src='./../blog_0_5/1-3-improved-facial-features.png'/>
      </div>
      <p className='blog-img__caption'>Improved facial features and anatomy.</p>

      <p>
        Once I was happy with the face, I started working on the neck and chest. I make a first pass, but it doesn’t quite fit how I rendered the face. The colors are too warm and the shadows almost look dirty. So, I try again with this in mind. In hindsight, it’s probably best to do all the skin features at the same time to avoid this issue.
      </p>

      <div className='blog-centering'>
        <img className='blog-img' src='./../blog_0_5/1-3-anatomy-struggles.png'/>
      </div>
      <p className='blog-img__caption'>Anatomy struggles.</p>

      <p>
        Finally, I make a few edits to the snake and tiger to bring the image to a close. Although I stopped working on the image, it is nowhere near done. The arms, hands, sword, tiger, snake, etc. are all almost untouched and lacking in the level of detail I put into the face and chest. However, I’ve run out of time I can spend on this for now, and maybe another year or so down the line, I’ll pick this back up. 
      </p>

      <div className='blog-centering'>
        <img className='blog-img' src='./../blog_0_5/1-3-wip-final.png'/>
      </div>
      <p className='blog-img__caption'>Final image.</p>


      <h3 className='blog-subtitle'>2. Conclusion</h3>

      <p>
        As a final note, I think it’s important to show the works I took inspiration from during the making of this image. My references range from classics by Peter Paul Rubens and Michelangelo to more modern works like album covers and AI generated images. Hopefully, showing these images won't get me in any trouble with copyright laws.
      </p>

      <img className='blog-img' src='./../blog_0_5/mood-board.png'/>
      <p className='blog-img__caption'>Images referenced for this project.</p>

    </div>
  )
}