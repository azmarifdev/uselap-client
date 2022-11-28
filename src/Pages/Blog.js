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
                        <h2 className="text-2xl mb-2 font-medium text-gray-900">
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
                    <h1 className="font-bold uppercase">
                        1 . Communication State
                    </h1>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        Communication state forms the backbone of your React
                        Native app without you even knowing about it. Remember
                        when you had requested a call back to an HTTP request?
                        That’s when you introduced the communication system in
                        your app. Communication plays a crucial role in storing
                        information in different states. It covers essential
                        aspects of an application such as loading spinners,
                        error messages, pop-ups, and many others which showcases
                        that a communication link has been formed. Communication
                        state is the “loading phase” of the transactions between
                        different states. It stores the following information
                        when used in a React app: 1. The error messages, given
                        that the request failed or the transaction was not
                        completed. 2. The type, selector, and expected change of
                        operations requested. 3. The type of data requested to
                        access or expect to receive. With the Communication
                        state, you can now access the state of the request
                        without setting any particular command like setState.
                        For example, you can see where your transaction is
                        moving: retrieving, updating, sending, receiving,
                        failed, etc. without having to set any command to
                        determine the true or false value for a request.
                    </p>
                    <h1 className="font-bold uppercase">2. Data State</h1>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        Data state covers information that your React
                        application stores temporarily for various business
                        functions. Supposedly, you are building a project
                        management app. The information stored in the data state
                        will include the following things – project names,
                        contacts, details about the clients, etc. The Data state
                        will receive all the information from the outer world.
                        But how will it identify which information is what and
                        whether it needs to be stored in the data state or not?
                        Well, every piece of information will have an identifier
                        that will help the Data state recognize and request for
                        particular information that it can store. Every fragment
                        of received data has a type and a selector which
                        specifies the kind of data received. You can design a
                        redux store for your data once you have mapped out a way
                        to identify the type and id of a received object.
                    </p>
                    <h1 className="font-bold uppercase">3. Control State</h1>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        Contrary to the state mentioned above in a React app,
                        the control state does not represent the application’s
                        environment. Instead, it refers to the state which the
                        user has input into the app. For example, form inputs,
                        selected items, etc. Control state is known to be more
                        diverse and versatile when it comes to storing
                        information. While form inputs are a huge bundle of
                        information with multiple objects in place, selected
                        items act as a single string of information representing
                        an Id, and the control state efficiently stores both
                        kinds of data without any trouble.
                    </p>
                    <h1 className="font-bold uppercase">4. Session State</h1>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        Session state contains information about the user of the
                        application such as user id, permissions, passwords,
                        etc. It may also include information on how the
                        application should work according to a particular user’s
                        preferences. While Session state can store similar
                        patterned components like Control state, there is a
                        thick difference between both the information stored.
                        For example, you may have a part of a Control state
                        information that represents parts of a tree view, you
                        can find kind of similar data in the Session state, but
                        it will definitely be different from the Control state.
                        Session states can only be read when a component is
                        mounted, which means that you store a copy of the
                        information already present in the Control state. It
                        stores personal preferences based on the user’s choices
                        to depict the data.
                    </p>
                    <h1 className="font-bold uppercase">5. Location State</h1>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        Location state is the UTF-8 display that appears in your
                        URL bar. In fact, the L in URL stands for Locator! One
                        of the most interesting facts about Location state is
                        that you can give directions to a user to parts of the
                        application that do not have unique URLs associated with
                        them. Also, the HTML5 History API allows you to store
                        states separately from the specific URL. Unlike Data and
                        Communication state, which follow a particular pattern
                        or a shape to store information, location state instead
                        stores information in a simple string like structure.
                        However, one of the most interesting things about
                        location states is that it typically stores URLs in the
                        forms of string-like structures even when they don’t
                        actually represent strings.
                    </p>
                </details>

                <details className="group p-6">
                    <summary className="flex cursor-pointer items-center justify-between">
                        <h2 className="text-2xl mb-2 font-medium text-gray-900">
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
                        The Prototypal Inheritance is a feature in javascript
                        used to add methods and properties in objects. It is a
                        method by which an object can inherit the properties and
                        methods of another object. Traditionally, in order to
                        get and set the Prototype of an object, we use Object.
                        getPrototypeOf and Object
                    </p>
                </details>
                <details className="group p-6">
                    <summary className="flex cursor-pointer items-center justify-between">
                        <h2 className="text-2xl mb-2 font-medium text-gray-900">
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
                        A unit test typically comprises of three stages: plan,
                        cases and scripting and the unit test itself. In the
                        first step, the unit test is prepared and reviewed. The
                        next step is for the test cases and scripts to be made,
                        then the code is tested. Test-driven development
                        requires that developers first write failing unit tests.
                        Then they write code and refactor the application until
                        the test passes. TDD typically results in an explicit
                        and predictable code base.
                        <br />
                        Unit tests can be performed manually or automated. Those
                        employing a manual method may have an instinctual
                        document made detailing each step in the process;
                        however, automated testing is the more common method to
                        unit tests. Automated approaches commonly use a testing
                        framework to develop test cases. These frameworks are
                        also set to flag and report any failed test cases while
                        also providing a summary of test cases.
                    </p>
                </details>
                <details className="group p-6">
                    <summary className="flex cursor-pointer items-center justify-between">
                        <h2 className="text-2xl mb-2 font-medium text-gray-900">
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
                    <h1 className="font-bold uppercase">1 . Angular</h1>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        Angular has a steep learning curve, considering it is a
                        complete solution, and mastering Angular requires you to
                        learn associated concepts like TypeScript and MVC. Even
                        though it takes time to learn Angular, the investment
                        pays dividends in terms of understanding how the front
                        end works.
                    </p>
                    <h1 className="font-bold uppercase mt-2">2 . React</h1>
                    <p className="mt-4 leading-relaxed text-gray-700">
                        React offers a Getting Started guide that should help
                        one set up React in about an hour. The documentation is
                        thorough and complete, with solutions to common issues
                        already present on Stack Overflow. React is not a
                        complete framework and advanced features require the use
                        of third-party libraries. This makes the learning curve
                        of the core framework not so steep but depends on the
                        path you take with additional functionality. However,
                        learning to use React does not necessarily mean that you
                        are using the best practices.
                    </p>
                    <h1 className="font-bold uppercase mt-2">3 . Vue</h1>
                    <p className="mt-4 leading-relaxed text-gray-700">
                        Vue provides higher customizability and hence is easier
                        to learn than Angular or React. Further, Vue has an
                        overlap with Angular and React with respect to their
                        functionality like the use of components. Hence, the
                        transition to Vue from either of the two is an easy
                        option. However, simplicity and flexibility of Vue is a
                        double-edged sword — it allows poor code, making it
                        difficult to debug and test.
                    </p>
                </details>
            </div>
        </div>
    );
};

export default Blog;
