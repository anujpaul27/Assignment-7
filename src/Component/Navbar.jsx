import { Link, Links } from "react-router";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">KinKeeper</a>
            </div>
            <div className="flex-none">
                <ul className="menu flex gap-2  menu-horizontal px-1">
                    <li><Link to={'/'} className='btn btn-outline lg:btn-md md:btn-sm btn-xs  '>Home</Link  ></li>
                    <li><Link to={'/timeline'} className='btn btn-outline lg:btn-md md:btn-sm btn-xs  '>Timeline</Link  ></li>
                    <li><button className='btn btn-outline lg:btn-md md:btn-sm btn-xs  '>Stats</button ></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;