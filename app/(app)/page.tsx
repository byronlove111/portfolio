import Paragraph from "@/components/paragraph";
import Separator from "@/components/separator";
import Slider from "@/components/slider";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { inter, playfair } from "../fonts";

export default function Home() {
  return (
    <div>
      <h1
        className={`${playfair.className} text-xl mb-24 sm:text-3xl mt-24 lg:mb-0 lg:text-5xl text-primary lg:mt-32 leading-normal sm:leading-snug lg:leading-tight`}
      >
        Front-end <span className={`${inter.className} font-bold`}>React</span>{" "}
        developer,
        <br />
        building web apps using NextJS and Typescript.
        <br />
        Open to work &{" "}
        <span className={`${inter.className} font-bold`}>freelance.</span>
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
          <Button variant="smallButton" size="small">
            who ?
          </Button>
          <Button variant="smallButton" size="small">
            what ?
          </Button>
          <Button variant="smallButton" size="small">
            where ?
          </Button>
        </div>
        <h2
          className={`${playfair.className} text-primary items-baseline  text-5xl`}
        >
          -Based in
          <span className={`${inter.className} font-bold`}> Paris</span>
        </h2>
      </div>
      <Separator />
      <Slider />
      <div className="gap-64 w-full mt-40 md:mt-64 lg:mt-72 xl:mt-[340px]">
        <Separator reverse={false} link="/howiwork" text="how i work" />
      </div>
      <div className="w-11/12 mb-24">
        <Paragraph />
      </div>
      <Separator reverse={true} text="all my projects" link="/selectedworks" />
      <div className="mt-64">c</div>
      <div className="mt-64">c</div>
      <div className="mt-64">c</div>
      <div className="mt-64">c</div>
      <div className="mt-64">c</div>
    </div>
  );
}
