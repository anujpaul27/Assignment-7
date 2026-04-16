import React from 'react';

const Hero = () => {
    return (
        <div className='w-10/12 mx-auto text-center   '>

            {/* Hero Text Section */}
            <div className='lg:my-20 md:my-15 my-10'>
                <h1 className='text-3xl my-2 '>Friend to keep close in your life</h1>
                <p className='text-sm '>Your personal shelf of meaningful connection. Browser tend,nurture the realationship that most metter </p>
                <button className='btn btn-success my-2  '>Add Friend </button>
            </div>

            {/* Four Card Section */}
            <div className='flex justify-between lg:my-20 md:my-15 my-10 '>
                <div className='w-1/5  h-20 bg-gray-700 rounded-md text-gray-300  items-center py-2  '>
                    <h1 className='text-xl '>10</h1>
                    <p className='text-sm'>Total Friends </p>
                </div>
                <div className='w-1/5  h-20 bg-gray-700 rounded-md py-2 text-gray-300   text-center'>
                    <h1 className='text-xl '>3</h1>
                    <p className='text-sm'>On Track </p>
                </div>
                <div className='w-1/5  h-20 bg-gray-700 rounded-md py-2 text-gray-300   text-center'>
                    <h1 className='text-xl '>9</h1>
                    <p className='text-sm'> Need Attention  </p>
                </div>
                <div className='w-1/5  h-20 bg-gray-700 rounded-md py-2 text-gray-300   text-center'>
                    <h1 className='text-xl '>12</h1>
                    <p className='text-sm'>Interactions this month </p>
                </div>
            </div>

        </div>
    );
};

export default Hero;