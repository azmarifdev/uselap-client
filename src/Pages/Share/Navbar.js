import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../Context/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut();
        toast.success('Successfully logged out');
        navigate('/');
    };

    const navLinks = (
        <>
            <li>
                <Link to="/" className="font-semibold text-slate-100 hover:text-amber-300">
                    Home
                </Link>
            </li>
            <li>
                <Link
                    to="/dashboard"
                    className="font-semibold text-slate-100 hover:text-amber-300">
                    Dashboard
                </Link>
            </li>
            <li>
                <Link
                    to="/products"
                    className="font-semibold text-slate-100 hover:text-amber-300">
                    Products
                </Link>
            </li>
            <li>
                <Link to="/blog" className="font-semibold text-slate-100 hover:text-amber-300">
                    Blog
                </Link>
            </li>
        </>
    );

    return (
        <header className="sticky top-0 z-50 border-b border-slate-700/60 bg-slate-900/95 backdrop-blur-xl">
            <div className="page-shell navbar min-h-[72px] px-0">
                <div className="navbar-start">
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost btn-sm text-slate-100">
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
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 w-52 rounded-xl border border-slate-700 bg-slate-900 p-2 shadow-xl">
                            {navLinks}
                        </ul>
                    </div>

                    <Link to="/" className="ml-2 flex items-center gap-3 lg:ml-0">
                        <img src={logo} alt="UseLap" className="h-10 w-10 rounded-lg ring-2 ring-cyan-400/50" />
                        <div>
                            <p className="text-lg font-bold text-slate-100">UseLap</p>
                            <p className="text-xs text-slate-300">Certified Refurbished Marketplace</p>
                        </div>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-3 px-1">{navLinks}</ul>
                </div>

                <div className="navbar-end gap-2">
                    {user?.uid ? (
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full ring-2 ring-amber-400/60">
                                    <img src={user?.photoURL} alt={user?.displayName || 'User'} />
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-compact dropdown-content mt-3 w-64 rounded-xl border border-slate-700 bg-slate-900 p-2 text-slate-100 shadow-xl">
                                <li>
                                    <p className="font-semibold">{user?.displayName || 'User'}</p>
                                </li>
                                <li>
                                    <p className="text-xs text-slate-300">{user?.email}</p>
                                </li>
                                <li>
                                    <button onClick={handleLogout}>Logout</button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="rounded-xl bg-cyan-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-500">
                            Log In
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
