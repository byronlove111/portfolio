import ErrorComponent from "@/components/error";
import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <ErrorComponent text="Page not found" />
      <Link href="/">
        <h2 className="my-20 text-primary flex items-center justify-center hover:underline">
          Go back home
          <ArrowUpRightIcon className="inline-block w-6 h-6 ml-2" />
        </h2>
      </Link>
    </>
  );
}
