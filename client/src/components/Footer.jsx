import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-200 mt-8 p-5">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div>
          <p className="text-slate-700">
            &copy; {new Date().getFullYear()} Jeevan Estate. All rights
            reserved.
          </p>
          <p className="text-slate-500">Built with ❤️ by Jeevan</p>
        </div>
        <div className="flex gap-4">
          <Link to="/privacy-policy">
            <p className="text-slate-700 hover:underline">Privacy Policy</p>
          </Link>
          <Link to="/terms-of-service">
            <p className="text-slate-700 hover:underline">Terms of Service</p>
          </Link>
          <Link to="/contact-us">
            <p className="text-slate-700 hover:underline">Contact Us</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
