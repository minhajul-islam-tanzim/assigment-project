"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { TextAlignJustify } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/all-books", title: "All-Books" },
  { url: "/profile", title: "My Profile" },
];

const Navbar = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
    router.refresh();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-sm z-50 border-gray-400 shadow-sm bg-sky-50">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-16 h-13 md:h-20">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0 }}
          className="flex relative cursor-pointer left-5"
        >
          <Link href={"/"}>
            <div className="bg-pink-400 h-5 w-5 rounded-full absolute right-4"></div>
            <div className="bg-green-700 h-5 w-5 rounded-full absolute right-8"></div>
            <div className="bg-gray-600 h-5 w-5 rounded-full"></div>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link, index) => (
            <motion.div
              key={link.url}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + index * 0.1 }}
            >
              <NavLinks link={link} />
            </motion.div>
          ))}
        </div>

        {/* Right side */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 + links.length * 0.1 }}
          className="flex items-center gap-3"
        >
          {isPending ? (
            <div className="hidden md:block w-20 h-9"></div>
          ) : session ? (
            <div className="hidden md:flex items-center gap-3 bg-blue-200 px-3 py-1 rounded-2xl">

              {session.user.image ? (
                <img
                  src={session.user.image}
                  alt={session.user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <span className="text-sm font-semibold text-gray-600">
                  {session.user.name?.charAt(0).toUpperCase()}
                </span>
              )}
              <span className="font-medium text-gray-700">
                {session.user.name}
              </span>

              <button onClick={handleLogout} className="bg-red-400 text-white px-2 py-1 rounded-2xl hover:bg-orange-500 cursor-pointer">
                Logout
              </button>
            </div>
          ) : (
            <Link href={"/login"}>
              <button className="btn btn-primary hidden md:inline-flex">
                Login
              </button>
            </Link>
          )}

          {/* 3-dot menu */}
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

              {session ? (
                <>
                  <li className="text-center font-medium py-1">
                    {session.user.name}
                  </li>
                  <li>
                    <button onClick={handleLogout} className="btn btn-error mt-1">
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link href="/login" className="btn btn-primary mt-1">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </motion.div>

      </div>
    </nav>
  );
};

export default Navbar;