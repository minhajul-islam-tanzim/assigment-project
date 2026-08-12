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
    <div>
      <nav
        className=" fixed top-0 left-0 right-0 backdrop-blur-sm z-50 border-gray-400 shadow-sm bg-sky-50 "
      >
        <div className="w-full container mx-auto flex items-center justify-center gap-35 px-4 sm:px-6 md:px-16 md:h-20 h-13">
          {/*section logo */}

          <div className="flex relative cursor-pointer">
            <Link href={"/"}>
              <div className="bg-pink-400 h-5 w-5 rounded-full absolute right-4"></div>
              <div className="bg-green-700 h-5 w-5 rounded-full absolute right-8"></div>
              <div className="bg-gray-600 h-5 w-5 rounded-full"></div>
            </Link>
          </div>

          {/* Desktop Nav  */}

          <div className="md:flex items-center gap-20 hidden">
            {links.map((link) => (
              <NavLinks key={link.url} link={link} />
            ))}
          </div>

          {/* Button Login register  */}


            <div className="flex items-center gap-3">

          <button className="btn btn-primary hidden md:inline-flex">
            Login
            </button>


                {/* 3 dot menu  */}
{/* 3-dot menu - শুধু mobile এ */}
<div className="dropdown dropdown-end md:hidden">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
    <TextAlignJustify />
  </div>
  <ul
    tabIndex={0}
    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-68 p-10 shadow flex gap-5 "
  >
    {links.map((link) => (
      <li key={link.url} className="">
        <Link href={link.url}>{link.title}</Link>
      </li>
    ))}
    <li>
      <Link href="/login" className="btn btn-primary">Login</Link>
    </li>
  </ul>
</div>




            </div>



        </div>
      </nav>
    </div>
  );
};

export default Navbar;
