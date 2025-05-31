import { Link } from 'react-router-dom';


const Footer = () => {
 
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-t-gray-200 bg-gradient-to-r from-[#1A2980] to-[#26D0CE] to-[#00BCD4] text-gray-900">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Job <span className="text-[#60A5FA]">Hunt</span>
            </h2>
            <p className="text-xs text-gray-200 dark:text-gray-400">
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6 text-sm text-gray-600 dark:text-gray-400">
            {/* Use Link for client-side navigation */}
            <Link
              to="/privacy"
              className="hover:text-gray-800 dark:hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-gray-800 dark:hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-800 dark:hover:text-white transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mt-6 justify-center">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300"
            aria-label="Facebook"
            title="Follow us on Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.676 0H1.324C.593 0 0 .592 0 1.324v21.352C0 23.408.593 24 1.324 24H12.82V14.706H9.692v-3.578h3.128V8.408c0-3.1 1.893-4.787 4.657-4.787 1.325 0 2.463.1 2.794.144v3.238l-1.918.001c-1.503 0-1.794.715-1.794 1.762v2.31h3.587l-.468 3.578h-3.119V24h6.116C23.407 24 24 23.408 24 22.676V1.324C24 .592 23.407 0 22.676 0z" />
            </svg>
          </a>

          {/* X */}
          <a
            href="https://x.com"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-black hover:text-white transition-all duration-300"
            aria-label="X"
            title="Follow us on X"
          >
            <span className="text-sm font-bold">X</span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:text-white transition-all duration-300"
            aria-label="Instagram"
            title="Follow us on Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .2 2.4.4.6.2 1.1.5 1.6 1 .5.5.8 1 .9 1.6.2.4.3 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 2-.4 2.4-.2.6-.5 1.1-1 1.6-.5.5-1 .8-1.6.9-.4.2-1.2.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.2-2.4-.4-.6-.2-1.1-.5-1.6-1s-.8-1-.9-1.6c-.2-.4-.3-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-2 .4-2.4.2-.6.5-1.1 1-1.6s1-.8 1.6-.9c.4-.2 1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.6.2 4.5.4 3.7.7 2.8 1 2.1 1.5 1.4 2.2.7 2.9.2 3.6 0 4.5c-.3.8-.5 1.9-.6 3.3C-.7 9 .7 12 .7 12s0 3 .1 4.2c.1 1.4.3 2.5.6 3.3.3.9.8 1.6 1.5 2.3.7.7 1.4 1.2 2.3 1.5.8.3 1.9.5 3.3.6C8.7 24 9.1 24 12 24s3.3 0 4.6-.1c1.4-.1 2.5-.3 3.3-.6.9-.3 1.6-.8 2.3-1.5.7-.7 1.2-1.4 1.5-2.3.3-.8.5-1.9.6-3.3.1-1.3.1-1.7.1-4.6s0-3.3-.1-4.6c-.1-1.4-.3-2.5-.6-3.3-.3-.9-.8-1.6-1.5-2.3-.7-.7-1.4-1.2-2.3-1.5-.8-.3-1.9-.5-3.3-.6C15.3 0 14.9 0 12 0z" />
              <path d="M12 5.8A6.2 6.2 0 1 0 12 18.2 6.2 6.2 0 1 0 12 5.8zm0 10.2A4 4 0 1 1 12 8a4 4 0 0 1 0 8zM18.4 4.6a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 1 0 0-2.88z" />
            </svg>
          </a>
        </div>


        {/* Back to Top Button */}
        <div className="mt-6 text-center">
          <button
            onClick={scrollToTop}
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
