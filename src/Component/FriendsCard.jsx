import React, { useState } from 'react';
import { Link } from 'react-router';

const FriendsCard = () => {
    const [Friend, setFriend] = useState([])
    const [loading, setLoading] = useState(true)

    fetch('Friends.json')
        .then(res => res.json())
        .then(data => {
            setFriend(data);
            setLoading(false)
        })
        .catch(error => console.log(error.message))

    const showTag = (ar) => {
        return ar.map((value, index) => (
            <p key={index} className='badge badge-secondary badge-xs text-white'>
                {value}
            </p>
        ));
    };



    return (
        <div>
            {
                loading ?
                    <div class="flex h-screen w-full items-center justify-center">
                        <span class="loading loading-spinner loading-lg"></span>
                    </div>
                    :
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
                                                    <div className=' w-1/2 mx-auto   '>
                                                        <p className={`badge ${value.status === 'current' ? 'badge-error' : 'badge-primary'} badge-sm text-white`}>{value?.status}</p>
                                                    </div>
                                                        <div className='flex gap-1 '>
                                                            {showTag(value?.tags)}
                                                        </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                            }
                        </div>
                    </section>
            }
        </div>
    );
};

export default FriendsCard;