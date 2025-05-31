import React from 'react';

const StatsSection = () => (
    <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">By the Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <h3 className="text-xl font-semibold text-gray-800">500+ Jobs Posted</h3>
                    <p className="text-gray-600">Discover new job opportunities every day.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <h3 className="text-xl font-semibold text-gray-800">1,000+ Users</h3>
                    <p className="text-gray-600">Join a community of professionals looking to grow their careers.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <h3 className="text-xl font-semibold text-gray-800">90% Success Rate</h3>
                    <p className="text-gray-600">Helping candidates land their ideal jobs faster.</p>
                </div>
            </div>
        </div>
    </section>
);

export default StatsSection;
