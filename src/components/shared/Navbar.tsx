"use client";

import Link from "next/link";
import NavLinks from "./NavLinks";
import { TextAlignJustify } from "lucide-react";

const links = [
  { url: "/", title: "Home" },
  { url: "/all-books", title: "All-Books" },
  { url: "/profile", title: "My Profile" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-sm z-50 border-gray-400 shadow-sm bg-sky-50">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-16 h-13 md:h-20">
        
        {/* Logo */}
        <div className="flex relative cursor-pointer left-5">
          <Link href={"/"}>
            <div className="bg-pink-400 h-5 w-5 rounded-full absolute right-4"></div>
            <div className="bg-green-700 h-5 w-5 rounded-full absolute right-8"></div>
            <div className="bg-gray-600 h-5 w-5 rounded-full"></div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <NavLinks key={link.url} link={link} />
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button className="btn btn-primary hidden md:inline-flex">
            Login
          </button>

          {/* 3-dot menu - শুধু mobile এ */}
          <div className="dropdown dropdown-end md:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <TextAlignJustify size={20} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-48 p-3 shadow gap-1"
            >
              {links.map((link) => (
                <li key={link.url}>
                  <Link href={link.url}>{link.title}</Link>
                </li>
              ))}
              <li>
                <Link href="/login" className="btn btn-primary mt-1">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;