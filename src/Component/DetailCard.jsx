import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const DetailCard = () => {
    const [friends, setFriends] = useState([])
    const { details_friend } = useParams()
    useEffect(() => {
        fetch('Friends.json')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])


    const CallSave = (e) => {
        const obj = {
            image: '📞',
            str: `Call with ${e.name}`,
            date: 'March 19, 2026'
        };

        const data = localStorage.getItem('users');
        const usersArray = data ? JSON.parse(data) : [];
        usersArray.push(obj);
        localStorage.setItem('users', JSON.stringify(usersArray));
    };

    const TextSave = (e) => {
        const obj = {
            image: '💬',
            str: `Text with ${e.name}`,
            date: 'April 20, 2026'
        };

        const data = localStorage.getItem('users');
        const usersArray = data ? JSON.parse(data) : [];
        usersArray.push(obj);
        localStorage.setItem('users', JSON.stringify(usersArray));
    };

    const VideoSave = (e) => {
        const obj = {
            image: '📹',
            str: `Video with ${e.name}`,
            date: 'April 20, 2026'
        };

        const data = localStorage.getItem('users');
        const usersArray = data ? JSON.parse(data) : [];
        usersArray.push(obj);
        localStorage.setItem('users', JSON.stringify(usersArray));
    };


    return (
        <div className="p-8 bg-base-100  min-h-screen font-sans">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4  mx-auto">

                {/* Left Column */}
                <div className="flex flex-col gap-4">
                    <div className="card bg-gray-700  shadow-sm  p-6 text-center">
                        <div className="avatar justify-center mb-4">
                            <div className="w-24 rounded-full ring-1 ring-green-600 ">
                                <img src={friends[details_friend]?.picture} alt="User Name " />
                            </div>
                        </div>
                        <h2 className="text-xl font-bold">{(friends[details_friend]?.name)}</h2>
                        <div className="flex justify-center gap-2 my-2">
                            <div className="badge badge-error badge-sm text-white">{friends[details_friend]?.status}</div>
                            <div className="badge badge-success badge-outline badge-sm">FAMILY</div>
                        </div>
                        <p className="italic text-base-content/70 text-sm">"{friends[details_friend]?.bio}"</p>
                        <p className="text-xs mt-2 "> {friends[details_friend]?.email}</p>
                    </div>

                    <div className="flex flex-col gap-2 text-center ">
                        <button className="btn btn-ghost bg-gray-700  border-base-300  ">
                            <span className="mr-2">⏰</span> Snooze 2 Weeks
                        </button>
                        <button className="btn btn-ghost bg-gray-700  border-base-300  ">
                            <span className="mr-2">🗄️</span> Archive
                        </button>
                        <button className="btn btn-ghost bg-gray-700  border-base-300 text-error  ">
                            <span className="mr-2">🗑️</span> Delete
                        </button>
                    </div>
                </div>

                {/* Right side  */}
                <div className="md:col-span-2 flex flex-col gap-4">

                    <div className="grid grid-cols-3 gap-4">
                        <div className="card bg-gray-700   p-4 text-center">
                            <div className="text-2xl font-bold">{friends[details_friend]?.days_since_contact}</div>
                            <div className="text-[10px] ">Days Since Contact</div>
                        </div>
                        <div className="card bg-gray-700   p-4 text-center">
                            <div className="text-2xl font-bold">{friends[details_friend]?.goal}</div>
                            <div className="text-[10px] ">Goal (Days)</div>
                        </div>
                        <div className="card bg-gray-700   p-4 text-center text-success">
                            <div className="text-xl font-bold">{friends[details_friend]?.next_due_date}</div>
                            <div className="text-[10px]  text-base-content">Next Due</div>
                        </div>
                    </div>

                    {/* Relationship Goal Section */}
                    <div className="card bg-gray-700   p-6">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="font-semibold text-base-content/80">Relationship Goal</h3>
                            <button className="btn btn-ghost btn-xs ">Edit</button>
                        </div>
                        <p className="text-sm">Connect every <span className="font-bold">{friends[details_friend]?.goal} days</span></p>
                    </div>

                    {/* Quick Check  Section */}
                    <div className="card bg-gray-700   p-6">
                        <h3 className="font-semibold mb-4 text-base-content/80">Quick Check-In</h3>
                        <div className="grid grid-cols-3 gap-4">
                            <button onClick={() => CallSave(friends[details_friend])} className="btn btn-ghost bg-gray-700  flex flex-col h-20 ">
                                <p className="text-xl">📞</p>
                                <p className="text-xs">Call</p>
                            </button>
                            <button onClick={() => TextSave(friends[details_friend])} className="btn btn-ghost bg-gray-700  flex flex-col h-20 ">
                                <p className="text-xl">💬</p>
                                <p className="text-xs">Text</p>
                            </button>
                            <button onClick={() => VideoSave(friends[details_friend])} className="btn btn-ghost bg-gray-700  flex flex-col h-20 ">
                                <p className="text-xl">📹</p>
                                <p className="text-xs">Video</p>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailCard;
