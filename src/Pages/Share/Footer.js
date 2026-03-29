import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="mt-16 border-t border-slate-800 bg-slate-950 text-slate-200">
            <div className="page-shell py-14">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <h3 className="text-xl font-bold text-white">UseLap</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-300">
                            Certified refurbished laptops with transparent condition reports,
                            verified sellers, and secure role-based workflows.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-100">
                            Explore
                        </h4>
                        <ul className="mt-4 space-y-3 text-sm text-slate-300">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-100">
                            Marketplace Promise
                        </h4>
                        <ul className="mt-4 space-y-3 text-sm text-slate-300">
                            <li>Verified seller onboarding</li>
                            <li>Secure checkout</li>
                            <li>Transparent product history</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-100">
                            Newsletter
                        </h4>
                        <p className="mt-4 text-sm text-slate-300">
                            Get price-drop alerts and laptop buying tips.
                        </p>
                        <div className="mt-4 flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder:text-slate-500"
                            />
                            <button className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-400">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-400">
                    © {new Date().getFullYear()} UseLap. Built for trusted refurbished laptop commerce.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
