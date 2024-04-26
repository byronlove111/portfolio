"use client";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { motion, useScroll } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { useRef } from "react";
import { inter, playfair } from "../fonts";

const Div1 = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.8", "start 0.7"],
  });
  return (
    <>
      <motion.div
        ref={element}
        className={`${playfair.className} text-lg mb-12 sm:text-3xl mt-24 lg:mb-36 lg:text-[42px] text-primary lg:mt-32 leading-normal sm:leading-snug lg:leading-tight`}
        style={{ opacity: scrollYProgress }}
      >
        <div>
          <HoverCard>
            <HoverCardTrigger asChild>
              <span
                className={`${inter.className} underline font-bold cursor-pointer`}
              >
                @AbdalMalikBourassi
              </span>
            </HoverCardTrigger>
            <HoverCardContent
              className={`${inter.className} min-w-[400px] bg-background shadow-sm rounded-2xl px-6 py-6 `}
            >
              <div className="flex justify-center space-x-4">
                <Avatar>
                  <AvatarImage
                    className="rounded-full w-14 h-auto"
                    src="https://github.com/maliksynt.png"
                  />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">
                    Abd'al-Malik Bourassi
                  </h4>
                  <p className="text-sm">21 y/o developer, living in Paris.</p>
                  <div className="flex items-center pt-2">
                    <CalendarDays className="mr-2 h-4 w-4" />{" "}
                    <span className="text-xs text-muted-foreground ">
                      Started crafting web experiences in 2023
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          , I craft smooth and engaging user experiences by harnessing the
          latest technological advancements in web development.
        </div>
      </motion.div>
    </>
  );
};

const Div2 = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.8", "start 0.7"],
  });

  return (
    <>
      <motion.div
        ref={element}
        className={`${playfair.className} text-lg mb-12 sm:text-3xl  lg:mb-36 lg:text-[42px] text-primary lg:mt-32 leading-normal sm:leading-snug lg:leading-tight`}
        style={{ opacity: scrollYProgress }}
      >
        My collaborations with businesses and freelancers aim to deliver
        <span className={`${inter.className} font-bold `}>
          {" "}
          tailored solutions
        </span>{" "}
        that successfully meet their digital challenges.
      </motion.div>
    </>
  );
};

const Div3 = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.8", "start 0.7"],
  });

  return (
    <>
      <motion.div
        ref={element}
        className={`${playfair.className} text-lg  sm:text-3xl lg:text-[42px] text-primary lg:mt-32 lg:mb-36 leading-normal sm:leading-snug lg:leading-tight`}
        style={{ opacity: scrollYProgress }}
      >
        But don't just take my words for it, see what
        <span className={`${inter.className} font-bold `}> others</span> have to
        say:
      </motion.div>
    </>
  );
};

const Div4 = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.8", "start 0.7"],
  });

  return (
    <>
      <motion.div
        ref={element}
        className={`${inter.className} gap-4 text-sm  mt-12 lg:mb-0 lg:text-2xl text-primary lg:mt-32 leading-normal sm:leading-snug lg:leading-tight`}
        style={{ opacity: scrollYProgress }}
      >
        <p className="lg:w-11/12">
          “Malik has stood out not only for his ability to quickly grasp new
          concepts but also for his innovative spirit that adds significant
          value to every project he touches. His passion for web development and
          commitment to excellence are truly inspiring.”
        </p>
        <p className="pt-6 lg:pt-10">
          <span className={`${inter.className} font-bold `}>
            {" "}
            Olivier Rassi
          </span>{" "}
          - Senior full-stack engineer
        </p>
      </motion.div>
    </>
  );
};

const Div5 = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.8", "start 0.7"],
  });

  return (
    <>
      <motion.div
        ref={element}
        className={`${inter.className} gap-4 text-sm mb-16 mt-12 lg:mb-36 lg:text-2xl text-primary lg:mt-32 leading-normal sm:leading-snug lg:leading-tight`}
        style={{ opacity: scrollYProgress }}
      >
        <p className="lg:w-11/12">
          "Having guided Malik through the intricacies of React development, I
          can attest to his remarkable commitment to continuous improvement. He
          has become a competent developer whose creativity and autonomy are
          major assets to any team or project."
        </p>
        <p className="pt-6 lg:pt-10">
          <span className={`${inter.className} font-bold `}>
            {" "}
            Jeremy Claudant
          </span>{" "}
          - Senior full-stack developer
        </p>
      </motion.div>
    </>
  );
};

const Div6 = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.8", "start 0.7"],
  });

  return (
    <>
      <motion.div
        ref={element}
        className={`${playfair.className} text-lg  sm:text-3xl lg:text-[42px] text-primary lg:mt-32 leading-normal sm:leading-snug lg:leading-tight`}
        style={{ opacity: scrollYProgress }}
      >
        <p className="lg:w-9/12">
          I'm familiar with
          <span className={`${inter.className} font-bold `}>
            {" "}
            these tools:
          </span>{" "}
        </p>
      </motion.div>
    </>
  );
};

const Div7 = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.8", "start 0.7"],
  });

  return (
    <>
      <motion.div
        ref={element}
        className={`${inter.className} flex justify-between text-xs md:text-sm mt-12 lg:mb-0 lg:text-xl text-primary lg:mt-32 leading-normal sm:leading-snug lg:leading-tight`}
        style={{ opacity: scrollYProgress }}
      >
        <ul className="flex flex-col gap-4 md:gap-6">
          <li>React</li>
          <li>NextJS</li>
          <li>Typescript</li>
          <li>Tailwind</li>
        </ul>
        <ul className="flex flex-col gap-4 md:gap-6">
          <li>Node</li>
          <li>Express</li>
          <li>MongoDB</li>
        </ul>
        <ul className="flex flex-col gap-4 md:gap-6">
          <li>Vercel</li>
          <li>Photoshop</li>
          <li>Figma</li>
        </ul>
      </motion.div>
    </>
  );
};

const Paragraph = () => {
  return (
    <div className="flex flex-col">
      <Div1 />
      <Div2 />
      <Div3 />
      <Div4 />
      <Div5 />
      <Div6 />
      <Div7 />
    </div>
  );
};

export default Paragraph;
