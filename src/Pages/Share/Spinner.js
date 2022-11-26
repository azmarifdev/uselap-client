import React from 'react';
import { PulseLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div><PulseLoader color="#36d7b7" /></div>
        </div>
    );
};

export default Spinner;
