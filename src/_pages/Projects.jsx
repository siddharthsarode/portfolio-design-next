import Button from "@/components/Button";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import project1 from "@/images/p1.jpg";
import project2 from "@/images/p2.jpg";
import project3 from "@/images/p3.jpg";
import project4 from "@/images/p4.jpg";
import Image from "next/image";

const projects = [
  { id: 1, title: "AI Driven", link_url: "#", image: project1 },
  { id: 2, title: "Education", link_url: "#", image: project2 },
  { id: 3, title: "Summit Portfolio", link_url: "#", image: project3 },
  { id: 4, title: "Story Scape", link_url: "#", image: project4 },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen w-full mt-14 relative  before:content-[''] before:absolute before:bottom-[-15%] before:left-0 before:bg-dark_light before:z-[-91] before:w-full before:h-[35rem]"
    >
      <div className="container mx-auto">
        <div className="px-3 md:px-10 lg:w-[70%] lg:mx-auto">
          <div className="flex flex-col gap-10 items-center justify-between md:flex-row">
            <div>
              <h2 className="text-4xl font-bold leading-[1.6]">
                Featured Projects
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div>
              <Button text="View All" />
            </div>
          </div>

          {/* card container */}
          <div className="py-14 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {projects?.map((item) => (
              <div key={item.id} id="project-card">
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
                    className={`flex items-center gap-3 text-primary font-bold`}
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
