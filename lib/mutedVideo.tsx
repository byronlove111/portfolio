import { useRef, useEffect } from "react";

interface AutoPlaySilentVideoProps {
  className: string;
  video: string;
}

export default function AutoPlaySilentVideo(props: AutoPlaySilentVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
    }
  });
  return (
    <video
      className={props.className}
      ref={videoRef}
      loop
      autoPlay
      muted
      playsInline
    >
      <source src={props.video} type="video/mp4" />
    </video>
  );
}
