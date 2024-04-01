"use client";

import LogoImage from "@/app/(app)/logoImage";
import { usePathname } from "next/navigation";
import Navbar from "./navbar";
import Footer from "./footer";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-9/12 mb-96">
        {isHome && (
          <div className="mt-[-3px]">
            <LogoImage location="header" />
          </div>
        )}
        <Navbar location={pathname} />
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
