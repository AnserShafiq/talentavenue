import React from 'react'
import I1 from '../../../Images/Home/Home-1.jpg'
import UL from '../../../Images/underlineCurve2.png'

const HS1 = () => {
  return (
    <div className='flex flex-col items-center relative'>
        <img src={I1} className=' min-h-[500px] lg:min-h-[770px]' alt='Talent Avenue - Home 1' />
        <div className='flex flex-col items-center absolute w-[85%] px-[5%] py-[2%] bottom-[5%] bg-[#303030AD] rounded-[20px]'> 
            <h3 className='text-w-1 text-[45px] leading-tight capitalize font-semibold'>Want to build a positive workplace for productivity?</h3>
            <h4 className='text-w-1 text-[35px] flex leading-tight uppercase font-semibold tracking-wide'>Click Here  
              <div className='ml-2 flex flex-col items-center '>
                <span className='font-bold leading-tight text-g-1 cursor-pointer'>
                  To Find Talent !!!
                  <img className='absolute -mt-1' src={UL} alt='Special Underlining two' />
                </span>
              </div>
              </h4>
        </div>
    </div>
  )
}

export default HS1