import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../Layouts/DashboardLayout';
import Main from '../Layouts/Main';
import AllBuyer from '../Pages/Dashboard/Panel/AdminPanel/AllBuyer';
import AllProduct from '../Pages/Dashboard/Panel/AdminPanel/AllProduct';
import AllSeller from '../Pages/Dashboard/Panel/AdminPanel/AllSeller';
import Report from '../Pages/Dashboard/Panel/AdminPanel/Report';
import Home from '../Pages/Dashboard/Home/Home';
import AddProduct from '../Pages/Dashboard/Panel/SellerPanel/AddProduct';
import MyProduct from '../Pages/Dashboard/Panel/SellerPanel/MyProduct';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Login/Signup';
import Welcome from '../Pages/Dashboard/Panel/Welcome';
import MyOrder from '../Pages/Dashboard/Panel/BuyerPanel/MyOrder';
import CategoriesData from '../Pages/Dashboard/Home/Category/Categories/CategoriesData';
import Blog from '../Pages/Blog';
import ErrorPage from '../Pages/Share/ErrorPage';
import Payment from '../Pages/Dashboard/Panel/BuyerPanel/Payment';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/signup',
                element: <Signup />,
            },
            {
                path: '/blog',
                element: <Blog />,
            },
            {
                path: '/categories-data/:category',
                element: <CategoriesData />,
                loader: ({ params }) =>
                    fetch(
                        `${process.env.REACT_APP_LOCALHOST}/categories-data/${params.category}`,
                    ),
            },
        ],
    },
    {
        path: '/dashboard',
        element: (
            <PrivateRoute>
                <DashboardLayout />
            </PrivateRoute>
        ),
        children: [
            {
                path: '/dashboard',
                element: <Welcome />,
            },
            {
                path: '/dashboard/all-buyer',
                element: <AllBuyer />,
            },
            {
                path: '/dashboard/all-seller',
                element: <AllSeller />,
            },
            {
                path: '/dashboard/all-product',
                element: <AllProduct />,
            },
            {
                path: '/dashboard/report',
                element: <Report />,
            },
            {
                path: '/dashboard/add-product',
                element: <AddProduct />,
            },
            {
                path: '/dashboard/my-product',
                element: <MyProduct />,
            },
            {
                path: '/dashboard/my-order',
                element: <MyOrder />,
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment />,
                loader: ({ params }) =>
                    fetch(
                        `${process.env.REACT_APP_LOCALHOST}/booking/${params.id}`,
                    ),
            },
        ],
    },
]);
export default router;
