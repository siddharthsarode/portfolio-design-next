"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import modelImg from "@/images/model.png";
import Button from "@/components/Button";

const Home = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.from(imageRef.current, {
      duration: 1,
      opacity: 0,
      scale: 0.8,
      ease: "power3.out",
    });

    gsap.from(textRef.current, {
      duration: 1,
      x: 100,
      opacity: 0,
      delay: 0.5,
      ease: "power3.out",
    });

    gsap.from(buttonRef.current, {
      duration: 0.8,
      scale: 0.5,
      opacity: 0,
      delay: 1,
      ease: "back.out(1.7)",
    });
  }, []);

  return (
    <section id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-5 px-3 pt-10 md:pt-20 md:gap-20 md:items-center md:justify-center md:flex-col lg:flex-row">
          <div ref={imageRef}>
            <Image src={modelImg} alt="Agetha Image" width={500} height={500} />
          </div>

          <div className="md:px-10 lg:w-[40%]" ref={textRef}>
            <p className="text-xl text-primary font-semibold">I am Agetha</p>
            <h1 className="text-4xl md:text-6xl tracking-tight font-bold">
              Visual Designer
            </h1>
            <p className="mt-3 text-para text-lg leading-2 md:px-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              aliquam odio facilis natus earum nulla reiciendis assumenda
              adipisci veniam explicabo! Lorem ipsum dolor sit.
            </p>
            <div className="mt-4" ref={buttonRef}>
              <Button text="About Me" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
