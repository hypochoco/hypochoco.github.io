import './App.css';
import './index.css'

import React, { useEffect, useState } from 'react';
import { HashRouter, BrowserRouter, Routes, Route, Outlet, Link, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import Grid from './components/grid'
import Contact from './components/contact';
import About_Me from './pages/about-me';
import NoPage from './pages/no-page';

import Blog_0_0 from './pages/blog-0-0';
import Blog_0_1 from './pages/blog-0-1';
import Blog_0_2 from './pages/blog-0-2';
import Blog_0_3 from './pages/blog-0-3';

import Blog_1_0 from './pages/blog-1-0';
import Blog_1_1 from './pages/blog-1-1';
import Blog_1_2 from './pages/blog-1-2';

import Blog_2_0 from './pages/blog-2-0';
import Blog_2_1 from './pages/blog-2-1';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Footer />}>
          <Route index element={<Main />} />
          <Route path='blogs' element={<BlogNav />}>
            <Route path='about_me' element={<About_Me />} />

            <Route path='blog-0-0' element={<Blog_0_0 />} />
            <Route path='blog-0-1' element={<Blog_0_1 />} />
            <Route path='blog-0-2' element={<Blog_0_2 />} />
            <Route path='blog-0-3' element={<Blog_0_3 />} />

            <Route path='blog-1-0' element={<Blog_1_0 />} />
            <Route path='blog-1-1' element={<Blog_1_1 />} />
            <Route path='blog-1-2' element={<Blog_1_2 />} />

            <Route path='blog-2-0' element={<Blog_2_0 />} />
            <Route path='blog-2-1' element={<Blog_2_1 />} />

          </Route>
          <Route path='*' element={<BlogNav />}>
            <Route path='*' element={<NoPage />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

function BlogNav() {

  const [select, setSelect] = useState(true)

  return (
    <div>
      {/* --- navigation bar --- */}
      <header className='nav-container' id='nav'>
        <div className='blog-nav'>
          <div className='logo'>
            <Link className='logo__link' to='/'>
              <img className='logo__img' src='./../icon.png' alt='Logo Image' />
              <p className='blog-logo__title'>Hypochoco Art</p>
            </Link>
          </div>
          <button onClick={() => {
            setSelect(!select);
          }} className='nav-toggle' aria-label='toggle naviagtion'>
            <span className='hamburger-blog'></span>
          </button> 
          <ul className={'nav__list-blog ' + (select ? 'nav-open-blog' : '')}>
            <li className='blog-nav__item'><HashLink className='nav-item__link' to='/#home'>Home</HashLink></li>
            <li className='blog-nav__item'><HashLink className='nav-item__link' to='/#art'>Art</HashLink></li>
            <li className='blog-nav__item'><HashLink className='nav-item__link' to='/#arch'>Architecture</HashLink></li>
            <li className='blog-nav__item'><HashLink className='nav-item__link' to='/#prog'>Programming</HashLink></li>
            <li className='blog-nav__item'><HashLink className='nav-item__link' to='/#contact'>Contact</HashLink></li>
            <li className='blog-nav__item'><HashLink className='nav-item__link' to='/blogs/about_me#nav'>About Me</HashLink></li>
          </ul>
        </div>
      </header>

      <Outlet />
    </div>
  )
}

function Footer() {
  return (
    <div>
      <Outlet />
      {/* --- footer --- */}
      <footer className='footer'>
        <div className='logo'>
          <HashLink className='logo__link' to='/#home'>
            <img className='logo__img' src='./../icon.png' alt=''/>
            <p className='logo__title'>Hypochoco Art</p>
          </HashLink>
        </div>
        <div className='footer-list-wrapper'>
          <ul className='footer-list'>
            <li className='footer-list__header'>
              Contact
            </li>
            <li className='footer-list__item'>
              <a href='mailto: hypocriticalchoco@gmail.com' className='footer-list__link'>
                hypocriticalchoco@gmail.com
              </a>
            </li>
            <li className='footer-list__item'>
              <a href='tel:7209369354' className='footer-list__link'>
                (720) 936-9354
              </a>
            </li>
          </ul>
            <ul className='footer-list page-links'>
              <li className='footer-list__header'>
                Page links
              </li>
              <li className='footer-list__item'><HashLink to='/#home' className='footer-list__link'>Home</HashLink></li>
              <li className='footer-list__item'><HashLink to='/#art' className='footer-list__link'>Art</HashLink></li>
              <li className='footer-list__item'><HashLink to='/#arch' className='footer-list__link'>Architecture</HashLink></li>
              <li className='footer-list__item'><HashLink to='/#prog' className='footer-list__link'>Programming</HashLink></li>
              <li className='footer-list__item'><HashLink to='/#contact' className='footer-list__link'>Contact</HashLink></li>
              <li className='footer-list__item'><HashLink to='/blogs/about_me#nav' className='footer-list__link'>About Me</HashLink></li>
            </ul>
        </div>
      </footer>
    </div>
  )
}

function Main() {

  const delay = 12000
  const [index, setIndex] = useState(0)

  const slides = [
    './cover-page/arch.png',
    './cover-page/post.png',
    './cover-page/sam.png',
    './cover-page/untitled.png',
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
        setIndex((prevIndex) => prevIndex === slides.length - 1 ? 0 : prevIndex + 1)
      },
      delay
    )
    return () => clearTimeout(timer)
  }, [index])

  const art = {
    items: [
      {title: 'Post Apocalyptic (WIP)', source: './thumbnails-0/thumbnail_0.png', page: '/blogs/blog-0-0'},
      {title: 'Ronin', source: './thumbnails-0/thumbnail_1.png', page: '/blogs/blog-0-1'},
      {title: 'Palace Guards (WIP)', source: './thumbnails-0/thumbnail_2.png', page: '/blogs/blog-0-2'},
      {title: 'Marble Studies', source: './thumbnails-0/thumbnail_4.png', page: '/'},
      {title: 'Artist Studies', source: './thumbnails-0/thumbnail_3.png', page: '/blogs/blog-0-3'},
      {title: 'Coming Soon!', source: './icon.png', page: '/'},
    ]
  }

  const architecture = {
    items: [
      {title: 'Traditional Asian Architecture', source: './thumbnails-1/thumbnail_0.png', page: '/blogs/blog-1-0'},
      {title: 'Fantasy Architecture (WIP)', source: './thumbnails-1/thumbnail_1.png', page: '/blogs/blog-1-1'},
      {title: 'Church (WIP)', source: './thumbnails-1/thumbnail_2.png', page: '/blogs/blog-1-2'},
      {title: 'Coming Soon!', source: './icon.png', page: '/'},
      {title: 'Coming Soon!', source: './icon.png', page: '/'},
      {title: 'Coming Soon!', source: './icon.png', page: '/'},
    ]
  }

  const programming = {
    items: [
      {title: 'Cooperative Pathfinding', source: './thumbnails-2/thumbnail_0.jpg', page: '/blogs/blog-2-0'},
      {title: 'Boids', source: './thumbnails-2/thumbnail_1.png', page: '/blogs/blog-2-1'},
      {title: 'Coming Soon!', source: './icon.png', page: '/'},
      {title: 'Coming Soon!', source: './icon.png', page: '/'},
      {title: 'Coming Soon!', source: './icon.png', page: '/'},
      {title: 'Coming Soon!', source: './icon.png', page: '/'},
    ]
  }

  const [select, setSelect] = useState(true)

  const onTestClick = () => {
    console.log("hit!!");
  }

  return (
    <div>

      {/* --- navigation bar --- */}
      <header className='nav-container'>
        <div className='nav'>
          <div className='logo'>
            <Link className='logo__link' to='/'>
              <img className='logo__img' src='./icon.png' alt='Logo Image' />
              <p className='logo__title'>Hypochoco Art</p>
            </Link>
          </div>
          <button onClick={() => {
            setSelect(!select);
          }} className='nav-toggle ' aria-label='toggle naviagtion'>
            <span className='hamburger'></span>
          </button> 
          <ul className={'nav__list ' + (select ? 'nav-open' : '')}>
            <li className='nav__item'><HashLink className='nav-item__link' to='#home'>Home</HashLink></li>
            <li className='nav__item'><HashLink className='nav-item__link' to='#art'>Art</HashLink></li>
            <li className='nav__item'><HashLink className='nav-item__link' to='#arch'>Architecture</HashLink></li>
            <li className='nav__item'><HashLink className='nav-item__link' to='#prog'>Programming</HashLink></li>
            <li className='nav__item'><HashLink className='nav-item__link' to='#contact'>Contact</HashLink></li>
            <li className='nav__item'><HashLink className='nav-item__link' to='/blogs/about_me#nav'>About Me</HashLink></li>
          </ul>
        </div>
      </header>

      {/* --- slideshow and cover --- */}
      <section className='cover-page-container' id='home'>
        <div className='slideshow'>
          <div className='slideshow__slide'
            style={{ transform: `translate(${-index * 100}%)`}}>
            {slides.map((item, item_number) => {
              return (
                <div key={item_number} className='slide-container'>
                  <img src={item} className='slide'/>
                </div>)
            })}
          </div>
        </div>

        <div className='welcome'>
          Welcome
        </div>

        <div className='slideshowDots'>
          {slides.map((item, item_number) => {
            return (<div key={item_number} className={
                `slideshowDot${index === item_number ? ' active' : ''}`
              } onClick={() => {
                setIndex(item_number);
              }}>
            </div>)
          })}
        </div>

        <HashLink className='scroll-down' to='#quick-about-me'>
          <div>
            SCROLL DOWN
          </div>
          <img className='scroll-down__image' src='./scroll-down.webp'/>
        </HashLink>
      </section>

      {/* --- quick about me --- */}
      <section className='quick-about-me-container' id='quick-about-me'>
        <div className='quick-about-me'>
          <h2 className='section__title'>About Me</h2>
          <img className='section__logo' src='./icon.png' alt='profile picture' />
          <p className='section__text'>
            Hey, thanks for visiting–my name’s Daniel. My work focuses on art, architecture, and computer science. This site contains my recent projects and documents my processes and thoughts. If you at all share a curiosity, feel free to reach out.
          </p>
          <HashLink className='btn' to='/blogs/about_me#nav'>MORE</HashLink>
        </div>
      </section>

      {/* --- portfolio --- */}
      <div className='portfolio-container--blue' id='art'>
        <div className='portfolio__cover-container'>
          <div className='portfolio__cover--text-container'>
            <h2 className='portfolio__cover--title'>Artwork</h2>
            <hr className='portfolio__cover--separator'/>
            <p className='portfolio__cover--text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          
          <div className='portfolio__cover__image-container'>
            <img className='portfolio__cover__image' src='./cover-page/post.png'/> 
          </div>
        </div>
        
        <Grid props={art}/>
      </div>

      <div className='portfolio-container--red' id='arch'>
        <div className='portfolio__cover-container-reverse'>
          <div className='portfolio__cover__image-container'>
            <img className='portfolio__cover__image' src='./cover-page/arch.png'/> 
          </div>

          <div className='portfolio__cover--text-container'>
            <h2 className='portfolio__cover--title'>Architecture</h2>
            <hr className='portfolio__cover--separator'/>
            <p className='portfolio__cover--text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        
        <Grid props={architecture}/>
      </div>

      <div className='portfolio-container--grey' id='prog'>
        



        <div className='portfolio__cover-container'>
          <div className='portfolio__cover--text-container'>
            <h2 className='portfolio__cover--title'>Programming</h2>
            <hr className='portfolio__cover--separator'/>
            <p className='portfolio__cover--text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          
          {/* <div className='portfolio__cover__image-container'>
            <img className='portfolio__cover__image' src='./cover-page/untitled.png'/> 
          </div> */}

          <div className='portfolio__cover__video-container'>

            

            {/* <div className='portfolio__cover__video-container'>

              <div className='portfolio__cover__video--play-container'>
                <div className='portfolio__cover_video--play-text' onClick={onTestClick}>PRESS TO PLAY</div>
              </div>

              <video className='portfolio__cover__video'>
                <source src="./blog_2_0/movie_001.mp4" type="video/mp4"/>
              </video>

            </div> */}
            
            <video className='portfolio__cover__video' autoPlay muted loop>
              <source src="./blog_2_0/movie_001.mp4" type="video/mp4"/>
            </video>

          </div>
        </div>




        
        <Grid props={programming}/>
      </div>

      {/* <div className='portfolio-container--grey' id='prog'>
        <div className='portfolio__cover-container'>
          <div className='portfolio__cover--text-container'>
            <h2 className='portfolio__cover--title'>Programming</h2>
            <hr className='portfolio__cover--separator'/>
            <p className='portfolio__cover--text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          
          <div className='portfolio__cover__image-container'>
            <img className='portfolio__cover__image' src='./cover-page/untitled.png'/> 
          </div>
        </div>
        
        <Grid props={programming}/>
      </div> */}

      {/* --- contact --- */}
      <Contact />

    </div>

  );
}

export default App;
