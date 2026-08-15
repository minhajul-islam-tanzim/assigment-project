import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 flex flex-col md:flex-row justify-between gap-10">
        
        {/* Logo/Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3">📚 BookHub</h2>
          <p className="text-gray-400 max-w-xs">
            Your digital library — explore, borrow, and read your favorite books anytime.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/all-books">All Books</Link></li>
            <li><Link href="/profile">My Profile</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-400 flex items-center gap-2">
            <Mail size={18} /> support@bookhub.com
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <Link href="#"><FaFacebook size={20} /></Link>
            <Link href="#"><FaTwitter size={20} /></Link>
            <Link href="#"><FaInstagram size={20} /></Link>
          </div>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} BookHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;