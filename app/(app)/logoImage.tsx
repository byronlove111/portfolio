import Image from "next/image";

type Logo = {
  location: "header" | "footer" | undefined;
  theme?: "light" | "dark" | undefined;
};

export default function LogoImage(logo: Logo) {
  return (
    <div className="w-full relative ">
      {
        <Image
          src={
            logo.location === "header"
              ? "images/MainLogoHeader.svg"
              : "images/MainLogoFooter.svg"
          }
          alt="Logo"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={250}
        />
      }
    </div>
  );
}
