import React, { useState } from 'react';
import { Link } from 'react-router';

const FriendsCard = () => {
    const [Friend, setFriend] = useState([])

    fetch('Friends.json')
        .then(res => res.json())
        .then(data => setFriend(data))


    return (
        <section className='lg:w-10/12 mx-auto lg:my-20 md:my-15 my-10'>
            <h1 className='lg:text-3xl md:text-2xl text-xl mb-2 '>Your Friends </h1>
            {/* Grid */}
            <div className='  grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-y-10 gap-x-10'>
                {
                    Friend.length === 0 ?
                        <div className='text-center col-span-4  '>
                            Friend Not Found!..
                        </div>
                        :
                        // Friends Container 
                        Friend.map(value => (
                            <Link to={`/${value.id}`} key={value.id}>
                                <div className="card lg:w-45 md:w-60 w-full  bg-gray-700  text-center shadow-sm">
                                    <div className="card-body">
                                        <img className='w-15 h-15 object-center  mx-auto rounded-full ring-1 ring-green-600  ' src={value.picture} alt="User photo" />
                                        <p>{value.name}</p>
                                        <p className='text-[8px]'>{value.days_since_contact}d age</p>
                                        <div className='flex flex-col w-1/2 mx-auto gap-1  '>
                                            <p className='badge badge-error badge-sm text-white  '>{value.status}</p>
                                            <p className='badge badge-secondary badge-sm text-white  '>All most</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                }
            </div>
        </section>
    );
};

export default FriendsCard;