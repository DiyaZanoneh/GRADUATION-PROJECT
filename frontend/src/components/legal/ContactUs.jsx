import { useState } from "react";
import Navbar from "../shared/Navbar";  // Adjust the path according to your file structure
import Footer from "../shared/Footer";  // Adjust the path according to your file structure

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here (e.g., API request to send message)
        console.log(formData);
        alert('Your message has been sent!');
    };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            {/* Navbar */}
            <Navbar />

            <div className="container mx-auto px-6 py-12 flex-grow">
                <h1 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Contact Us</h1>
                <p className="mb-6 text-center text-gray-600">
                    Have any questions or need assistance? Feel free to reach out to us by filling out the form below.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Your Name"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Your Email"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Your Message"
                            rows="6"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ContactUs;
