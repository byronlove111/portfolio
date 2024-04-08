import Separator from "@/components/separator";
import Slider from "@/components/slider";
import Work from "@/components/work";

export default function SelectedWorks() {
  return (
    <>
      <div className="flex flex-col w-full">
        <p className="mt-20 text-primary flex justify-start gap-4">
          selected works <span className="font-bold"> 2023 - 2024</span>
        </p>
        <div className="mb-20 mt-[-50px]">
          <Separator />
        </div>
        <Work display="all" />
      </div>
      <Separator />
      <Slider />
      <div className="gap-64 w-full mt-40 md:mt-64 lg:mt-72 xl:mt-[340px] mb-24">
        <Separator reverse={true} link="/" text="let's talk" />
      </div>
    </>
  );
}
