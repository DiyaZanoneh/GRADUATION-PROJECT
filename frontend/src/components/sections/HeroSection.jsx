import React from 'react';

const HeroSection = ({ handleGetStarted }) => (
    <section className="bg-gradient-to-r from-[#0072ff] to-[#00c6ff] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
                Your Next Job Starts Here
            </h1>
            <p className="text-lg md:text-xl mb-8">
                Discover jobs, scan resumes, and apply in one click. Everything you need for your career growth.
            </p>
            <button
                onClick={handleGetStarted}
                className="bg-white text-[#6A38C2] font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
                Get Started
            </button>
        </div>
    </section>
);

export default HeroSection;
