import React, { useEffect, useState } from 'react';

const Timeline = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        const func = () => {
            const savedData = localStorage.getItem('users');
            if (savedData) {
                setData(JSON.parse(savedData));
            }
        }
        func();
    }, [])

    const filterTimeline = (e) => {
        const savedData = localStorage.getItem('users');
        const historyData = savedData ? JSON.parse(savedData) : [];
        const filterData = historyData.filter(value => value.status === `${e.target.value}`)
        setData(filterData)
    }


    return (
        <div className='w-10/12 mx-auto'>
            <h1 className="p-4 pb-2 text-3xl opacity-60 tracking-wide">Timeline </h1>
            <select className='bg-gray-600 ' onChange={(e) => filterTimeline(e)}>
                <option value="">Select an option</option>
                <option value="Call">Call</option>
                <option value="Text">Text</option>
                <option value="Video">Video</option>
            </select>
            {
                data?.map(value =>
                    <ul className="list bg-base-100 rounded-box shadow-md">

                        <li className="list-row">
                            <div>{value.image}</div>
                            <div>
                                <div>{value.str}</div>
                                <div className="text-xs uppercase font-semibold opacity-60">{value.date}</div>
                            </div>

                        </li>

                    </ul>
                )
            }
        </div>
    );
};

export default Timeline;
