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
    <div>
      <div>{work.name}</div>
      <div>
        <video
          src={work.video}
          muted
          loop
          autoPlay
          width={`w-full`}
          height={`h-auto`}
        ></video>
      </div>
      <div>{work.description}</div>
    </div>
  );
}
