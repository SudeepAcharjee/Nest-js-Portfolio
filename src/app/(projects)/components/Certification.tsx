"use client";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import React, { useEffect } from "react";

const Certification = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = [
    {
      title: "Mastering Data Structures and Algorithms Using C and c++",
      link: "",
      description:
        "I have earned the Mastering Data Structures and Algorithms Using C and c++ Certificate from Udemy.demonstrating my foundational knowledge of the Java programming language. This certification covers essential topics such as classes, data structures, inheritance, and exception handling. It validates my ability to write and understand basic C++ code, showcasing my proficiency in both C and C++.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/Images/course01.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Full-Stack Web Developer HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps",
      link: "",
      description:
        "I have earned the Full-Stack Web Developer Certificate from Udemy,HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps.This certification showcases my skills in building web applications using React, CSS, and JavaScript. It validates my proficiency in creating dynamic and responsive user interfaces, ensuring best practices and efficient performance in Mern stack development",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/Images/course02.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
   
  ];

  return (
    <div>
      <div className="sm:px-12 py-6">
        <StickyScroll content={content} />
      </div>
    </div>
  );
};

export default Certification;
