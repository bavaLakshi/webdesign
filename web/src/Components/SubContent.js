import React from 'react'
import globe from '../Images/earth-globe.png'
import home from '../Images/home.png'
import person from '../Images/user.png'
import message from '../Images/message.png'
import gear from '../Images/gear.png'
import right from '../Images/RightArrow.png'
import star from '../Images/star.png'
import time from '../Images/time.png'
import  updown from '../Images/up-down.png'
const SubContent = () => {
  return (
   
    <>
    {/* <div className='pl-2'>  <span className='w-10 h-10 flex items-center justify-center rounded-full bg-blue-600'>
    <img 
      src={globe} 
      alt="Notification Icon" 
      className='w-6 h-6 rounded-full object-cover' 
    />


  </span>
  <div className='p-2'>  <img 
      src={home} 
      alt="Notification Icon" 
      className='w-8 h-8 rounded-full object-cover' 
    /></div>
</div> */}
<div className='flex flex-col items-center'>
  <span className='md:w-10 md:h-10 flex items-center justify-center rounded-full bg-blue-600'>
    <img 
      src={globe} 
      alt="Globe Icon" 
      className='w-4 h-4 md:w-6 md:h-6 rounded-full object-cover'
    />
  </span>

</div>
<div className='p-2 md:ml-9 mt-4 md:mt-8 mb-2'>
    <img 
      src={home} 
      alt="Home Icon" 
      className='w-6 h-6 md:w-8 md:h-8'
    />
   
  </div>
  <div className='p-2 md:p-4 md:ml-9 mt-4 md:mt-8  md:mt-0'>
    <img 
      src={person} 
      alt="HPerson" 
      className='w-6 h-6 rounded-full object-cover'
    />
   
  </div>
  <div className='p-2  md:p-4 md:ml-9 mt-4 md:mt-8  md:mt-0'>
  <img 
  src={message} 
  alt="Person" 
  className='w-6 h-6' 
/>
  </div>
  <div className='p-2 md:p-4 md:ml-9  mt-4 md:mt-8 md:mt-0'>
  <img 
  src={gear} 
  alt="Person" 
  className='w-6 h-6' 
/>
  </div>
  <div className='p-2 md:p-4 md:ml-9  mt-4 md:mt-8  md:mt-0'>
  <img 
  src={right} 
  alt="right" 
  className='w-8 h-8' 
/>
  </div>
  <div className='p-2 md:p-4 md:ml-9  mt-4 md:mt-8  md:mt-0'>
  <img 
  src={star} 
  alt="right" 
  className='w-6 h-6' 
/>
  </div>
  <div className='p-2 md:p-4 md:ml-9 mt-4 md:mt-8 mb-2  md:mt-0'>
  <img 
  src={time} 
  alt="right" 
  className='w-6 h-6' 
/>
  </div>
  <div className='p-2 md:p-4 md:ml-9 mt-4 md:mt-8 md:mt-0'>
  <img 
  src={updown} 
  alt="right" 
  className='w-6 h-6' 
/>
  </div>
</>
  )
}

export default SubContent