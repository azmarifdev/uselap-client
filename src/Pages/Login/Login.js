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
    return err?.message || 'Unable to login right now.';
};

const demoAccounts = [
    { role: 'Seller', email: 'seller@gmail.com', password: 'seller' },
    { role: 'Buyer', email: 'buyer@gmail.com', password: 'buyerr' },
    { role: 'Admin', email: 'admin@gmail.com', password: 'adminn' },
];

const Login = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        setValue,
    } = useForm();

    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);

    if (token) {
        navigate(from, { replace: true });
        toast.success('Successfully logged in');
    }

    const handleLogin = (data) => {
        setLoginError('');
        signIn(data.email, data.password)
            .then(() => {
                setLoginUserEmail(data.email);
            })
            .catch((error) => {
                setLoginError(mapFirebaseError(error));
            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle().then((result) => {
            const user = result.user;
            saveUserSocialLogin(user?.displayName, user?.email, user?.photoURL);
        }).catch((error) => {
            setLoginError(mapFirebaseError(error));
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
                setLoginUserEmail(email);
            })
            .catch((error) => console.error(error));
    };

    const copyCredential = async (value, label) => {
        try {
            await navigator.clipboard.writeText(value);
            toast.success(`${label} copied`);
        } catch (error) {
            toast.error('Copy failed');
        }
    };

    const fillCredential = (email, password) => {
        setValue('email', email);
        setValue('password', password);
        toast.success('Demo credential added to form');
    };

    return (
        <main className="page-shell py-8">
            <section className="mx-auto grid max-w-5xl gap-4 rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-lg md:p-4 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-4 md:p-5">
                    <p className="inline-block rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                        Demo Accounts
                    </p>
                    <h1 className="text-2xl font-bold leading-tight text-slate-900 md:text-3xl">
                        Login to Your UseLap Account
                    </h1>
                    <p className="text-sm leading-7 text-slate-600">
                        Use these Seller, Buyer, and Admin credentials for demo access.
                        Copy and paste them, or fill the form with one click.
                    </p>

                    <div className="space-y-3">
                        {demoAccounts.map((item) => (
                            <article key={item.role} className="rounded-xl border border-slate-200 bg-white p-4">
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <p className="text-sm font-bold text-slate-900">{item.role}</p>
                                    <button
                                        type="button"
                                        onClick={() => fillCredential(item.email, item.password)}
                                        className="rounded-md border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100">
                                        Use This
                                    </button>
                                </div>
                                <div className="mt-3 space-y-2">
                                    <div className="flex items-center justify-between gap-2 rounded-md bg-slate-50 px-3 py-2">
                                        <p className="truncate text-xs text-slate-700">{item.email}</p>
                                        <button
                                            type="button"
                                            onClick={() => copyCredential(item.email, 'Email')}
                                            className="rounded-md bg-slate-200 px-2 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-300">
                                            Copy
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-between gap-2 rounded-md bg-slate-50 px-3 py-2">
                                        <p className="truncate text-xs text-slate-700">{item.password}</p>
                                        <button
                                            type="button"
                                            onClick={() => copyCredential(item.password, 'Password')}
                                            className="rounded-md bg-slate-200 px-2 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-300">
                                            Copy
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4 md:p-5">
                    <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-2">
                        <Link to="/login" className="text-sm font-bold text-slate-900">
                            Sign In
                        </Link>
                        <Link to="/signup" className="text-sm font-semibold text-slate-500 hover:text-slate-700">
                            Need an account?
                        </Link>
                    </div>

                    <form onSubmit={handleSubmit(handleLogin)} className="space-y-3">
                        <div>
                            <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
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
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-slate-500 focus:outline-none"
                                {...register('password', {
                                    required: 'Password is required',
                                })}
                            />
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-slate-700">
                            Log In
                        </button>

                        {loginError && <p className="text-sm text-red-600">{loginError}</p>}
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

export default Login;
