import { Pie, PieChart, Tooltip } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const Starts = () => {
    return (
        <div className='w-10/12 mx-auto text-gray-400'>
            <h1 className='lg:text-3xl text-xl my-2   '>Friendship Analytics</h1>
            <p>By Interaction Type</p>
            <PieChart className='w-full mx-auto' width={300} height={300} >
                <Pie

                    data={[
                        { name: 'Text', uv: 3, fill: '#0088FE' },
                        { name: 'Call', uv: 5, fill: '#00C49F' },
                        { name: 'Video', uv: 2, fill: '#FFBB28' },
                    ]}
                    dataKey="uv"
                />
                <Tooltip defaultIndex={2} />
                <RechartsDevtools />
            </PieChart >

            <div className='w-full  flex gap-3 justify-center my-5  '>
                <p> <span className='btn btn-circle btn-xs bg-[#0088FE]'></span> Text</p>
                <p>  <span className='btn btn-circle btn-xs bg-[#00C49F]'></span> Call</p>
                <p> <span className='btn btn-circle btn-xs bg-[#FFBB28]'></span> Video</p>
            </div>
            
        </div>
    );
};

export default Starts;