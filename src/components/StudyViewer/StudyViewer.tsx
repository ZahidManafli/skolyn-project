import React from "react";
import DicomRenderer from "./DicomRenderer";
import AnalysisPanel from "./AnalysisPanel";

const StudyViewer: React.FC = () => {
  // Example props (AI results + mock heatmap)
  const aiResults = [
    { label: "Diagnosis", value: "Pneumonia" },
    { label: "Confidence", value: "92%" },
    { label: "Severity Score", value: 7.5 },
  ];

  return (
    <div className="flex h-screen w-screen">
      {/* Left: DICOM Renderer */}
      <div className="flex-1">
        <DicomRenderer />
      </div>

      {/* Right: AI Panel */}
      <AnalysisPanel
        aiResults={aiResults}
        heatmapUrl="https://via.placeholder.com/250x250.png?text=Heatmap"
      />
    </div>
  );
};

export default StudyViewer;
