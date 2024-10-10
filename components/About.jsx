"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useRef, useState } from "react";
import SpotifyLoading from "./SpotifyLoading";

import expertise from "@/public/data/expertise";
import axios from "axios";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { MdDateRange } from "react-icons/md";
import SvgRenderer from "./SvgRenderer";
import icons from "./icon/Skill";
import Link from "next/link";

const leftToRight = {
  initial: {
    x: -200,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 50,
    },
  },
};
const rightToLeft = {
  initial: {
    x: 200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 50,
    },
  },
};

const About = () => {
  const divRef = useRef(null);
  const [divHeight, setDivHeight] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  // const [spotifyData, setSpotifyData] = useState(null);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get("/api/spotify", {
    //       headers: {
    //         "Cache-Control": "no-cache",
    //         Pragma: "no-cache",
    //         Expires: "0",
    //       },
    //     });
    //     setSpotifyData(response.data);
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };

    // fetchData();

    const updateDimensions = () => {
      setScreenHeight(window.innerHeight - 72);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateDimensions);

      updateDimensions();

      return () => {
        window.removeEventListener("resize", updateDimensions);
      };
    }
  }, []);

  useEffect(() => {
    if (divRef.current && screenHeight > divRef.current.clientHeight) {
      const height = divRef.current.clientHeight;
      setDivHeight(height / 2);
    }
  }, [divRef, screenHeight]);

  return (
    <section className="flex flex-wrap py-5 container" id="about">
      <div className="w-full md:w-1/2">
        <motion.h1
          variants={leftToRight}
          initial="initial"
          whileInView="animate"
          className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl"
        >
          About Me
        </motion.h1>
        <motion.h2
          variants={leftToRight}
          initial="initial"
          whileInView="animate"
          className="pb-2 mt-8 text-3xl font-semibold tracking-tight transition-colors border-b md:mt-10 scroll-m-20 first:mt-0"
        >
          Hello, I&apos;m Abduvali Kozimov
        </motion.h2>
        <motion.p
          variants={leftToRight}
          initial="initial"
          whileInView="animate"
          className="leading-7 [&:not(:first-child)]:mt-6"
        >
         I am a Front-End Developer with 1+ experience in developing responsive and visually appealing websites using modern technologies like Tailwind CSS, JavaScript and React JS. I have worked on several real-world projects where I have been instrumental in creating and designing user interfaces from scratch. My skills include HTML, CSS, Tailwind CSS, SCSS, JavaScript, React JS and Git. I have successfully delivered projects for clients in a variety of industries, providing high-quality, efficient, and scalable code.
        </motion.p>
        <motion.h2
          variants={leftToRight}
          initial="initial"
          whileInView="animate"
          className="pb-2 mt-10 text-3xl font-semibold tracking-tight transition-colors border-b scroll-m-20 first:mt-0"
        >
          Experties Area
        </motion.h2>
        {expertise.map((item, index) => (
          <motion.div
            key={index}
            className="mt-6"
            variants={leftToRight}
            initial="initial"
            whileInView="animate"
          >
            <Card className=" dark:bg-cardBg">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>
                  <span className="flex flex-wrap gap-3 mt-1 text-lg">
                    {item.icons.map((Icon, i) => (
                      <Icon key={i} />
                    ))}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="w-full mt-8 md:w-1/2 md:mt-0">
        <div
          ref={divRef}
          className="sticky flex items-center justify-center overflow-hidden"
          style={{
            top: divHeight ? `calc(50% - ${divHeight}px + 32px)` : "80px",
          }}
        >
          <motion.div
            variants={rightToLeft}
            initial="initial"
            whileInView="animate"
            className="w-full space-y-5 md:w-4/5 "
          >
            {/* <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <div>
                <p className="mb-3 font-semibold leading-none tracking-wider text-lg md:text-xl font-oswald border-b pb-2">
                  Currently Coding & Listening to:
                </p>
                <div className="w-80 h-[100px]">
                  {spotifyData && spotifyData.startsWith("<svg") ? (
                    <SvgRenderer svgContent={spotifyData} />
                  ) : spotifyData && spotifyData.startsWith("<!DOCTYPE") ? (
                    <div className="w-full h-full flex justify-center items-center border rounded-md text-gray-300 font-oswald">
                      <p>Advertisements are playing on Spotify.</p>
                    </div>
                  ) : (
                    <SpotifyLoading />
                  )}
                </div>
              </div>
            </motion.div> */}

            <Marquee pauseOnHover>
              <ul className="flex gap-5 pr-5 text-5xl flex-nowrap cursor-grabbing">
                {icons.map((IconSlider, iconIndex) => (
                  <li key={iconIndex}>
                    <IconSlider />
                  </li>
                ))}
              </ul>
            </Marquee>
            <Tabs defaultValue="experience">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
              </TabsList>
              <TabsContent value="experience">
                <Card>
                  <CardHeader>
                    <CardTitle>Web Development</CardTitle>
                    <CardDescription>
                      I have gained extensive experience in front-end
                      development through various successful projects.
                      Proficient in HTML, CSS, and JavaScript, I specialize in
                      creating interactive and responsive web applications using
                      React JS.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
                      <Link
                        href="#"
                        className="space-y-2 group relative "
                        rel="noopener noreferrer"
                        aria-label="AIL"
                      >
                        <p className="flex items-center gap-1 text-sm">
                          <MdDateRange />3 Sept 2023 - 15 Avg 2024
                        </p>
                        <h3 className="font-semibold leading-none tracking-wide ">
                          Intern Front-End Developer
                        </h3>
                        <p className="line-clamp-3">Developed and deployed multiple web applications using HTML, CSS, JavaScript, and React JS.
                        </p>
                        <div className="absolute w-0 transition-all duration-500 ease-primary group-hover:w-full h-0.5 bg-violet-500 rounded-md -bottom-2"></div>
                      </Link>
                      <Link
                        href="#"
                        className="space-y-2 group relative"
s                        rel="noopener noreferrer"
                        aria-label="SJI"
                      >
                        <p className="flex items-center gap-1 text-sm">
                          <MdDateRange />3 June 2024 - Present
                        </p>
                        <h3 className="font-semibold leading-none tracking-wide ">
                          Intern Frontend Developer
                        </h3>
                        <p className="line-clamp-3">Integrated real-time analytics and APIs, ensuring smooth communication between front-end components and back-end systems.
                        </p>
                        <div className="absolute w-0 transition-all duration-500 ease-primary group-hover:w-full h-0.5 bg-violet-500 rounded-md -bottom-2"></div>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="education">
                <Card>
                  <CardHeader>
                    <CardTitle>Wester IT Academy</CardTitle>
                    <CardDescription>I gained deep knowledge of React JS and learned how to use it effectively.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Link
                      href="https://westeracademy.uz/"
                      className="space-y-2 group relative"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="AIUB"
                    >
                      <p className="flex items-center gap-1 text-sm">
                        <MdDateRange />
                        2023 - 2024
                      </p>
                      <h3 className="font-semibold leading-none tracking-wide">
                        Wester IT Academy is an educational institution on
                        modern IT technologies
                      </h3>
                      <p>
                        At the academy, students learn core such as IT &
                        English.
                      </p>
                      <div className="absolute w-0 transition-all duration-500 ease-primary group-hover:w-full h-0.5 bg-violet-500 rounded-md -bottom-2"></div>
                    </Link>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
