import { oswald } from "@/app/fonts";

export default function Slider() {
  return (
    <div className="absolute mt-10 md:mt-14 xl:mt-20 inset-x-0">
      <div className="relative flex overflow-hidden">
        <div className=" animate-marquee whitespace-nowrap">
          <span
            className={`${oswald.className} m-8 font-bold uppercase text-7xl md:text-9xl lg:text-[160px] text-primary`}
          >
            Crafting your digital dreams !
          </span>
          <span
            className={`${oswald.className} m-8 font-bold uppercase text-7xl md:text-9xl lg:text-[160px] text-primary`}
          >
            Crafting your digital dreams !
          </span>
        </div>

        <div className="absolute top-0  animate-marquee2 whitespace-nowrap">
          <span
            className={`${oswald.className} m-8 font-bold uppercase text-7xl md:text-9xl lg:text-[160px] text-primary`}
          >
            Crafting your digital dreams !
          </span>
          <span
            className={`${oswald.className} m-8 font-bold uppercase text-7xl md:text-9xl lg:text-[160px] text-primary`}
          >
            Crafting your digital dreams !
          </span>
        </div>
      </div>
    </div>
  );
}
