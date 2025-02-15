"use client";
import Button from "@/components/Button";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import project1 from "@/images/p1.jpg";
import project2 from "@/images/p2.jpg";
import project3 from "@/images/p3.jpg";
import project4 from "@/images/p4.jpg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, title: "AI Driven", link_url: "#", image: project1 },
  { id: 2, title: "Education", link_url: "#", image: project2 },
  { id: 3, title: "Summit Portfolio", link_url: "#", image: project3 },
  { id: 4, title: "Story Scape", link_url: "#", image: project4 },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);
  const projectRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none reverse",
      },
    });

    // Title & Button animation
    tl.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out",
    }).from(
      buttonRef.current,
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5"
    ); // Starts slightly earlier

    // Project Cards animation
    projectRefs.current.forEach((el, index) => {
      gsap.from(el, {
        opacity: 0,
        y: 100,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      });
    });
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen w-full mt-14 relative before:content-[''] before:absolute before:bottom-[-15%] before:left-0 before:bg-dark_light before:z-[-91] before:w-full before:h-[35rem]"
    >
      <div className="container mx-auto">
        <div className="px-3 md:px-10 lg:w-[70%] lg:mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-10 items-center justify-between md:flex-row">
            <div ref={titleRef}>
              <h2 className="text-4xl font-bold leading-[1.6]">
                Featured Projects
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div ref={buttonRef}>
              <Button text="View All" />
            </div>
          </div>

          {/* Projects Grid */}
          <div className="py-14 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {projects.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => (projectRefs.current[index] = el)}
              >
                <div className="bg-card w-full py-14">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-[90%] h-64 mx-auto rounded-xl"
                  />
                </div>
                <div className="pt-7 px-5">
                  <h3 className="text-3xl font-bold">{item.title}</h3>
                  <Link
                    href={"#"}
                    className="flex items-center gap-3 text-primary font-bold"
                  >
                    <span>Know more</span>
                    <span>
                      <FaArrowRightLong />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
