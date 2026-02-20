"use client";

import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  User,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

const NavLink = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const section = document.getElementById(id);
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.6 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [id]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <a
      href={`#${id}`}
      onClick={handleClick}
      className={`relative px-1 py-1 transition
      ${
        active
          ? "text-blue-600 font-semibold"
          : "text-gray-700 hover:text-blue-600"
      }
      `}
    >
      {children}

      <span
        className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300
        ${active ? "w-full" : "w-0"}
        `}
      />
    </a>
  );
};

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const { user, loading, setUser } = useAuth();

  // scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // click outside dropdown close
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const HandleSignin = () => router.push("/login");
  const HandleRegister = () => router.push("/register");

  const handleLogout = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });

      setUser(null);
      window.location.href = "/";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b shadow-[0_6px_25px_rgba(0,0,0,0.06)]"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-gray-200 bg-white shadow-sm p-[3px]">
            <Image
              src="/kecCircLogo.png"
              alt="KEC logo"
              fill
              priority
              className="object-contain rounded-full group-hover:scale-105 transition duration-300"
            />
          </div>

          <div className="flex flex-col leading-tight ml-1">
            <span className="font-bold text-lg md:text-xl tracking-tight">
              KEC Connect
            </span>
            <span className="text-xs text-muted-foreground -mt-0.5">
              Official Alumni Platform
            </span>
          </div>
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium">
          <NavLink id="home">Home</NavLink>
          <NavLink id="features">Features</NavLink>
          <NavLink id="how">How it works</NavLink>
          <NavLink id="community">Community</NavLink>
          <NavLink id="faq">FAQ</NavLink>
        </nav>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-3">
          {loading ? null : user ? (
            <div className="relative" ref={dropdownRef}>
              {/* avatar button */}
              
              <motion.button
                // whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-3 hover:bg-gray-100 px-3 py-2 rounded-full transition"
              >
                {user?.imageId ? (
                  <img
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${user.imageId}`}
                    alt="profile"
                    className="w-9 h-9 rounded-full border object-cover"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>
                )}

                <span className="font-medium">{user.name}</span>
                <ChevronDown size={18} />
                {/* </button> */}
              </motion.button>

              {/* dropdown */}
              
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute right-0 mt-3 w-56 bg-white border rounded-xl shadow-xl py-2 z-50"                   
                  >
                    <button
                      onClick={() => {
                        router.push("/profile");
                        setDropdownOpen(false);
                      }}
                      className="flex items-center gap-3 px-4 py-2 w-full hover:bg-gray-100 text-sm"
                    >
                      <User size={16} /> Profile
                    </button>

                    <button
                      onClick={() => {
                        router.push("/dashboard");
                        setDropdownOpen(false);
                      }}
                      className="flex items-center gap-3 px-4 py-2 w-full hover:bg-gray-100 text-sm"
                    >
                      <LayoutDashboard size={16} /> Dashboard
                    </button>

                    <div className="border-t my-1" />

                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 px-4 py-2 w-full hover:bg-red-50 text-red-600 text-sm"
                    >
                      <LogOut size={16} /> Logout
                    </button>
                    {/* </div> */}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* )} */}
            </div>
          ) : (
            <>
              <Button variant="ghost" onClick={HandleSignin}>
                Sign in
              </Button>

              <Button
                onClick={HandleRegister}
                className="rounded-full px-6 font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all duration-300"
              >
                Join Alumni
              </Button>
            </>
          )}
        </div>

        {/* MOBILE ICON */}
        <button className="md:hidden" onClick={() => setOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg px-6 py-6 space-y-6">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#community">Community</a>
          <a href="#faq">FAQ</a>

          <div className="flex flex-col gap-3 pt-4 border-t">
            {user ? (
              <>
                <div className="flex items-center gap-3 mb-2">
                  {user?.imageId ? (
                    <img
                      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${user.imageId}`}
                      alt="profile"
                      className="w-9 h-9 rounded-full border object-cover"
                    />
                  ) : (
                    <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                      {user?.name?.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <span className="font-medium">{user.name}</span>
                </div>

                <Button onClick={() => router.push("/profile")}>Profile</Button>

                <Button onClick={() => router.push("/dashboard")}>
                  Dashboard
                </Button>

                <Button variant="destructive" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" onClick={HandleSignin}>
                  Sign in
                </Button>
                <Button onClick={HandleRegister}>Join Alumni</Button>
              </>
            )}
          </div>
        </div>
      )}
    </motion.header>
  );
};
