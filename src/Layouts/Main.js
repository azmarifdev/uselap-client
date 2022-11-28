import React, { useEffect } from 'react';
import {Outlet, useLocation} from 'react-router-dom'
import Footer from '../Pages/Share/Footer';
import Navbar from '../Pages/Share/Navbar';

const Main = () =>
{
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: 0 });
    }, [pathname]);
    return (
        <div className="">
            <Navbar/>
            <div className="min-h-screen"><Outlet /></div>
            <Footer/>
        </div>
    );
};

export default Main;