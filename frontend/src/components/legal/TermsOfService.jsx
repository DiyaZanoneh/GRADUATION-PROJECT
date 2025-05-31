import Navbar from '../shared/Navbar'; // Adjust the path according to your file structure
import Footer from '../shared/Footer'; // Adjust the path according to your file structure

const TermsOfService = () => {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            {/* Navbar */}
            <Navbar />

            <div className="container mx-auto px-6 py-12 flex-grow">
                <h1 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Terms of Service</h1>
                <p className="mb-6 text-center text-gray-600">
                    By using the Job Hunt website, you agree to comply with the following terms and conditions. Please read them carefully before using our site.
                </p>

                <div className="space-y-6 max-w-3xl mx-auto">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. User Responsibilities</h2>
                    <p className="text-gray-600">
                        As a user, you agree to provide accurate and truthful information when creating your account or applying for jobs. You are responsible for maintaining the confidentiality of your account.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. Acceptable Use</h2>
                    <p className="text-gray-600">
                        You agree not to use the website for illegal activities, such as posting false job listings or submitting misleading personal information. You also agree not to harass or harm other users.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">3. Intellectual Property</h2>
                    <p className="text-gray-600">
                        All content on the Job Hunt website, including text, logos, and images, is the property of Job Hunt and protected by copyright laws.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">4. Termination</h2>
                    <p className="text-gray-600">
                        We reserve the right to terminate or suspend your account if we find that you have violated our terms of service.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">5. Limitation of Liability</h2>
                    <p className="text-gray-600">
                        Job Hunt is not responsible for any direct, indirect, or consequential damages arising from your use of our platform or any job listings on the site.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">6. Changes to the Terms</h2>
                    <p className="text-gray-600">
                        We may update these Terms of Service from time to time. Any changes will be posted on this page with the date of the last update.
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

export default TermsOfService;
