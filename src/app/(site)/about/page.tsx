import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Counter from "@/components/Home/Counter";
import Progresswork from "@/components/Home/WorkProgress";

export const metadata: Metadata = {
    title: "About | Emmanuel Badibanga",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About Me" },
  ];

  return (
    <>
      <HeroSub
        title="About Me"
        description="I am a Project Management Practitioner, Software Engineer, and Data Analyst with experience in telecom and digital transformation. I specialize in optimizing business processes, delivering scalable solutions, and leveraging data to drive strategic decision-making and accelerate time-to-market."
        breadcrumbLinks={breadcrumbLinks}
      />

      <Counter isColorMode={true} />
      <Progresswork isColorMode={true} />
    </>
  );
};

export default page;