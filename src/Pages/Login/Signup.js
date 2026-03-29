import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../Hooks/useToken';
import toast from 'react-hot-toast';

const mapFirebaseError = (err) => {
    if (err?.code === 'auth/configuration-not-found') {
        return 'Firebase auth is not configured. Enable Authentication -> Sign-in method in Firebase Console.';
    }
    if (err?.code === 'auth/operation-not-allowed') {
        return 'Email/Password sign-in is disabled in Firebase Console.';
    }
    if (err?.code === 'auth/invalid-api-key') {
        return 'Invalid Firebase API key. Recheck REACT_APP_apiKey in client .env.';
    }
    return err?.message || 'Something went wrong. Please try again.';
};

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { createUser, updateUser, signInWithGoogle } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    const [createUserEmail, setCreateUserEmail] = useState('');

    const [token] = useToken(createUserEmail);
    if (token) {
        toast.success('Login successfully');
        navigate(from, { replace: true });
    }

    const handleSignup = (data) => {
        setSignUPError('');
        const image = data.photo[0];

        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`;

        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then((imageData) => {
                createUser(data.email, data.password)
                    .then(() => {
                        const userInfo = {
                            displayName: data.name,
                            photoURL: imageData.data.display_url,
                        };

                        updateUser(userInfo)
                            .then(() => {
                                saveUser(data.name, data.email, data.role);
                            })
                            .catch((err) => {
                                setSignUPError(mapFirebaseError(err));
                                console.error(err);
                            });
                    })
                    .catch((err) => {
                        setSignUPError(mapFirebaseError(err));
                        console.error(err);
                    });
            })
            .catch((err) => {
                setSignUPError(mapFirebaseError(err));
                console.error(err);
            });
    };

    const saveUser = (name, email, role) => {
        const user = { name, email, role };

        fetch(`${process.env.REACT_APP_LOCALHOST}/users`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then(() => {
                setCreateUserEmail(email);
            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle().then((result) => {
            const user = result.user;
            saveUserSocialLogin(user?.displayName, user?.email, user?.photoURL);
        }).catch((err) => {
            setSignUPError(mapFirebaseError(err));
        });
    };

    const saveUserSocialLogin = (name, email, image) => {
        const user = {
            name,
            email,
            role: 'Buyer',
            image,
        };

        fetch(`${process.env.REACT_APP_LOCALHOST}/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then(() => {
                setCreateUserEmail(email);
            })
            .catch((error) => console.error(error));
    };

    return (
        <main className="page-shell py-8">
            <section className="mx-auto grid max-w-5xl gap-4 rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-lg md:p-4 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 md:p-5">
                    <p className="inline-block rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                        Create Account
                    </p>
                    <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 md:text-3xl">
                        Join UseLap Marketplace
                    </h1>
                    <p className="mt-4 text-sm leading-8 text-slate-600">
                        Sign up as a Buyer or Seller to get started. Manage products, bookings,
                        secure payments, and role-based dashboard access from one place.
                    </p>

                    <div className="mt-7 space-y-3 text-sm text-slate-700">
                        <p>• Sellers can add and manage refurbished laptop listings</p>
                        <p>• Buyers can reserve products and complete secure payments</p>
                        <p>• JWT-based auth with role-protected routes is enabled</p>
                    </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4 md:p-5">
                    <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-2">
                        <Link to="/login" className="text-sm font-semibold text-slate-500 hover:text-slate-700">
                            Sign In
                        </Link>
                        <Link to="/signup" className="text-sm font-bold text-slate-900">
                            Sign Up
                        </Link>
                    </div>

                    <form onSubmit={handleSubmit(handleSignup)} className="space-y-3">
                        <div>
                            <label htmlFor="name" className="text-sm font-semibold text-slate-700">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Your full name"
                                className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-slate-500 focus:outline-none"
                                {...register('name', {
                                    required: 'Name is required',
                                })}
                            />
                            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-slate-500 focus:outline-none"
                                {...register('email', {
                                    required: 'Email is required',
                                })}
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="password" className="text-sm font-semibold text-slate-700">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Create password"
                                className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-slate-500 focus:outline-none"
                                {...register('password', {
                                    required: 'Password is required',
                                })}
                            />
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="photo" className="text-sm font-semibold text-slate-700">
                                Profile Photo
                            </label>
                            <input
                                id="photo"
                                type="file"
                                className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-slate-500 focus:outline-none"
                                {...register('photo', {
                                    required: 'Photo is required',
                                })}
                            />
                            {errors.photo && <p className="mt-1 text-sm text-red-500">{errors.photo.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="role" className="text-sm font-semibold text-slate-700">
                                Role
                            </label>
                            <select
                                id="role"
                                defaultValue="Buyer"
                                className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-slate-500 focus:outline-none"
                                {...register('role', {
                                    required: true,
                                })}>
                                <option value="Buyer">Buyer</option>
                                <option value="Seller">Seller</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-slate-700">
                            Sign Up
                        </button>

                        {signUpError && <p className="text-sm text-red-600">{signUpError}</p>}
                    </form>

                    <div className="my-4 flex items-center gap-3">
                        <span className="h-px flex-1 bg-slate-200" />
                        <span className="text-xs uppercase tracking-[0.15em] text-slate-400">or</span>
                        <span className="h-px flex-1 bg-slate-200" />
                    </div>

                    <button
                        onClick={handleGoogleSignIn}
                        type="button"
                        className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
                        </svg>
                        Continue with Google
                    </button>
                </div>
            </section>
        </main>
    );
};

export default Signup;
