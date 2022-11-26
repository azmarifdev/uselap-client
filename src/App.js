import React from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Route';
function App() {
    return (
        <div>
            <RouterProvider router={router} />
            <Toaster></Toaster>
        </div>
    );
}

export default App;
