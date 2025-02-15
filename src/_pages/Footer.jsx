"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/Button";
import Link from "next/link";
import { FaGithub, FaInstagram, FaHeart } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { name: "Home", link: "#" },
  { name: "Project", link: "#" },
  { name: "About", link: "#" },
  { name: "Contact", link: "#" },
];

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <footer id="footer" className="z-[199] mt-10" ref={footerRef}>
      <div className="container mx-auto">
        <div className="px-3 lg:w-[70%] lg:mx-auto">
          <div className="bg-card flex flex-col md:px-10 lg:flex-row lg:items-center justify-between lg:p-10 px-5 py-10 gap-10">
            <div className="lg:w-[60%]">
              <h3 className="text-3xl font-bold pb-5 md:text-5xl">
                Let's work together on your next project
              </h3>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam laudantium quidem id commodi eum quod?
              </p>
            </div>
            <div>
              <Button text="Contact" />
            </div>
          </div>
        </div>

        <div className="w-full mt-5 flex justify-center items-center py-5">
          <div className="flex gap-8">
            {navLinks?.map((link) => (
              <Link key={link.name} href={link.link}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col gap-5 justify-between items-center px-3 py-5 bg-card md:flex-row md:px-10">
          <div>
            <h1 className="text-3xl md:text-4xl text-primary font-bold font-[Actor]">
              Agetha
            </h1>
          </div>
          <div className="flex items-center text-xl gap-7">
            <Link target="_black" href="https://github.com/siddharthsarode">
              <FaGithub />
            </Link>
            <Link
              target="_black"
              href="https://www.linkedin.com/in/siddharth-sarode-b7b6b724b/"
            >
              <FaLinkedin />
            </Link>
            <Link href="https://www.instagram.com/siddharth_3555/">
              <FaInstagram />
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <FaHeart className="text-primary" />
            <p>Developed by Siddharth</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
