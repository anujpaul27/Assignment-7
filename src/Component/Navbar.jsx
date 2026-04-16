import { useState } from "react";
import { Link, Links, NavLink } from "react-router";

const Navbar = () => {
    const [active, setActive] = useState('Home');
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <NavLink to={'/'} className="btn btn-ghost text-xl">KinKeeper</NavLink>
            </div>
            <div className="">
                <Link to={'/'}
                    className={`btn lg:btn-md btn-sm  ${active === 'Home' ? 'btn-active btn-primary' : ''}`}
                    onClick={() => setActive('Home')}
                >
                    🏠 Home
                </Link >
                <Link to={'/timeline'}
                    className={`btn lg:btn-md btn-sm  ${active === 'Timeline' ? 'btn-active btn-primary' : ''}`}
                    onClick={() => setActive('Timeline')}
                >
                    📅 Timeline
                </Link >
                <Link to={'/starts'}
                    className={`btn lg:btn-md btn-sm  ${active === 'Starts' ? 'btn-active btn-primary' : ''}`}
                    onClick={() => setActive('Starts')}
                >
                    📈 Starts
                </Link>
            </div>
        </div>
    );
};

export default Navbar;