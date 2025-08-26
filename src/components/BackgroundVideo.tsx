import React from "react";

type Props = {
  src: string;
  overlayClassName?: string;
};

const BackgroundVideo: React.FC<Props> = ({ src, overlayClassName }) => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden">
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
