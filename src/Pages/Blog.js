import React from 'react';

const faqs = [
    {
        question: 'How can I manage state in a React application effectively?',
        answer: 'A practical approach is to split state into UI state, server/cache state, and authenticated session state. Keep component-level state local, use context for shared app-wide concerns, and use tools like React Query for remote data synchronization. This creates cleaner code and better performance in complex role-based products.',
    },
    {
        question: 'How does prototypical inheritance work in JavaScript?',
        answer: 'In JavaScript, objects can inherit properties and methods from another object through a prototype chain. When you access a property that does not exist on the current object, JavaScript looks up the chain until it finds it or reaches null. This inheritance model powers method sharing and object behavior reuse.',
    },
    {
        question: 'What is a unit test and why should we write it?',
        answer: 'A unit test validates one small unit of logic, like a function or component behavior, in isolation. It helps catch regressions early, supports confident refactoring, and improves deployment reliability. For marketplaces, unit tests are especially useful in payment, auth, and role-guard logic.',
    },
    {
        question: 'React vs Angular vs Vue: which one is better?',
        answer: 'It depends on your team and project constraints. React is flexible and ecosystem-rich, Angular is opinionated and enterprise-structured, and Vue is lightweight and easy to adopt. For fast-moving marketplaces, React often works well because of its composability and strong tooling.',
    },
];

const Blog = () => {
    return (
        <main className="page-shell py-10">
            <section className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 px-6 py-12 text-white md:px-10">
                <p className="inline-block rounded-full border border-cyan-200/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
                    Knowledge Center
                </p>
                <h1 className="mt-4 text-4xl font-bold md:text-5xl">Frequently Asked Questions</h1>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-200 md:text-base">
                    Practical answers for developers and marketplace users. We keep this section short,
                    useful, and focused on real product-building decisions.
                </p>
            </section>

            <section className="mt-8 space-y-4">
                {faqs.map((faq, index) => (
                    <details
                        key={faq.question}
                        className="glass-card group rounded-2xl p-5 md:p-6"
                        open={index === 0}>
                        <summary className="cursor-pointer list-none pr-8 text-lg font-bold text-slate-900">
                            {faq.question}
                        </summary>
                        <p className="mt-4 text-sm leading-8 text-slate-700 md:text-base">{faq.answer}</p>
                    </details>
                ))}
            </section>
        </main>
    );
};

export default Blog;
