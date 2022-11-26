import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className="text-center mt-4 text-4xl font-bold">
                Frequently Asked Questions
            </h1>
            <hr className="mt-4" />
            <div className="divide-y w-3/4 mx-auto divide-gray-200 mt-10 rounded-xl border border-gray-200 bg-white">
                <details className="group p-6">
                    <summary className="flex cursor-pointer items-center justify-between">
                        <h2 className="text-lg font-medium text-gray-900">
                            What are the different ways to manage a state in a
                            React application?
                        </h2>

                        <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        SQL is the programming language used to interface with
                        relational databases. (Relational databases model data
                        as records in rows and tables with logical links between
                        them). NoSQL is a class of DBMs that are non-relational
                        and generally do not use SQL.
                    </p>
                </details>

                <details className="group p-6">
                    <summary className="flex cursor-pointer items-center justify-between">
                        <h2 className="text-lg font-medium text-gray-900">
                            How does prototypical inheritance work?
                        </h2>

                        <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        <span className="font-bold">What is JWT? :-</span> JWT,
                        or JSON Web Token, is an open standard used to share
                        security information between two parties — a client and
                        a server. Each JWT contains encoded JSON objects,
                        including a set of claims. JWTs are signed using a
                        cryptographic algorithm to ensure that the claims cannot
                        be altered after the token is issued.
                    </p>
                    <br />
                    <p>
                        <span className="font-bold">How does it work? :- </span>
                        JWTs differ from other web tokens in that they contain a
                        set of claims. Claims are used to transmit information
                        between two parties. What these claims are depends on
                        the use case at hand. For example, a claim may assert
                        who issued the token, how long it is valid for, or what
                        permissions the client has been granted.
                    </p>
                </details>
                <details className="group p-6">
                    <summary className="flex cursor-pointer items-center justify-between">
                        <h2 className="text-lg font-medium text-gray-900">
                            What is a unit test? Why should we write unit tests?
                        </h2>

                        <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        <span className="font-bold">NodeJS</span> is a
                        cross-platform and opensource Javascript runtime
                        environment that allows the javascript to be run on the
                        server-side. Nodejs allows Javascript code to run
                        outside the browser. Nodejs comes with a lot of modules
                        and mostly used in web development.
                    </p>
                    <br />
                    <p>
                        <span className="font-bold">Javascript</span> is a
                        Scripting language. It is mostly abbreviated as JS. It
                        can be said that Javascript is the updated version of
                        the ECMA script. Javascript is a high-level programming
                        language that uses the concept of Oops but it is based
                        on prototype inheritance.
                    </p>
                </details>
                <details className="group p-6">
                    <summary className="flex cursor-pointer items-center justify-between">
                        <h2 className="text-lg font-medium text-gray-900">
                            React vs. Angular vs. Vue?
                        </h2>

                        <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        NodeJS receives multiple client requests and places them
                        into EventQueue. NodeJS is built with the concept of
                        event-driven architecture. NodeJS has its own EventLoop
                        which is an infinite loop that receives requests and
                        processes them
                    </p>
                </details>
            </div>
        </div>
    );
};

export default Blog;
