"use client";

import { motion, useScroll } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useRef } from "react";
import works from "../public/works.json";
import { Button } from "./ui/button";

interface WorkProps {
  display: "selected" | "all";
}

interface WorkComponentProps extends WorkProps {
  id: number;
}

const FallbackSpinner = () => (
  <div className="flex justify-center items-center h-[500px]">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const WorkComponent = ({ id, display }: WorkComponentProps) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.8", "start 0.5"],
  });
  const work = works.find((work) => work.id === id);

  if (!work) {
    return <div>work not found</div>;
  }
  return (
    <motion.div ref={element} style={{ opacity: scrollYProgress }}>
      <div className="relative flex justify-center flex-col mb-12">
        <Link href={`/selectedworks/${work.id}`}>
          <video
            playsInline={true}
            preload="metadata"
            loop
            autoPlay
            className={`w-screen h-[500px] object-cover overflow-hidden rounded-[20px] ${
              display === "selected" ? "md:h-[600px] lg:h-[700px]" : null
            } xl:h-[${display === "all" ? "600px" : "800px"}]`}
          >
            <source src={work.video} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <Image
            src={work.cover}
            layout="responsive"
            height={800}
            width={1000}
            alt="cover image"
            quality={85}
            style={{
              zIndex: "10",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              height: "auto",
              maxWidth: "80%",
              minWidth: "275px",
            }}
          />
        </Link>
        {display === "selected" ? (
          <div className="flex w-full justify-between items-baseline text-primary font-semibold">
            <div className="font-bold">{work.name}</div>
            <div className="flex gap-6 text-sm justify-center">
              {work.technologies
                .map((techno, index) => (
                  <p className="hidden lg:flex" key={`${id}-${index}`}>
                    {techno}
                  </p>
                ))
                .splice(0, 4)}
            </div>
            <div>
              <Link href={`/selectedworks/${work.id}`}>
                <Button
                  variant="linkBold"
                  size="transparent"
                  className="flex gap-2"
                >
                  view project <ArrowUpRight />
                </Button>
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
};

const Work = ({ display }: WorkProps) => {
  let workDisplayed = null;
  if (display === "selected") {
    const work = works.filter((work) => work.homepage === true);
    workDisplayed = work ? (
      work
        .map((work) => (
          <WorkComponent id={work.id} key={work.id} display={display} />
        ))
        .reverse()
    ) : (
      <div>Work not found</div>
    );
  } else if (display === "all") {
    // Display all works page
    workDisplayed = works
      .map((work) => {
        const element = useRef(null);
        const { scrollYProgress } = useScroll({
          target: element,
          offset: ["start 0.8", "start 0.6"],
        });
        return (
          <div
            className="flex flex-col-reverse lg:flex-row justify-between mb-12"
            key={work.id}
          >
            <motion.div ref={element} style={{ opacity: scrollYProgress }}>
              <div className="text-primary flex flex-col justify-start h-full pb-12">
                <Link href={`/selectedworks/${work.id}`}>
                  <h2 className={"font-bold text-3xl"}>{work.name}_</h2>
                </Link>
                <h3 className="text-sm mt-6 md:mt-12">technologies_</h3>
                <ul className="mt-2">
                  {work.technologies
                    .map((techno, index) => (
                      <li className="font-bold text-sm" key={index}>
                        {techno}
                      </li>
                    ))
                    .splice(0, 5)}
                </ul>
                <h3 className="text-sm mt-4 md:mt-8">features_</h3>
                <ul className="mt-2">
                  {work.features
                    .map((feature, index) => (
                      <li className="font-bold text-sm" key={index}>
                        {feature}
                      </li>
                    ))
                    .splice(0, 5)}
                </ul>
                <Link
                  href={`/selectedworks/${work.id}`}
                  className="flex gap-2 mt-8 md:mt-16 hover:underline underline-offset-4 font-bold"
                >
                  view project <ArrowUpRight />
                </Link>
              </div>
            </motion.div>
            <div className="lg:w-6/12 xl:w-8/12">
              <WorkComponent id={work.id} key={work.id} display={display} />
            </div>
          </div>
        );
      })
      .reverse();
  }

  return <div>{workDisplayed}</div>;
};

export default Work;
