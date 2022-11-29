import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useRole from '../Hooks/useRole';
import Navbar from '../Pages/Share/Navbar';

const DashboardLayout = () =>
{
        const { pathname } = useLocation();
        useEffect(() => {
            window.scrollTo({ behavior: 'smooth', top: 0 });
        }, [pathname]);
    const { user } = useContext(AuthContext);
    const [isRole] = useRole(user?.email);
    console.log(isRole);

    const admin = (
        <>
            <li>
                <Link to="/dashboard/all-buyer">All Buyer</Link>
            </li>
            <li>
                <Link to="/dashboard/all-seller">All Seller</Link>
            </li>
            <li>
                <Link to="/dashboard/all-product">All Product</Link>
            </li>
            <li>
                <Link to="/dashboard/report">Report</Link>
            </li>
        </>
    );
    const seller = (
        <>
            <li>
                <Link to="/dashboard/add-product">Add Product</Link>
            </li>
            <li>
                <Link to="/dashboard/my-product">My Product</Link>
            </li>
        </>
    );
    const buyer = (
        <>
            <li>
                <Link
                    className=""
                    to="/dashboard/my-order">
                    My Order
                </Link>
            </li>
        </>
    );

    return (
        <div>
            <Navbar />
            <div className="drawer drawer-mobile">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content mt-5">
                    <div className="">
                        <Outlet />
                    </div>
                </div> 
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-2"
                        className="drawer-overlay"></label>
                    <ul className="menu p-4 w-64 bg-base-100 text-base-content">
                        <>
                            {isRole === 'Admin' && admin}
                            {isRole === 'Seller' && seller}
                            {isRole === 'Buyer' && buyer}
                        </>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
