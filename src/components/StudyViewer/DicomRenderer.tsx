import React, { useEffect, useRef } from "react";

const DicomRenderer: React.FC = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Example integration point for CornerstoneJS
    // import cornerstone, cornerstoneWADOImageLoader, etc.
    // cornerstone.enable(elementRef.current!)
    // cornerstone.loadImage(imageId).then(img => cornerstone.displayImage(elementRef.current!, img))
  }, []);

  return (
    <div
      ref={elementRef}
      className="w-full h-full bg-black flex items-center justify-center text-white"
    >
      {/* Placeholder text until DICOM loaded */}
      <span className="opacity-50">DICOM Renderer</span>
    </div>
  );
};

export default DicomRenderer;
