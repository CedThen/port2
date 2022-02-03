import './app.css'
import { data, graphics, AboutMeContent } from './Data'
import ProjectCard from './components/ProjectCard';
import React, { useRef } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import profPic from './assets/profPic.jpg'

function App() {

  const wrapRef = useRef()
  const projRef = useRef();
  const aboutRef = useRef();
  const homeRef = useRef();

  return (
    <div className='root' >
      <div ref={homeRef} className='h-1'></div>
      <NavBar refs={{ projRef, aboutRef, homeRef, wrapRef }} />
      <div className="wrapper" ref={wrapRef}>
        <Header />

      </div>
      <section className='bg-darkBlue sepia-[.2] py-40'>
        <div className='bg-lightGrey w-full md:w-2/3 mx-auto '>
          <div className='text:2xl md:text-6xl text-titleBlue text-center font-bold italic py-10 pt-20' ref={projRef}>
            Projects
          </div>
          <div className='w-3/4 mx-auto'>
            {data.map((item, index) => <ProjectCard item={item} key={index} />)}
          </div>
          <br />
          <div className='text:2xl md:text-6xl text-titleBlue text-center font-bold italic py-10 pt-20' ref={aboutRef}>
            About Me
          </div>
          <div className='w-3/4 mx-auto flex justify-center items-center flex-col pb-40'>
            <div className='h-[64] w-[300px] flex justify-center items-center '>
              <img src={profPic} alt='' className='w-[300px] h-auto rounded-full border' />
            </div>
            <p>Hi! Welcome to my portfolio.</p>
            <p>I'm a full stack web developer with a passion for making things work. That moment when everything comes together and runs smoothly - that is why I climb mountains.</p>

          </div>
        </div>

      </section>
    </div>
  );
}

export default App;
