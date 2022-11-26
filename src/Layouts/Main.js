import React from 'react';
import {Outlet} from 'react-router-dom'
import Navbar from '../Pages/Share/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <div className="min-h-screen"><Outlet/></div>
        </div>
    );
};

export default Main;