import { oswald } from "@/app/fonts";
import Separator from "@/components/separator";
import Image from "next/image";
import Link from "next/link";
import works from "../../../../public/works.json";

export default function SelectedWork({
  params,
}: {
  params: {
    workId: string;
  };
}) {
  const work = works.find((work) => work.id === Number(params.workId));

  if (!work) {
    return <div>Work not found</div>;
  }
  return (
    <>
      <div className="flex flex-col w-full mt-32">
        <h2
          className={`${oswald.className} text-6xl font-bold text-primary uppercase`}
        >
          {work.name}
        </h2>
        <div className="flex w-full mb-16">
          <div className="text-primary flex flex-col min-w-[450px]">
            <h3 className="text-sm mt-6 md:mt-20">technologies_</h3>
            <ul className="mt-2">
              {work.technologies.map((techno, index) => (
                <li className="font-bold text-sm" key={index}>
                  {techno}
                </li>
              ))}
            </ul>
            <h3 className="text-sm mt-4 md:mt-8">features_</h3>
            <ul className="mt-2">
              {work.features.map((feature, index) => (
                <li className="font-bold text-sm" key={index}>
                  {feature}
                </li>
              ))}
            </ul>
            <h3 className="text-sm mt-4 md:mt-8">links_</h3>
            <ul className="font-bold text-sm underline-offset-2 mt-2">
              <li className=" hover:underline">
                <Link href={work.github} target="_blank">
                  github
                </Link>
              </li>
              <li className="hover:underline ">
                <Link href={work.link} target="_blank">
                  website
                </Link>
              </li>
            </ul>
          </div>
          <div className="pt-20 text-primary  flex flex-col gap-10 font-medium">
            {work.description.map((descr, index) => (
              <p key={index} style={{ textIndent: "3em" }}>
                {descr}
              </p>
            ))}
            <div
              className="flex flex-start gap-12
            "
            ></div>
          </div>
        </div>
        <Separator
          reverse={false}
          text="let's discuss"
          link="https://calendly.com/fr"
        />
      </div>
      <div className="mt-32 flex flex-wrap w-full justify-between">
        {work.photos.map((image, index) => (
          <div className="mt-4" key={index}>
            <Image
              quality={100}
              src={image}
              height={1400}
              width={1800}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "20px",
              }}
              alt={work.name}
            />
          </div>
        ))}
      </div>
      <div className="mt-20 mb-20">
        <Separator
          reverse={true}
          text="let's talk"
          link="https://calendly.com/fr"
        />
      </div>
    </>
  );
}
