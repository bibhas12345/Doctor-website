import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-center items-center py-4 bg-sky-950 text-gray-100">
      <div className="w-full md:w-1/2 px-4">
        <h2 className="text-sm font-semibold mb-2">About Us</h2>
        <ul className="list-none space-y-2 pl-4">
          <li>
            <span className="text-gray-300 hover:text-gray-100">• </span>
            <a href="#" className="text-gray-300 hover:text-gray-100">
              Our Services
            </a>
          </li>
          <li>
            <span className="text-gray-300 hover:text-gray-100">• </span>
            <a href="#" className="text-gray-300 hover:text-gray-100">
              Meet the Doctors
            </a>
          </li>
          <li>
            <span className="text-gray-300 hover:text-gray-100">• </span>
            <a href="#" className="text-gray-300 hover:text-gray-100">
              Contact Us
            </a>
          </li>
          <li>
            <span className="text-gray-300 hover:text-gray-100">• </span>
            <a href="#" className="text-gray-300 hover:text-gray-100">
              FAQs
            </a>
          </li>
          <li>
            <span className="text-gray-300 hover:text-gray-100">• </span>
            <a href="#" className="text-gray-300 hover:text-gray-100">
              Testimonials
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/2 px-4">
        <h2 className="text-sm font-semibold mb-2">Resources</h2>
        <ul className="list-none space-y-2 pl-4">
          <li>
            <span className="text-gray-300 hover:text-gray-100">• </span>
            <a href="#" className="text-gray-300 hover:text-gray-100">
              Blog
            </a>
          </li>
          <li>
            <span className="text-gray-300 hover:text-gray-100">• </span>
            <a href="#" className="text-gray-300 hover:text-gray-100">
              Help Center
            </a>
          </li>
          <li>
            <span className="text-gray-300 hover:text-gray-100">• </span>
            <a href="#" className="text-gray-300 hover:text-gray-100">
              Privacy Policy
            </a>
          </li>
          <li>
            <span className="text-gray-300 hover:text-gray-100">• </span>
            <a href="#" className="text-gray-300 hover:text-gray-100">
              Terms of Service
            </a>
          </li>
          <li>
            <span className="text-gray-300 hover:text-gray-100">• </span>
            <a href="#" className="text-gray-300 hover:text-gray-100">
              Careers
            </a>
          </li>
        </ul>
      </div>
      <p className="w-full mt-4 text-center text-xs">&copy; Copyright@bibhas</p>
    </footer>
  );
};

export default Footer;
