import React from "react";
import Section from "./Section";
import { curve, robot, heroBackground } from "../assets";

const Hero = () => {
  return (
    <>
      <Section
        className="pt-[12rem] -mt-[1.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
      >
        <div className="container relative">
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
            <h1 className="h1 mb-6">
              Microsoft Learn Student
              <span className="inline-block relative">
                Chapter
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-1/2"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>{" "}
              <br />
            </h1>
            <p className="text-lg text-text-secondary text-gray-400">
              AMITY UNIVERSITY
            </p>
            <p className="text-2xl mt-5 text-gray-400 text-text-secondary">
              Be A Force For Good.
            </p>
          </div>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="flex justify-center items-center aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full max-w-[400px] h-auto"
                  width={400}
                  height={490}
                  alt="AI"
                />
              </div>
             
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Hero;
