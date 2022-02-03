import React from 'react';

function ProjectCard({ item }) {
  const { title, description, description2, github, graphic, link, stack } = item
  return (
    <div className='w-full h-64  flex flex-row m-5 p-5 shadow-md'>
      <div className='w-96 h-full flex justify-center items-center p-5' >
        <img src={graphic} alt='' className='cursor-pointer' />
      </div>
      <div className='flex flex-col w-3/5'>
        <div className='text-center text-2xl pb-5'>{title}</div>
        <div className='text-xl'>{description} {description2}</div>
        <div></div>
      </div>
    </div>);
}

export default ProjectCard;
