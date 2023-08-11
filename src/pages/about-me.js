export default function About_Me() {
  return (
    <div className="about-me">
      <div className="about-me--column">
        <h3 className="about-me--title">About Me</h3>
        <img className="about-me--img" src="./../senior-pic.JPG"/>
      </div>
      <div className="about-me--column">
        <h2 className="about-me--subtitle">
          a description....
        </h2>
        <hr className='about-me--separator'/>
        <p className="about-me--text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  )
}