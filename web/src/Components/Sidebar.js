import React from 'react'
import notification from '../Images/notification.png'
import search from '../Images/search.png'
import barchart from '../Images/bar-chart.png'
import deposit from '../Images/deposit.png'
import arrow from '../Images/arrow.png'
const Sidebar = () => {
  return (
    <>
   
   {/* <div className='h-70'>
  <h1 className='font-xs'>Orizon Crypto</h1>
  <h1 className='font-xs'>Incise Your Sales</h1>

<div className='w-10 h-10 flex items-center justify-center rounded-full bg-white'>
      <img 
        src={search} 
        alt="search" 
        className='w-6 h-6 rounded-full object-cover' 
      />
    </div>
   

    <div className='w-10 h-10 flex items-center justify-center rounded-full bg-white'>
      <img 
        src={notification} 
        alt="Notification Icon" 
        className='w-6 h-6 rounded-full object-cover' 
      />
    </div>
   
   
   <div className="border bg-blue-700 w-28 rounded p-2 flex flex-col items-start space-y-2">
  <h1 className='text-white text-sm'>My Portfolio</h1>
  <h1 className='text-white text-sm font-bold'>$243,594.80</h1>
  <img 
    className='w-8 h-8' 
    src={barchart} 
    alt="Bar Chart" 
  />
  <h4 className='text-white text-sm'>25%</h4>

  <div 
    className='border bg-white text-black text-xs rounded w-18 inline-flex items-center space-x-1 p-1'
    role="button" 
  >
    <img src={deposit} alt="Deposit" className="w-4 h-4" />
    <p className='text-xs'>Deposit</p>
  </div>
  <div 
    className='border bg-white text-black text-xs rounded w-18 inline-flex items-center space-x-1 p-1'
    role="button" 
  >
    <img src={arrow} alt="Deposit" className="w-4 h-4" />
    <p className='text-xs'>Withdrawl</p>
  </div>
  
</div>




  


    

 
    
</div> */}
  
  <div className="p-2 xl:hidden">

  <div className="text-center md:text-left mb-4">
    <h1 className="text-base md:text-lg font-semibold">Orizon Crypto</h1>
    <h1 className="text-base md:text-lg font-semibold">Incise Your Sales</h1>
  </div>

  
  <div className="flex justify-center md:justify-start space-x-4 mb-4">
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
      <img 
        src={search} 
        alt="search" 
        className="w-6 h-6 rounded-full object-cover" 
      />
    </div>
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
      <img 
        src={notification} 
        alt="Notification Icon" 
        className="w-6 h-6 rounded-full object-cover" 
      />
    </div>
  </div>

  <div className="border bg-blue-700 rounded flex flex-col space-y-4 md:items-center justify-center xl:hidden">
    <h1 className="text-white text-sm md:text-lg font-semibold">My Portfolio</h1>
    <h1 className="text-white text-sm md:text-lg font-bold">$243,594.80</h1>
    <img 
      className="w-8 h-8 md:w-12 md:h-12" 
      src={barchart} 
      alt="Bar Chart" 
    />
    <h4 className="text-white text-sm md:text-base">25%</h4>

    <div className="flex flex-col md:flex-row md:space-x-4">
    <div 
        className="border bg-white text-black text-xs rounded w-18 mb-4 inline-flex items-center space-x-1 p-1"
        role="button" 
      >
        <img src={deposit} alt="Withdraw" className="w-4 h-4" />
        <p className="text-xs">Deposit</p>
      </div>
      <div 
        className="border bg-white text-black text-xs rounded w-18 mb-4 inline-flex items-center space-x-1 p-1"
        role="button" 
      >
        <img src={arrow} alt="Withdraw" className="w-4 h-4" />
        <p className="text-xs">Withdraw</p>
      </div>
    </div>
  </div>
</div>
<div className='hidden xl:block'>
   <span className='flex justify-between items-center w-full'>
  <h1 className='font-bold'>Orizon Crypto</h1>
  <div className='flex space-x-2'>
    <span className='w-10 h-10 flex items-center justify-center rounded-full bg-white'>
      <img 
        src={search} 
        alt="Search Icon" 
        className='w-6 h-6 rounded-full object-cover' 
      />
    </span>
    <span className='w-10 h-10 flex items-center justify-center rounded-full bg-white'>
      <img 
        src={notification} 
        alt="Notification Icon" 
        className='w-6 h-6 rounded-full object-cover' 
      />
    </span>
  </div>
</span>



    <div><h1 className='flex items-start text-sm text-slate-400'>
      insice Your Sales</h1>
      <br/>
      <div className="border border-neutral-400 bg-blue-700 h-32 rounded md:p-4 flex flex-col items-start">
  <div className="flex justify-between items-start w-full">
    <span className="flex flex-col">
      <h1 className='text-white text-sm md:text-lg mb-2'>My Portfolio</h1>
      <h1 className='text-white text-sm md:text-lg'>$243,594.80</h1>
    </span>
    <span className="flex flex-col items-end">
      <div className="flex flex-col items-center">
        <img 
          className='w-8 h-8 mb-2' 
          src={barchart} 
          alt="Bar Chart" 
        />
        <h1 className='text-white text-sm md:text-lg'>$243,594.80</h1>
      </div>
    </span>
  </div>
  <div className='p-4 pl-14'>
  <span 
    className='border bg-white text-black p-2 rounded inline-flex items-center cursor-pointer mr-4'
    role="button" 
    tabIndex={0}
  >
    <img src={deposit} alt="Deposit" className='mr-2' />
    Deposit
  </span>

  <span 
    className='border bg-white text-black p-2 rounded inline-flex items-center cursor-pointer'
    role="button" 
    tabIndex={0}
  >
    <img src={arrow} alt="Deposit" className='mr-2' />
    Withdraw
  </span>
</div>


</div>



</div>

 
    
</div>



</>
  )
}

export default Sidebar