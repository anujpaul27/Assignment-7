
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">KinKeeper</a>
            </div>
            <div className="flex-none">
                <ul className="menu flex gap-2  menu-horizontal px-1">
                    <li><button className='btn btn-outline lg:btn-md md:btn-sm btn-xs  '>Home</button ></li>
                    <li><button className='btn btn-outline lg:btn-md md:btn-sm btn-xs  '>Timeline</button ></li>
                    <li><button className='btn btn-outline lg:btn-md md:btn-sm btn-xs  '>Stats</button ></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;