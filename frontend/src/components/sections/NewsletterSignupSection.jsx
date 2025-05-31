import React from 'react';

const NewsletterSignupSection = () => (
    <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Stay Updated</h2>
            <p className="text-lg mb-8">Sign up for our newsletter to receive job alerts, career tips, and platform updates directly to your inbox.</p>
            <div className="flex justify-center">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="p-3 w-80 border border-gray-300 rounded-l-md"
                />
                <button className="bg-[#6A38C2] text-white font-semibold px-6 py-3 rounded-r-md hover:bg-[#5b30a6] transition-colors">
                    Subscribe
                </button>
            </div>
        </div>
    </section>
);

export default NewsletterSignupSection;
