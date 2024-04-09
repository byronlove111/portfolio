"use client";

import LogoImage from "@/components/logoImage";
import { usePathname } from "next/navigation";
import Footer from "./footer";
import Navbar from "./navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="px-6 w-full sm:px-0 sm:w-9/12">
        {isHome && (
          <div className="mt-[-3px]">
            <LogoImage location="header" />
          </div>
        )}
        <Navbar pathname={pathname} />
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
