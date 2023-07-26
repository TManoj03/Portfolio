import { useState } from 'react';
import './App.css';
import profile from './Assets/emoji.png'
import about__image from './Assets/Manoj2.jpg'
import work1 from './Assets/work-1.png'
import work2 from './Assets/work-2.png'
import work3 from './Assets/work-3.png'
import work4 from './Assets/work-4.png'
import work5 from './Assets/work-5.png'
import work6 from './Assets/work-6.png'


function App() {

    const [isMobileOpen, setIsMobileOpen] = useState(false);
  
    const toggleMobileMenu = () => {
      setIsMobileOpen(!isMobileOpen);
    };
  

  return (
    <div>
      {/* Header */}
      <header className='container header'>
        <nav>
          <ul className='header__menu'>
            <li><a className='header__link' href="#about">About</a></li>
            <li><a className='header__link' href="#works">Works</a></li>
            <li><a className='header__link' href="#contact">Contact</a></li>
            <li className="header__line"></li>
            <li>
              <button className='header__sun'>
                <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" 
                stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </button>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1IpjR9tiTBwx-eItwVCMubpy5zhNJRFWB/view?usp=sharing" target='_blank' className='btn header__resume'>Resume</a>
            </li>
          </ul>
          {
          !isMobileOpen?(
            <button className='header__bars' onClick={toggleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>):(
            <button className='header__bars' onClick={toggleMobileMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" viewBox="0 0 24 24" 
              stroke-width="1.5"
              stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
          </button>
          )
          }
        </nav>
      </header>

      {/* Mobile Nav */}

      <div className={isMobileOpen ? 'clicked-mobile-nav' : 'mobile-nav'}>
        <nav>
          <ul className="mobile-nav-menu">
            <li><a href="#about" className="mobile-nav-link">About</a></li>
            <li><a href="#works" className="mobile-nav-link">Works</a></li>
            <li><a href="#contact" className="mobile-nav-link">Contact</a></li>
            <li className="mobile-nav-line"></li>
            <li>
              <button className='mobile-nav-sun'>
                  <svg xmlns="http://www.w3.org/2000/svg" 
                  fill="none" viewBox="0 0 24 24" 
                  stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" 
                  stroke-linejoin="round" 
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                </button>
            </li>
            <li>
            <a href="https://drive.google.com/file/d/1IpjR9tiTBwx-eItwVCMubpy5zhNJRFWB/view?usp=sharing" target='_blank' className='btn header__resume'>Resume</a>
            </li>
          </ul>
        </nav>
      </div>

      <main>
        {/* Hero Section */}
        <section className='hero container'>
          <img className='hero__img' src={profile} alt="Profile picture" />
          <h2 className='hero__subtitle'>HI,  I'm Manoj ✌️</h2>
          <h1 className='hero__title'>FullStack <br />Web Developer</h1>
          <p className='hero__content'>&emsp;As a passionate <strong>web developer</strong> and <strong>full-stack developer</strong>, I am thrilled to showcase my skills, expertise, and projects that reflect my dedication to creating exceptional web experiences. With a strong foundation in both <strong>front-end </strong>and<strong> back-end</strong> development, I bring a comprehensive approach to building dynamic and user-friendly websites.</p>
          <a href="#contact" className='hero__btn btn'>Reach Out</a>
        </section>

        {/* About Section */}
        <section className='container section' id='about'>
        <h2>About Me</h2>
          <div className='about '>
            <div className='about__left'>
                  <p>
                  &emsp;Hi, I'm <strong>Manoj Kumar</strong>, a passionate web developer with a strong background in computer science. I hold a Master's degree in Computer Applications <strong> (MCA) </strong> and have dedicated myself to honing my skills in <strong>web development</strong>.
                  </p>
                  <h4>Professional Journey</h4>
                  <p>
                  &emsp;My journey as a web developer began during my college years, where I discovered my love for coding and <strong>designing intuitive websites</strong>. Since then, I have been fortunate enough to work on numerous projects, both as a freelancer and as part of a development team.
                  </p>
                  <h4>Expertise</h4>
                  <p>
                  &emsp;With several years of experience under my belt, I specialize in front-end web development, transforming creative designs into interactive and responsive websites. I have a strong command of <strong>HTML, CSS, JavaScript,</strong> and various <strong>front-end frameworks</strong>, ensuring that the websites I build are not only visually appealing but also optimized for performance and user experience.
                  </p>
                  <hr />
                  <h4>Techknowledges</h4>
                  <div className="about__techknowledge">
                    <ul className='about__ul'>
                      <li className='about__list'>Html</li>
                      <li className='about__list'>CSS</li>
                      <li className='about__list'>Java Script</li>
                    </ul>
                    <ul className='about__ul'>
                      <li className='about__list'>React Js</li>
                      <li className='about__list'>Node Js</li>
                      <li className='about__list'>MySql</li>
                    </ul>
                  </div>
            </div>
            <div className='about__right'>
              <img src={about__image} alt="About picture" className='about__image' />
            </div>
          </div>
        </section>

        {/* Personal Work Section */}
        <section className='work section container' id='works'>
          <h2>Personal Works</h2>
          {/* <p> I am proud to showcase a collection of personal projects that represent my passion, creativity, and drive for continuous growth.</p> */}
          <div className="work__img__container">
            <div className='work__img'>
              <a href="http://devcare.rf.gd/?i=1">
                <img src={work1} alt="Hospital Appointment System"  />
              </a>
            </div>
            <div className='work__img'>
              <a href="https://tmanoj03.github.io/Codekaro-nonResponsive/codekaro/">
                <img src={work3} alt="Online Learning Website" />
              </a>
            </div>
            {/* <div className='work__img'>
              <a href="https://infinitumfoods.co.in/">
                <img src={work4} alt="Online meat/Grocery Website" />
              </a>
            </div> */}
            <div className='work__img'>
              <a href="https://pocketbank.netlify.app/">
                <img src={work6} alt="Personal Portfolio" />
              </a>
            </div>
            <div className='work__img'>
              <a href="http://foodcourt.rf.gd/?i=1">
                <img src={work2} alt="Online Food Delivery System" />
              </a>
            </div>
            <div className='work__img'>
              <a href="https://pocketbank.netlify.app/">
                <img src={work5} alt="online Blood Donate Website" />
              </a>
            </div>
          </div>
        </section>

        {/* Project Section */}
        <section className='section container project'>
          <h2>Freelancing Project</h2>
          {/* <p>These projects have allowed me to contribute my skills and expertise to real-world business environments, making a tangible difference in their success.</p> */}
          <div className="project1">
            <div className="project__img flex1">
                <img src={work4} alt="freelancing project" />
            </div>
            <div className="project__content flex1">
              <p>&emsp;"Welcome" to my portfolio! I'm delighted to showcase a recent <strong>freelance project</strong> where I had the opportunity to create a <strong>WordPress website</strong> for a client. This project aimed to establish an online presence for a small business specializing in <strong>Meat/Grocery</strong>. Working closely with the client, I developed a visually captivating website that reflected their brand identity and catered to their target audience.</p>
              <a href="https://infinitumfoods.co.in/" target='_blank' className='btn project__btn'>Visit Site</a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className='contact section container' id='contact'>
          <h2 className='contact__title'>Contact Us</h2>
          <div className="contact__form">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="" autoComplete='off' className='contact__input'/>
            <label htmlFor="email">E-Mail</label>
            <input type="email" name="email" id=""  className='contact__input'/>
            <label htmlFor="Message">Message</label>
            <textarea name="Message" id="Message" cols="40" rows="5" className='contact__textarea'></textarea>
            {/* <button className=' contact__btn'>Send</button> */}
            <a className='contact__btn' href = "mailto:manojk030401@gmail.com">Send</a>
          </div>
        </section>
      </main>
      <footer className='footer section container'>
        <p>Designed and Developed by &copy;Manoj Kumar T - Design Refered by Slaying The Dragon  </p>
      </footer>
    </div>
  );
}

export default App;
