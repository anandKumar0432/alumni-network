// "use client";

// import { Button } from "@/components/ui/button";
// import {
// NavigationMenu,
// NavigationMenuContent,
// NavigationMenuItem,
// NavigationMenuLink,
// NavigationMenuList,
// NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import { Menu, MoveRight, X } from "lucide-react";
// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// export const Header = () => {
// const navigationItems = [
//     {
//     title: "Home",
//     href: "/",
//     description: "",
//     },
//     {
//     title: "College",
//     description: "All the alumni assembles here.",
//     items: [
//         {
//         title: "About us",
//         href: "/about",
//         },
//         {
//         title: "Contact us",
//         href: "/contact",
//         },
//     ],
//     },
// ];

// const [isOpen, setOpen] = useState(false);
// const router = useRouter();

// const HandleSignin = ()=>{
//     router.push('/login');
// }
// const HandleRegister = ()=>{
//     router.push('/register')
// }
// return (
//     <header className="w-full z-40 fixed top-0 left-0 bg-background border-b px-3">
//     <div className="container relative mx-auto min-h-8 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
//         <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
//         <NavigationMenu className="flex justify-start items-start">
//             <NavigationMenuList className="flex justify-start gap-4 flex-row">
//             {navigationItems.map((item) => (
//                 <NavigationMenuItem key={item.title}>
//                 {item.href ? (
//                     <Link href={item.href}>
//                         <NavigationMenuLink>
//                             <Button variant="ghost">{item.title}</Button>
//                         </NavigationMenuLink>
//                     </Link>
//                 ) : (
//                     <>
//                     <NavigationMenuTrigger className="font-medium text-sm">
//                         {item.title}
//                     </NavigationMenuTrigger>
//                     <NavigationMenuContent className="!w-[450px] p-4">
//                         <div className="flex flex-col lg:grid grid-cols-2 gap-4">
//                         <div className="flex flex-col h-full justify-between">
//                             <div className="flex flex-col">
//                             <p className="text-base">{item.title}</p>
//                             <p className="text-muted-foreground text-sm">
//                                 {item.description}
//                             </p>
//                             </div>
//                         </div>
//                         <div className="flex flex-col text-sm h-full justify-end">
//                             {item.items?.map((subItem) => (
//                             <NavigationMenuLink
//                                 href={subItem.href}
//                                 key={subItem.title}
//                                 className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
//                             >
//                                 <span>{subItem.title}</span>
//                                 <MoveRight className="w-4 h-4 text-muted-foreground" />
//                             </NavigationMenuLink>
//                             ))}
//                         </div>
//                         </div>
//                     </NavigationMenuContent>
//                     </>
//                 )}
//                 </NavigationMenuItem>
//             ))}
//             </NavigationMenuList>
//         </NavigationMenu>
//         </div>
//         <div className="flex lg:justify-center">
//         <p className="font-semibold px-2">KEC CONNECT</p>
//         </div>
//         <div className="flex justify-end w-full gap-4">
//         <Button variant="outline" onClick={HandleSignin}>Sign in</Button>
//         <Button onClick={HandleRegister}>Get started</Button>
//         </div>
//         <div className="flex w-12 shrink lg:hidden items-end justify-end">
//         <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
//             {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//         </Button>
//         {isOpen && (
//             <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
//             {navigationItems.map((item) => (
//                 <div key={item.title}>
//                 <div className="flex flex-col gap-2">
//                     {item.href ? (
//                     <Link
//                         href={item.href}
//                         className="flex justify-between items-center"
//                     >
//                         <span className="text-lg">{item.title}</span>
//                         <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
//                     </Link>
//                     ) : (
//                     <p className="text-lg">{item.title}</p>
//                     )}
//                     {item.items &&
//                     item.items.map((subItem) => (
//                         <Link
//                         key={subItem.title}
//                         href={subItem.href}
//                         className="flex justify-between items-center"
//                         >
//                         <span className="text-muted-foreground">
//                             {subItem.title}
//                         </span>
//                         <MoveRight className="w-4 h-4 stroke-1" />
//                         </Link>
//                     ))}
//                 </div>
//                 </div>
//             ))}
//             </div>
//         )}
//         </div>
//     </div>
//     </header>
// );
// };





"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";


const NavLink = ({ id, children }: { id: string; children: React.ReactNode }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const section = document.getElementById(id);
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.6 }
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
      ${active ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}
      `}
    >
      {children}

      {/* underline */}
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
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const HandleSignin = () => router.push("/login");
  const HandleRegister = () => router.push("/register");

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
      ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b shadow-[0_6px_25px_rgba(0,0,0,0.06)]"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full 
          overflow-hidden border-2 border-gray-200 bg-white shadow-sm p-[3px]">
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

        <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium">
          <NavLink id="home">Home</NavLink>
          <NavLink id="features">Features</NavLink>
          <NavLink id="how">How it works</NavLink>
          <NavLink id="community">Community</NavLink>
          <NavLink id="faq">FAQ</NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" onClick={HandleSignin}>
            Sign in
          </Button>

          <Button
            onClick={HandleRegister}
            className="rounded-full px-6 font-medium
            bg-gradient-to-r from-blue-600 to-indigo-600
            hover:from-blue-700 hover:to-indigo-700
            shadow-md hover:shadow-lg
            transition-all duration-300"
          >
            Join Alumni
          </Button>
        </div>

        {/* MOBILE */}
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
            <Button variant="outline" onClick={HandleSignin}>
              Sign in
            </Button>
            <Button onClick={HandleRegister}>
              Join Alumni
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
