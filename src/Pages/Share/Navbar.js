import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import useLap from '../../assets/useLap.png';
import { AuthContext } from '../../Context/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logOut();
        toast.success(' successfully Logout');
        navigate('/');
    };
    return (
        <div className="bg-[#055C7A] shadow-lg sticky top-0 h-16 z-50">
            <div className="navbar container">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost lg:hidden text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <div className="mx-auto">
                            <ul
                                tabIndex={0}
                                className="menu menu-compact dropdown-content mt-5 p-2 shadow absolute bg-base-100 rounded-box w-52 text-black">
                                <li>
                                    <Link to="/">HOME</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard">DASHBOARD</Link>
                                </li>

                                <li>
                                    <Link to="/blog">BLOG</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link to="/" className="md:ml-14 flex">
                        <img
                            className="w-16 absolute top-0  shadow-sm left-16"
                            src={logo}
                            alt=""
                        />
                        <img
                            className="w-16 absolute top-0 left-32"
                            src={useLap}
                            alt=""
                        />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex text-white">
                    <ul className="menu menu-horizontal gap-10 p-0">
                        <li className="text-white">
                            <Link to="/">HOME</Link>
                        </li>
                        <li className="text-white">
                            <Link to="/dashboard">DASHBOARD</Link>
                        </li>
                        <li className="text-white">
                            <Link to="/blog">BLOG</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end md:mr-14 text-black flex">
                    <>
                        {user?.uid ? (
                            <div
                                className="dropdown dropdown-end tooltip tooltip-bottom"
                                data-tip={user.displayName}>
                                <label
                                    tabIndex={0}
                                    className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} alt="" />
                                    </div>
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-compact dropdown-content mt-3 text-black p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <Link
                                            to=""
                                            className="justify-between text-black">
                                            {user?.uid
                                                ? user.displayName
                                                : 'Name'}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" className="text-black">
                                            <span className="text-black">
                                                {user?.uid
                                                    ? user.email
                                                    : 'Email'}
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={handleLogout} to="/">
                                            Logout
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <div className="flex gap-4">
                                <Link
                                    to="/login"
                                    className="btn btn-sm bg-[#FFDEE0] text-black">
                                    Log In
                                </Link>
                            </div>
                        )}
                    </>
                </div>
                <label
                    tabIndex={0}
                    htmlFor="my-drawer-2"
                    className="btn btn-ghost lg:hidden text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16"
                        />
                    </svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;
