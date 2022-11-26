import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../Hooks/useToken';
import toast from 'react-hot-toast';

const Login = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const { signIn, setLoading, signInWithGoogle } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);

    if (token) {
        navigate(from, { replace: true });
        toast.success('successfully login');
    }
    const handleLogin = (data) => {
        // console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then((result) => {
                const user = result.user;
                setLoginUserEmail(data.email);
            })
            .catch((error) => {
                // console.log(error.message);
                setLoginError(error.message);
            });
    };
    const handleGoogleSignin = () => {
        signInWithGoogle().then((result) => {
            // console.log(result.user);
            setLoading(false);
            navigate(from, { replace: true });
        });
    };
    return (
        <div className="mx-auto my-[100px] ">
            <div className="w-full max-w-sm p-6 m-auto mx-auto bg-base-100 rounded-md shadow-2xl">
                <h1 className="text-3xl font-semibold text-center text-gray-700 ">
                    UseLap
                </h1>
                <div className="flex items-center justify-center mt-6">
                    <Link
                        to="/login"
                        className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500">
                        sign in
                    </Link>

                    <Link
                        to="/signup"
                        className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b-2 border-gray-400">
                        sign up
                    </Link>
                </div>

                <form onSubmit={handleSubmit(handleLogin)} className="mt-6">
                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="email"
                                className="block text-sm text-gray-800  ">
                                Email
                            </label>
                        </div>

                        <input
                            type="email"
                            name="email"
                            placeholder="Type Your Valid Email"
                            required
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md     border-gray-600 focus:border-blue-400   focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            {...register('email', {
                                required: 'email is Required',
                            })}
                        />
                        {errors.email && (
                            <p className="text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm text-gray-800  ">
                                Password
                            </label>
                        </div>

                        <input
                            type="password"
                            name="password"
                            placeholder="Type Your Valid Password"
                            required
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md     border-gray-600 focus:border-blue-400   focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            {...register('password', {
                                required: 'Password is Required',
                            })}
                        />
                        {errors.password && (
                            <p className="text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <div className="mt-6">
                        <input
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                            value="Log in"
                            type="submit"
                        />
                        {loginError && (
                            <p className="text-red-600">{loginError}</p>
                        )}
                    </div>
                </form>

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b  border-gray-600 lg:w-1/5"></span>

                    <p className="text-xs text-center text-gray-500 uppercase">
                        or login with Social Media
                    </p>

                    <span className="w-1/5 border-b  border-gray-400 lg:w-1/5"></span>
                </div>

                <div className="flex items-center mt-6 -mx-2">
                    <button
                        onClick={handleGoogleSignin}
                        type="button"
                        className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                        <svg
                            className="w-4 h-4 mx-2 fill-current"
                            viewBox="0 0 24 24">
                            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
                        </svg>

                        <span className="hidden mx-2 sm:inline">
                            Sign in with Google
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
