"use client";

import { motion, useScroll } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import works from "../public/works.json";
import { Button } from "./ui/button";

type WorkProps = {
  display: "selected" | "all";
};

type WorkComponentProps = {
  id: number;
};

const WorkComponent = ({ id }: WorkComponentProps) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.8", "start 0.1"],
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
            src={work.video}
            muted
            loop
            autoPlay
            className="w-screen h-[500px] object-cover overflow-hidden rounded-[20px] md:h-[600px] lg:h-[700px] xl:h-[800px]"
          ></video>
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
        <div className="flex w-full justify-between items-baseline text-primary font-semibold">
          <div className="font-bold">{work.name}</div>
          <div className="flex gap-6 text-sm">
            {work.technologies.map((techno, index) => (
              <p className="hidden lg:flex" key={`${id}-${index}`}>
                {techno}
              </p>
            ))}
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
      </div>
    </motion.div>
  );
};

const Work = ({ display }: WorkProps) => {
  let workDisplayed = null;
  if (display === "selected") {
    const work = works.filter((work) => work.homepage === true);
    workDisplayed = work ? (
      work.map((work) => <WorkComponent id={work.id} key={work.id} />).reverse()
    ) : (
      <div>Work not found</div>
    );
  } else if (display === "all") {
    workDisplayed = works
      .map((work) => <WorkComponent id={work.id} key={work.id} />)
      .reverse();
  }

  return <div>{workDisplayed}</div>;
};

export default Work;
