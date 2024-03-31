import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-11">
      Homepage
      <div className="max-w-[200px]">
        <Button>
          book a free call <ArrowUpRight />
        </Button>
      </div>
    </div>
  );
}
