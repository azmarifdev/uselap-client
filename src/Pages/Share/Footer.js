import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer
                className="bg-[#055C7A]"
                text-white
                aria-labelledby="footer-heading">
                <div className="px-5 py-12 mx-auto max-w-7xl lg:py-10 md:px-12 lg:px-20">
                    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                        <div className="space-y-8 xl:col-span-1">
                            <Link
                                href="./index.html"
                                className="text-lg font-bold tracking-tighter text-white transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8">
                                {' '}
                                UseLap{' '}
                            </Link>
                            <p className="w-1/2 mt-2 text-sm text-white">
                                Certified REFURBISHED LAPTOPS With Warranty
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-xs font-semibold tracking-wider text-white uppercase">
                                        Solutions
                                    </h3>
                                    <ul role="list" className="mt-4 space-y-4">
                                        <li>
                                            <Link
                                                href="#"
                                                className="text-sm font-normal text-white hover:text-gray-900">
                                                {' '}
                                                Marketing{' '}
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                href="#"
                                                className="text-sm font-normal text-white hover:text-gray-900">
                                                {' '}
                                                Analytics{' '}
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                href="#"
                                                className="text-sm font-normal text-white hover:text-gray-900">
                                                {' '}
                                                Commerce{' '}
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                href="#"
                                                className="text-sm font-normal text-white hover:text-gray-900">
                                                {' '}
                                                Insights{' '}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-12 md:mt-0">
                                    <h3 className="text-xs font-semibold tracking-wider text-white uppercase">
                                        Support
                                    </h3>
                                    <ul role="list" className="mt-4 space-y-4">
                                        <li>
                                            <Link
                                                href="#"
                                                className="text-sm font-normal text-white hover:text-gray-900">
                                                {' '}
                                                Pricing{' '}
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                href="#"
                                                className="text-sm font-normal text-white hover:text-gray-900">
                                                {' '}
                                                Documentation{' '}
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                href="#"
                                                className="text-sm font-normal text-white hover:text-gray-900">
                                                {' '}
                                                Guides{' '}
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                href="#"
                                                className="text-sm font-normal text-white hover:text-gray-900">
                                                {' '}
                                                API Status{' '}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="hidden lg:justify-end md:grid md:grid-cols-1">
                                <div className="w-full mt-12 md:mt-0">
                                    <div className="mt-8 lg:justify-end xl:mt-0">
                                        <h3 className="text-xs font-semibold tracking-wider text-white uppercase">
                                            Subscribe to our newsletter
                                        </h3>
                                        <p className="mt-4 text-sm text-white lg:ml-auto">
                                            The latest news, articles, and
                                            resources, sent to your inbox
                                            weekly.
                                        </p>
                                        <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
                                            <form
                                                action=""
                                                method="post"
                                                id="revue-form"
                                                name="revue-form"
                                                target="_blank"
                                                className="p-1 mt-4 transition duration-500 ease-in-out transform border2 bg-[#055C7A] rounded-xl sm:max-w-lg sm:flex">
                                                <div className="flex-1 min-w-0 revue-form-group">
                                                    <label
                                                        for="member_email"
                                                        className="sr-only">
                                                        Email address
                                                    </label>
                                                    <input
                                                        id="cta-email"
                                                        type="email"
                                                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                                                        placeholder="Enter your email  "
                                                    />
                                                </div>
                                                <div className="mt-4 sm:mt-0 sm:ml-3 revue-form-actions">
                                                    <button
                                                        type="submit"
                                                        value="Subscribe"
                                                        name="member[subscribe]"
                                                        id="member_submit"
                                                        className="block w-full px-5 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10">
                                                        Notify me
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
