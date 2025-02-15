"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { CgWebsite } from "react-icons/cg";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineContentPaste } from "react-icons/md";
import { LuTriangleRight } from "react-icons/lu";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: "UI Design",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <CgWebsite />,
    link_url: "#",
  },
  {
    id: 2,
    title: "Product Design",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <MdOutlineContentPaste />,
    link_url: "#",
  },
  {
    id: 3,
    title: "Branding",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <LuTriangleRight />,
    link_url: "#",
  },
];

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="pb-20 min-h-screen w-full z-[1] relative md:before:content-[''] lg:before:absolute lg:before:top-0 lg:before:left-0 lg:before:w-1/2 lg:before:h-full before:bg-dark_light before:z-[-1]"
    >
      <div className="container mx-auto">
        <div className="w-full px-3">
          <div className="md:px-10 md:flex-wrap lg:w-[70%] lg:mx-auto">
            <div className="w-full flex flex-col gap-5 md:gap-12 lg:justify-between pt-20 md:justify-center md:flex-row lg:flex-row">
              {services?.map((item) => (
                <div
                  key={item.id}
                  className={`card w-full md:w-[40%] lg:w-1/3 px-8 py-10 flex flex-col gap-3 min-h-80 bg-card ${
                    item.id % 2 !== 0 ? `md:bg-card` : `md:bg-primary`
                  }`}
                >
                  <div
                    className={`text-5xl ${
                      item.id % 2 !== 0 ? `text-primary` : `text-white`
                    }`}
                  >
                    {item.icon}
                  </div>
                  <h2 className="text-3xl font-bold">{item.title}</h2>
                  <p className="text-para text-lg">{item.description}</p>
                  <Link
                    href={item.link_url}
                    className={`flex items-center gap-3 font-bold ${
                      item.id % 2 !== 0 ? `text-primary` : `text-white`
                    }`}
                  >
                    <span>Know more</span>
                    <span>
                      <FaArrowRightLong />
                    </span>
                  </Link>
                </div>
              ))}
            </div>

            <div className="w-full flex flex-col gap-5 items-center mt-20 md:gap-10 lg:flex-row">
              <div className="text-center w-1/2">
                <p className="text-9xl font-sans tracking-tighter font-bold text-primary">
                  12
                </p>
                <p>Years Experience</p>
              </div>
              <div className="w-full grid grid-cols-2 place-items-center gap-5 lg:grid-cols-2">
                {[
                  { number: "60+", text: "Client" },
                  { number: "08", text: "Years" },
                  { number: "122+", text: "Completed Projects" },
                  { number: "10", text: "Achievements" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center bg-card w-full h-full py-10"
                  >
                    <p className="text-5xl font-bold font-sans text-primary">
                      {stat.number}
                    </p>
                    <p>{stat.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
