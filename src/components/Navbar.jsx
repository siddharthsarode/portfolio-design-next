"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { RiMenu2Fill, RiCloseLargeFill } from "react-icons/ri";
import gsap from "gsap";

const navLinks = [
  { name: "Home", link: "#" },
  { name: "Project", link: "#" },
  { name: "About", link: "#" },
  { name: "Contact", link: "#" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const menuItemsRef = useRef([]);

  useEffect(() => {
    // Navbar animation
    gsap.from(navRef.current, {
      duration: 1,
      y: -50,
      opacity: 0,
      ease: "power3.out",
    });

    // Menu items staggered animation
    gsap.from(menuItemsRef.current, {
      duration: 0.8,
      opacity: 0,
      y: 20,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        duration: 0.5,
        x: 0,
        ease: "power3.out",
      });
      gsap.fromTo(
        menuItemsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.2, ease: "power3.out" }
      );
    } else {
      gsap.to(menuRef.current, {
        duration: 0.5,
        x: "-100%",
        ease: "power3.inOut",
      });
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav ref={navRef}>
      <div className="container mx-auto">
        <div className="px-3 md:px-10 py-3 flex justify-between items-center">
          <div className="logo">
            <h1 className="text-3xl md:text-4xl text-primary font-bold font-[Actor]">
              Agetha
            </h1>
          </div>
          <div className="hidden right sm:flex items-center gap-7">
            {navLinks.map((item, idx) => (
              <Link
                key={idx}
                ref={(el) => (menuItemsRef.current[idx] = el)}
                className="hover:text-primary transition-all ease-in-out duration-75"
                href={item.link}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* menu btn */}
          <div className="text-xl md:hidden" onClick={toggleMenu}>
            <RiMenu2Fill />
          </div>

          {/* Side menu */}
          <div
            ref={menuRef}
            className="fixed top-0 left-0 w-full h-screen bg-black z-50 px-5 py-5 transition-all duration-300 -translate-x-full"
          >
            <div className="flex items-center justify-between">
              <p className="text-3xl">Menu</p>
              <div className="text-xl" onClick={toggleMenu}>
                <RiCloseLargeFill />
              </div>
            </div>
            <div className="mt-10 text-5xl h-[80vh] flex flex-col items-center justify-center gap-10">
              {navLinks.map((item, idx) => (
                <Link
                  key={idx}
                  ref={(el) => (menuItemsRef.current[idx] = el)}
                  className="hover:text-primary transition-all ease-in-out duration-75"
                  href={item.link}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
