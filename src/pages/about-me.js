export default function About_Me() {
  return (
    <div className="about-me">
      <div className="about-me--column">
        <h3 className="about-me--title">About Me</h3>
        <img className="about-me--img" src="./../senior-pic.JPG"/>
      </div>
      <div className="about-me--column">
        <h2 className="about-me--subtitle">
          My Story
        </h2>
        <hr className='about-me--separator'/>
        <p className="about-me--text">
          I grew up in a suburb of Colorado drawing and solving math problems, which developed into a passion for design and problem solving. In May of 2024, I’ll be graduating with an Sc.B. in Computer Science and Mathematics and an A.B. in Architecture from Brown University. Although these disciplines are seemingly disjoint, I find they’re surprisingly similar in process. Accordingly, this website, to me, is a documentation of that process into curious fields within and adjacent to art, mathematics, and computer science. 
        </p>
        <p>
         And at the end of the day, I hope that the work here can be a kind of stepping stone for others that share similar interests. If anything catches your eye, feel free to reach out, and thanks for visiting!
        </p>
      </div>
    </div>
  )
}