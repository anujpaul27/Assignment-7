import React, { useState } from 'react';

const FriendsCard = () => {
    const [Friend, setFriend] = useState([])

    fetch('Friends.json')
        .then(res => res.json())
        .then(data => setFriend(data))


    return (
        <section className='w-10/12 mx-auto'>
            <h1 className='text-3xl mb-2 '>Your Friends </h1>
            <div className='  grid grid-cols-4 gap-y-10'>
                {
                    Friend.length===0 ?
                        <div className='text-center col-span-4  '>
                            Friend Not Found!..
                        </div>
                        :
                        Friend.map(value => (
                            <div className="card bg-base-100 lg:w-40 md:w-60 w-full  border border-2-white   shadow-sm">
                                <div className="card-body">
                                    <img className='w-10 h-10 mx-auto rounded-full ' src={value.picture} alt="User photo" />
                                    <div>
                                        <p>{value.name}</p>
                                        <p className='text-[8px]'>62d age</p>
                                        <p className='text-xs bg-fuchsia-300  '>work</p>
                                        <p className='text-xs bg-fuchsia-300  '>all most</p>
                                    </div>


                                </div>
                            </div>
                        ))
                }
            </div>
        </section>
    );
};

export default FriendsCard;