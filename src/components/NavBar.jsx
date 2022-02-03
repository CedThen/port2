import React, { useState, useEffect } from 'react';

function NavBar({ refs }) {
  const { homeRef, projRef, aboutRef, wrapRef } = refs

  const [stickyClass, setStickyClass] = useState('absolute');

  useEffect(() => {
    wrapRef.current.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  function stickNavbar(e) {
    // console.log('calling stick navbar,', e);
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 500 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('relative');
    }
  };

  function onHome() {
    console.log('homeRef.current', homeRef.current);
    homeRef.current.scrollIntoView({ behavior: 'smooth' })
    // window.scrollTo(0)
  }

  function onAbout() {
    console.log('aboutRef', aboutRef.current);
    aboutRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      id='navBar'
      className={`bg-darkGrey h-12 fixed top-0 left-50 text-lightGrey w-full text-center flex flex-row justify-evenly md:text-3xl items-center z-10`} >
      <p className='cursor-pointer' onClick={onHome} >Home</p>
      <p className='cursor-pointer' onClick={() => projRef.current.scrollIntoView({ behavior: 'smooth' })} >Projects</p>
      <p className='cursor-pointer' onClick={onAbout}>About Me</p>
    </div>
  )
}

export default NavBar;
