import { Button } from "@/components/ui/button";

export default function ButtonsPage() {
  return (
    <div className="p-4 space-y-4 flex flex-col items-center max-w-[200px]">
      <Button variant="default">CTA Button larger</Button>
      <Button variant="link">selected projects</Button>
      <Button variant="linkBold">bold link</Button>
      <Button variant="smallButton" size="small">
        who ?
      </Button>
    </div>
  );
}
