import React from "react";

type Props = {
  src: string;
  overlayClassName?: string;
  className?: string; // ekstra Tailwind class ekleyebilmek için
};

const BackgroundVideo: React.FC<Props> = ({ src, overlayClassName, className }) => {
  return (
    <div className={`absolute inset-0 -z-10 h-full w-full overflow-hidden ${className || ""}`}>
      <video
        className="h-full w-full object-cover"
        src={src}
        autoPlay
        muted
        loop
        playsInline
      />
      {overlayClassName && (
        <div className={`absolute inset-0 ${overlayClassName}`} />
      )}
    </div>
  );
};

export default BackgroundVideo;
