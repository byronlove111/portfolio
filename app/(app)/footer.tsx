import LogoImage from "../../components/logoImage";

export default function Footer() {
  return (
    <div className="w-full bg-primary h-[500px] flex flex-col items-center justify-around">
      <div className="w-9/12">
        footer
        <LogoImage location="footer" />
      </div>
    </div>
  );
}
