import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type pathnameProps = {
  pathname: string;
};

export default function Navbar(props?: pathnameProps) {
  let isHome = false;
  const pathname = props?.pathname ?? "";
  if (pathname === "/") {
    isHome = true;
  } else {
    isHome = false;
  }

  return (
    <nav className="flex flex-col justify-center sm:flex-row sm:justify-between mt-1 lg:mt-4 items-center">
      {!isHome && (
        <Link href="/" className="flex lg:mr-12">
          <Image
            src="/images/NavBarLogo.svg"
            alt="logo"
            width={70}
            height={20}
            style={{ minWidth: "75px", height: "auto" }}
          ></Image>
        </Link>
      )}
      <div
        className={`w-full flex gap-x-6 xl:gap-x-12 ${
          isHome
            ? "justify-between"
            : "mt-2 justify-between sm:justify-end sm:mt-0"
        } lg:justify-start`}
      >
        <Button variant="linkBold" size="transparent" asChild>
          <Link href="/selectedworks">selected works</Link>
        </Button>
        <Button variant="linkBold" size="transparent" asChild>
          <Link href="/howiwork">how i work</Link>
        </Button>
      </div>
      <div className="hidden lg:flex gap-x-6 xl:gap-x-12">
        <Button variant="linkBold" size="transparent" asChild>
          <Link href="https://github.com/maliksynt" target="_blank">
            github
          </Link>
        </Button>
        <Button variant="linkBold" size="transparent" asChild>
          <Link
            href="https://www.linkedin.com/in/abd-al-malik-bourassi-2b4423301/"
            target="_blank"
          >
            linkedin
          </Link>
        </Button>
        <Button variant="default" asChild>
          <Link
            href="https://calendly.com/fr"
            className="flex gap-2 items-center justify-center"
            target="_blank"
          >
            book a free call <ArrowUpRight />
          </Link>
        </Button>
      </div>
    </nav>
  );
}
