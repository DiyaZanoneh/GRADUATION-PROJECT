import React from 'react';
import Navbar from '../shared/Navbar'; // Adjust the path according to your file structure
import Footer from '../shared/Footer'; // Adjust the path according to your file structure

const PrivacyPolicy = () => {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            {/* Navbar */}
            <Navbar />

            <div className="container mx-auto px-6 py-12 flex-grow">
                <h1 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Privacy Policy</h1>
                <p className="mb-6 text-center text-gray-600">
                    At Job Hunt, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website.
                </p>

                <div className="space-y-6 max-w-3xl mx-auto">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. Information We Collect</h2>
                    <p className="text-gray-600">
                        We collect personal information that you provide when you register on our site or apply for jobs. This includes your name, email address, resume, and job preferences.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. How We Use Your Information</h2>
                    <p className="text-gray-600">
                        We use your personal information to provide you with the services and features of our job platform, such as matching you with relevant job opportunities and sending you notifications about job openings.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">3. Data Security</h2>
                    <p className="text-gray-600">
                        We implement various security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is completely secure.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">4. Cookies</h2>
                    <p className="text-gray-600">
                        We use cookies to enhance your experience on our site. You can choose to disable cookies in your browser settings, but this may affect your experience.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">5. Changes to This Policy</h2>
                    <p className="text-gray-600">
                        We may update this Privacy Policy from time to time. When we make changes, we will post the updated policy on this page and notify you if necessary.
                    </p>

                    <p className="text-gray-600">
                        Effective Date: {new Date().getFullYear()}
                    </p>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
