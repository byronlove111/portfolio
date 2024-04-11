"use client";

import Paragraph from "@/app/(app)/paragraph";
import Separator from "@/components/separator";
import Slider from "@/components/slider";
import Work from "@/components/work";
import Landing from "./landing";
import FallbackSpinner from "@/components/fallbackSpinner";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Landing />
      <Separator />
      <Slider />
      <div className="gap-64 w-full mt-40 md:mt-64 lg:mt-72 xl:mt-[340px]">
        <Separator reverse={false} link="/howiwork" text="how i work" />
      </div>
      <div className="w-11/12 mb-24">
        <Paragraph />
      </div>
      <Separator reverse={true} text="selected works" link="/selectedworks" />
      <p className="mt-16 mb-4 text-primary">
        favourites works - <span className="font-bold">2024</span>
      </p>
      <Suspense fallback={<FallbackSpinner />}>
        <Work display="selected" />
      </Suspense>
      <div className="mt-20 mb-10 md:mb-20">
        <Separator
          text="book a free call"
          link="https://calendly.com/abdalmalikbourassi/premier-contact"
          reverse={false}
          targetBlank={true}
        />
      </div>
    </div>
  );
}
