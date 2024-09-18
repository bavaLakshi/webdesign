import React from 'react'
import circle from '../Images/circle-image.png';
import card from '../Images/card.png';
import goal from '../Images/goal.png';
import profit from '../Images/profit.png';
import profit1 from '../Images/down-profit.png';
import sort from '../Images/sort.png';
import bag from '../Images/bag.png';


const Content = () => {
    return (
        <>


<div className="p-2 md:pl-2 md:flex md:flex-col md:items-center md:justify-center">
      
            <div className="flex items-center space-x-2 md:justify-center">
                <img
                    src={circle}
                    alt="Circular Example"
                    className="w-6 h-6 md:w-8 md:h-8 rounded-full lg:hidden object-cover"
                />
                <div className="text-left lg:hidden">
                    <h1 className="text-black font-bold">Good Morning</h1>
                    <h1 className="text-black font-bold">Noor!</h1>
                </div>
                <div className="flex flex-col sm:hidden lg:block md:hidden lg:flex-row lg:items-center lg:justify-between p-2 lg:p-2 xl:p-0">
           

            {/* Choose Account Button */}
            <div className="mt-2 lg:mt-0 hidden sm:block md:hidden lg:flex lg:items-end lg:justify-end xl:justify-between xl:hidden">
<div></div>
  <img
    src={circle}
    alt="Circular Example"
    className="w-6 h-6 md:w-8 md:h-8 lg:w-14 lg:h-14 rounded-full object-cover"
  />
  

  <span className="text-black font-bold text-lg lg:pr-28 lg:mb-4 xl:mb-0">
    Good Morning Noor!
  </span>
  

  <span className="border border-gray-300 bg-zinc-200 rounded p-2 text-black w-40 flex items-center justify-center text-center space-x-2 md:h-12 md:w-36 md:p-1">
    <p className="text-black text-sm">Choose Account</p>
    <img src={sort} className="w-4 h-4" alt="Sort Icon" />
  </span>
  

  <span className="mt-2 flex justify-center sm:hidden md:hidden lg:block lg:pl-4 xl:ml-8">
    <img
      src={card}
      alt="Card"
      className="w-14 h-14 md:w-8 md:h-8 lg:w-14 lg:h-14 rounded"
    />
  </span>
</div>
<div className="flex flex-col sm:flex-row items-center p-1 hidden sm:hidden md:hidden lg:hidden xl:block">
    
      
{/*   
<div className="flex flex-col sm:flex-row items-start p-2 space-y-2 sm:space-y-0 sm:space-x-2  md:pl-10 lg:pl-28 xl:pl-96 xl:justify-between">
  <div className='items-sat'> <img
    src={circle}
    alt="Circular Example"
    className="w-24 h-24 sm:w-14 sm:h-14 rounded-full object-cover"
  />

  <h1 className="text-black font-bold sm:mt-0 sm:ml-2 text-center sm:text-left">
    Good Morning Noor!
  </h1></div>
 
  
 
  <span className="border border-gray-300 bg-zinc-200 rounded-full p-2 text-black w-24 sm:w-32 md:w-56 flex items-center justify-center text-center space-x-2">
    <p className="text-black text-sm sm:text-base">Choose Account</p>
    <img src={sort} alt="Sort Icon" className="w-4 h-4" />
  </span>
  
  
  <img
    src={card}
    alt="Card"
    className="w-6 h-6 sm:w-20 sm:h-20 md:w-10 md:h-10 rounded-full object-cover hidden xl:block"
  />
</div> */}

   <div className="flex flex-col sm:flex-row items-center p-1">
      <img
        src={circle}
        alt="Circular Example"
        className="w-24 h-24 sm:w-14 sm:h-14 rounded-full object-cover"
      />
      <h1 className="text-black font-bold mt-4 sm:mt-0 sm:ml-2 text-center  sm:text-left">
        Good Morning Noor!
      </h1>
      <div className="flex flex-col sm:flex-row items-end p-2 space-y-2 sm:space-y-0 sm:space-x-2 justify-end md:pl-10 lg:pl-28 xl:pl-48">
      <span className="border border-gray-300 bg-zinc-200 rounded-full p-2 text-black w-24 sm:w-32 md:w-56 space-x-4 flex items-center justify-center text-center">
        <p className="text-black text-sm sm:text-base">Choose Account</p>
        <img src={sort} />
      </span>
      <img
        src={card}
        alt="Circular Example"
        className="w-6 h-6 sm:w-20 sm:h-20 md:w-10 md:h-10 rounded-full object-cover"
      />
    </div>
    </div>

    </div>


        </div>
            </div>

      
            <div className="mt-4 flex justify-center md:justify-center lg:hidden">
                <span className="border border-gray-300 bg-zinc-200 rounded p-2 text-black w-40 flex items-center justify-center text-center space-x-2 md:h-12 md:w-36 md:p-1">
                    <p className="text-black text-sm">Choose Account</p>
                    <img src={sort} className="w-4 h-4" alt="Sort Icon" />
                </span>
            </div>

            <div className="mt-4 flex justify-center md:justify-center lg:hidden">
                <img
                    src={card}
                    alt="Card"
                    className="w-14 h-14 md:w-8 md:h-8 rounded"
                />
            </div>
        </div>

<div className="border border-neutral-400 p-2 w-48 md:p-4 md:w-auto h-auto rounded flex flex-col lg:hidden">
 
  <div className="flex items-center justify-center lg:justify-start lg:items-start lg:p-2 lg:mt-8 lg:hidden">
    <img
      src={profit} 
      alt="profit"
      className="w-12 h-12 lg:w-18 lg:h-18 rounded-lg object-cover"
    />
        <span className='md:hidden sm:block hidden'>
      <h1 className="text-gray-400 font-base">Total Earning</h1>
      <p className="text-black font-bold">$12,594.10</p>
    </span>

  </div>

  <div className="flex items-center justify-center p-2 md:p-4 sm:block lg:hidden">
    <div>
      <h1 className="text-gray-400 font-base">Total Earning</h1>
      <p className="text-black font-bold lg:pr-4">$12,594.10</p>
    </div>
  </div>
  <div className='hidden sm:hidden md:hidden lg:block lg:pl-56'>
  <span className="border bg-amber-400 h-48 w-56 text-gray-400 font-bold rounded flex flex-col items-start justify-start p-4">
    <h1 className="text-black text-lg mb-2">Name Card</h1>
    <div className="flex justify-between w-full mb-2">
      <span className="text-black">Noor Hussain</span>
      <span className="text-black">VISA</span>
    </div>
    <span className="inline-block text-black text-base mb-2">.... .... .... 1234</span>
    <div className="flex justify-between text-slate-100 text-sm mb-2">
      <span className="mr-4">Exp Date</span>
      <span>CVV Number</span>
    </div>
    <div className="flex justify-between text-black text-sm">
      <span className="mr-8">12/23</span>
      <span>123</span>
    </div>
  </span>
</div>



  <div className="flex items-center justify-center lg:justify-start lg:items-start">
    <img
      src={goal} 
      alt="goal"
      className="w-12 h-12 rounded-lg object-cover"
    />
     <span className='lg:block lg:pl-2 md:hidden sm:block hidden'>
      <h1 className="text-gray-400 font-base">Goal for this month</h1>
      <p className="text-black font-bold lg:pr-8">$16,494.80</p>
    </span>

  </div>

  <div className="flex items-center justify-center p-2 lg:hidden">
    <div>
      <h1 className="text-gray-400 font-base">Goal for this month</h1>
      <p className="text-black font-bold">$16,494.80</p>
    </div>
    
  </div>


  <div className="border bg-amber-400 text-gray-400 font-bold rounded p-4 flex flex-col items-center space-y-2 md:flex-col lg:hidden">
    <h1 className="text-black text-lg">Name Card</h1>
    <p className="text-black">VISA</p>
    <p className="text-black">Noor Hussain</p>
    <p className="text-black text-base">.... .... .... 1234</p>

    <div className="flex flex-col items-center space-y-1">
      <h2 className="text-slate-400">Exp Date</h2>
      <h2 className="text-black">12/23</h2>
    </div>

    <div className="flex flex-col items-center space-y-1">
      <h2 className="text-black">CVV Number</h2>
      <h2 className="text-black">123</h2>
    </div>
  </div>


  <div className="flex items-center justify-center">
    <img
      src={profit1} 
      alt="profit1"
      className="w-12 h-12 rounded-lg object-cover"
    />
  </div>

  <div className="flex items-center justify-center p-2">
    <div>
      <h1 className="text-gray-400 font-base">Total Spendings</h1>
      <p className="text-black font-bold">$243,594.80</p>
    </div>
  </div>


  <div className="flex items-center justify-center">
    <img
      src={bag} 
      alt="bag"
      className="w-12 h-12 rounded-lg object-cover"
    />
  </div>

  <div className="flex items-center justify-center">
    <div>
      <h1 className="text-gray-400 font-base">Spending Goal</h1>
      <p className="text-black font-bold">$653,594.80</p>
    </div>
  </div>
</div>
{/* new */}
<div className="border border-neutral-400 p-2 w-48 md:p-4 md:w-auto h-auto rounded flex flex-col lg:mt-12">
<div className="hidden lg:flex lg:flex-row lg:space-x-8">


  <div className="flex flex-col space-y-4 lg:w-1/2">
    <div className="flex items-start space-x-4">
      <img
        src={profit}
        alt="profit"
        className="w-24 h-24 rounded-lg object-cover"
      />
      <div className="flex flex-col">
        <h1 className="text-gray-400 font-base">Total Earnings</h1>
        <p className="text-black font-bold">$12,594.10</p>
      </div>
    </div>
    <div className="flex items-start space-x-4">
      <img
        src={goal}
        alt="goal"
        className="w-24 h-24 rounded-lg object-cover"
      />
      <div className="flex flex-col">
        <h1 className="text-gray-400 font-base">Goal for this month</h1>
        <p className="text-black font-bold">$16,494.80</p>
      </div>
    </div>
  </div>

  <span className="border bg-amber-400 h-48  w-56 text-gray-400 font-bold rounded flex flex-col items-start justify-start p-4 lg:w-1/2">
    <h1 className="text-black text-lg mb-2">Name Card</h1>
    <div className="flex justify-between w-full mb-2">
      <span className="text-black">Noor Hussain</span>
      <span className="text-black">VISA</span>
    </div>
    <span className="inline-block text-black text-base mb-2">.... .... .... 1234</span>
    <div className="flex justify-between text-slate-100 text-sm mb-2">
      <span className="mr-4">Exp Date</span>
      <span>CVV Number</span>
    </div>
    <div className="flex justify-between text-black text-sm">
      <span className="mr-8">12/23</span>
      <span>123</span>
    </div>
  </span>
    <div className="flex flex-col space-y-4 lg:w-1/2">
    <div className="flex items-start space-x-4">
      <img
        src={profit1}
        alt="profit1"
        className="w-24 h-24 rounded-lg object-cover"
      />
      <div className="flex flex-col pr-2">
        <h1 className="text-gray-400 font-base">Total Spendings</h1>
        <p className="text-black font-bold">$243,594.80</p>
      </div>
    </div>
    <div className="flex items-start space-x-4">
      <img
        src={bag}
        alt="bag"
        className="w-24 h-24 rounded-lg object-cover"
      />
      <div className="flex flex-col">
        <h1 className="text-gray-400 font-base">Spendings Goal</h1>
        <p className="text-black font-bold">$653,594.80</p>
      </div>
    </div>
  </div>

</div>
</div>

        </>
    )
}

export default Content