import React from 'react';

const FeaturesSection = () => (
    <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
                    <img
                        src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-pdf-resume-flatart-icons-outline-flatarticons.png"
                        alt="Scan PDF"
                        className="mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Scan PDF Resumes</h3>
                    <p className="text-gray-600">Automatically extract job details and match them with the perfect resume.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
                    <img
                        src="https://img.icons8.com/ios/50/000000/search.png"
                        alt="Search & Filter"
                        className="mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Search & Filter</h3>
                    <p className="text-gray-600">Efficiently search and filter job listings to find the best matches.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
                    <img
                        src="https://img.icons8.com/ios/50/000000/job.png"
                        alt="Job Alerts"
                        className="mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Job Alerts</h3>
                    <p className="text-gray-600">Stay updated with the latest job opportunities matching your skills.</p>
                </div>
            </div>
        </div>
    </section>
);

export default FeaturesSection;
