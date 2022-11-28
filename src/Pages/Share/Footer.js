import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer class="bg-[#055C7A]" text-white aria-labelledby="footer-heading">
                <div class="px-5 py-12 mx-auto max-w-7xl lg:py-10 md:px-12 lg:px-20">
                    <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                        <div class="space-y-8 xl:col-span-1">
                            <Link
                                href="./index.html"
                                class="text-lg font-bold tracking-tighter text-white transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8">
                                {' '}
                                UseLap{' '}
                            </Link>
                            <p class="w-1/2 mt-2 text-sm text-white">
                                Certified REFURBISHED LAPTOPS With Warranty
                            </p>
                        </div>
                        <div class="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
                            <div class="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 class="text-xs font-semibold tracking-wider text-white uppercase">
                                        Solutions
                                    </h3>
                                    <ul role="list" class="mt-4 space-y-4">
                                        <li>
                                            <Link
                                                href="#"
                                                class="text-sm font-normal text-white hover:text-gray-900">
                                                {' '}
                                                Marketing{' '}
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                href="#"
                                                class="text-sm font-normal text-white hover:text-gray-900">
                                                {' '}
                                                Analytics{' '}
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                href="#"
                                                class="text-sm font-normal text-white hover:text-gray-900">
                                                {' '}
                                                Commerce{' '}
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                href="#"
                                                class="text-sm font-normal text-white hover:text-gray-900">
                                                {' '}
                                                Insights{' '}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="mt-12 md:mt-0">
                                    <h3 class="text-xs font-semibold tracking-wider text-white uppercase">
                                        Support
                                    </h3>
                                    <ul role="list" class="mt-4 space-y-4">
                                        <li>
                                            <Link
                                                href="#"
                                                class="text-sm font-normal text-white hover:text-gray-900">
                                                {' '}
                                                Pricing{' '}
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                href="#"
                                                class="text-sm font-normal text-white hover:text-gray-900">
                                                {' '}
                                                Documentation{' '}
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                href="#"
                                                class="text-sm font-normal text-white hover:text-gray-900">
                                                {' '}
                                                Guides{' '}
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                href="#"
                                                class="text-sm font-normal text-white hover:text-gray-900">
                                                {' '}
                                                API Status{' '}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="hidden lg:justify-end md:grid md:grid-cols-1">
                                <div class="w-full mt-12 md:mt-0">
                                    <div class="mt-8 lg:justify-end xl:mt-0">
                                        <h3 class="text-xs font-semibold tracking-wider text-white uppercase">
                                            Subscribe to our newsletter
                                        </h3>
                                        <p class="mt-4 text-sm text-white lg:ml-auto">
                                            The latest news, articles, and
                                            resources, sent to your inbox
                                            weekly.
                                        </p>
                                        <div class="inline-flex items-center gap-2 list-none lg:ml-auto">
                                            <form
                                                action=""
                                                method="post"
                                                id="revue-form"
                                                name="revue-form"
                                                target="_blank"
                                                class="p-1 mt-4 transition duration-500 ease-in-out transform border2 bg-[#055C7A] rounded-xl sm:max-w-lg sm:flex">
                                                <div class="flex-1 min-w-0 revue-form-group">
                                                    <label
                                                        for="member_email"
                                                        class="sr-only">
                                                        Email address
                                                    </label>
                                                    <input
                                                        id="cta-email"
                                                        type="email"
                                                        class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                                                        placeholder="Enter your email  "
                                                    />
                                                </div>
                                                <div class="mt-4 sm:mt-0 sm:ml-3 revue-form-actions">
                                                    <button
                                                        type="submit"
                                                        value="Subscribe"
                                                        name="member[subscribe]"
                                                        id="member_submit"
                                                        class="block w-full px-5 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10">
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
