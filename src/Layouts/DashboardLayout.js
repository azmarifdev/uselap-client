import React, { useEffect, useContext } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useRole from '../Hooks/useRole';
import Navbar from '../Pages/Share/Navbar';

const DashboardLayout = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: 0 });
    }, [pathname]);

    const { user } = useContext(AuthContext);
    const [isRole] = useRole(user?.email);

    const admin = (
        <>
            <li><Link to="/dashboard/all-buyer">All Buyer</Link></li>
            <li><Link to="/dashboard/all-seller">All Seller</Link></li>
            <li><Link to="/dashboard/all-product">All Product</Link></li>
            <li><Link to="/dashboard/report">Report</Link></li>
        </>
    );

    const seller = (
        <>
            <li><Link to="/dashboard/add-product">Add Product</Link></li>
            <li><Link to="/dashboard/my-product">My Products</Link></li>
        </>
    );

    const buyer = (
        <>
            <li><Link to="/dashboard/my-order">My Order</Link></li>
        </>
    );

    return (
        <div>
            <Navbar />
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content bg-white">
                    <div className="page-shell py-6">
                        <Outlet />
                    </div>
                </div>

                <div className="drawer-side border-r border-slate-200 bg-slate-50">
                    <label htmlFor="my-drawer-2" className="drawer-overlay" />
                    <div className="w-72 p-4">
                        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Dashboard</p>
                            <h2 className="mt-2 text-xl font-bold text-slate-900">{isRole || 'User'} Panel</h2>
                        </div>

                        <ul className="menu mt-4 gap-1 rounded-xl border border-slate-200 bg-white p-3 text-slate-700 shadow-sm">
                            {isRole === 'Admin' && admin}
                            {isRole === 'Seller' && seller}
                            {isRole === 'Buyer' && buyer}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
