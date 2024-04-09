import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { inter, playfair } from "../fonts";

export default function Landing() {
  const [hoverWho, setHoverWho] = useState(false);
  const [hoverWhat, setHoverWhat] = useState(false);
  const [hoverWhere, setHoverWhere] = useState(false);
  const [toggleWho, setToggleWho] = useState(false);
  const [toggleWhat, setToggleWhat] = useState(false);
  const [toggleWhere, setToggleWhere] = useState(false);

  return (
    <div>
      {" "}
      <h1
        className={`${playfair.className} text-xl mb-24 sm:text-3xl mt-24 lg:mb-0 lg:text-5xl text-primary lg:mt-32 leading-normal sm:leading-snug lg:leading-tight`}
      >
        <span
          className={`${
            hoverWho || toggleWho ? "text-browny" : "text-primary"
          } transition-color duration-300 ease-in-out`}
        >
          Front-end{" "}
          <span className={`${inter.className} font-bold`}>React</span>{" "}
          developer,
          <br />
          building web apps using NextJS and Typescript.
        </span>
        <br />
        <span
          className={`${
            hoverWhat || toggleWhat ? "text-browny" : "text-primary"
          } transition-color duration-300 ease-in-out`}
        >
          Open to work &{" "}
          <span className={`${inter.className} font-bold`}>freelance.</span>
        </span>
        <br />
        <span className="lg:hidden">
          -Based in
          <span className={`${inter.className} font-bold`}> Paris</span>
        </span>
      </h1>
      <div className="mt-24 md:w-52 lg:hidden">
        <Button
          variant="default"
          size="default"
          className="w-full flex justify-between"
          asChild
        >
          <Link href="https://calendly.com/fr" target="_blank">
            book a free call <ArrowUpRight />
          </Link>
        </Button>
      </div>
      <div className="hidden lg:flex justify-between mt-32 items-baseline">
        <div className="flex gap-6">
          <Button
            variant="smallButton"
            size="small"
            onMouseEnter={() => setHoverWho(true)}
            onMouseLeave={() => setHoverWho(false)}
            onClick={() => setToggleWho(!toggleWho)}
            className={`${
              hoverWho || toggleWho
                ? " text-browny border-browny"
                : "bg-background text-primary border-primary"
            } transition-color duration-300 ease-in-out`}
          >
            who ?
          </Button>
          <Button
            variant="smallButton"
            size="small"
            onMouseEnter={() => setHoverWhat(true)}
            onMouseLeave={() => setHoverWhat(false)}
            onClick={() => setToggleWhat(!toggleWhat)}
            className={`${
              hoverWhat || toggleWhat
                ? " text-browny border-browny"
                : "bg-background text-primary border-primary"
            } transition-color duration-300 ease-in-out`}
          >
            what ?
          </Button>
          <Button
            variant="smallButton"
            size="small"
            onMouseEnter={() => setHoverWhere(true)}
            onMouseLeave={() => setHoverWhere(false)}
            onClick={() => setToggleWhere(!toggleWhere)}
            className={`${
              hoverWhere || toggleWhere
                ? " text-browny border-browny"
                : "bg-background text-primary border-primary"
            } transition-color duration-300 ease-in-out`}
          >
            where ?
          </Button>
        </div>
        <span
          className={`${
            hoverWhere || toggleWhere
              ? " text-browny border-browny"
              : "bg-background text-primary border-primary"
          } transition-color duration-500 ease-in-out`}
        >
          <h2 className={`${playfair.className}  items-baseline  text-5xl`}>
            -Based in
            <span className={`${inter.className} font-bold`}> Paris</span>
          </h2>
        </span>
      </div>
    </div>
  );
}
