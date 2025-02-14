import Image from "next/image";
import React from "react";
import modelImg from "@/images/model.png";
import Button from "@/components/Button";

const Home = () => {
  return (
    <section id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-5 px-3 pt-10 md:pt-20  md:gap-20 md:items-center md:justify-center md:flex-col lg:flex-row">
          <div>
            <Image src={modelImg} alt="Agetha Image" width={500} height={500} />
          </div>
          <div className="md:px-10 lg:w-[40%]">
            <p className="text-xl text-primary font-semibold">I am Agetha</p>
            <h1 className="text-4xl md:text-6xl tracking-tight font-bold">
              Visual Designer
            </h1>
            <p className="mt-3 text-para text-lg leading-2 md:px-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              aliquam odio facilis natus earum nulla reiciendis assumenda
              adipisci veniam explicabo! Lorem ipsum dolor sit.
            </p>
            <div className="mt-4">
              <Button text="About Me" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
