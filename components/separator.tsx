import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

type SeparatorProps = { reverse?: boolean; text?: string; link?: string };

const Separator = ({ reverse, text, link }: SeparatorProps) => {
  if (text) {
    return (
      <div
        className={`md:flex md:${
          reverse ? "flex-row" : "flex-row-reverse"
        } items-center gap-32 lg:gap-64`}
      >
        <hr
          className="border-primary mb-16 md:flex-grow md:mb-0"
          style={{ height: "1px" }}
        />
        <Button variant="default" asChild>
          <Link
            href={link ? link : "/"}
            className="flex gap-2 items-center justify-between w-full md:w-52 md:justify-center"
          >
            {text} <ArrowUpRight />
          </Link>
        </Button>
      </div>
    );
  } else {
    return <hr className="border-primary mt-16" />;
  }
};

export default Separator;
