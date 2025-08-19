import React from "react";

interface AnalysisPanelProps {
  aiResults: { label: string; value: string | number }[];
  heatmapUrl?: string; // XAI heatmap as overlay image
}

const AnalysisPanel: React.FC<AnalysisPanelProps> = ({ aiResults, heatmapUrl }) => {
  return (
    <div className="w-80 bg-white border-l border-gray-200 p-4 flex flex-col">
      <h2 className="text-lg font-semibold mb-4">AI Analysis</h2>

      <ul className="space-y-2 mb-6">
        {aiResults.map((res, idx) => (
          <li key={idx} className="flex justify-between">
            <span className="text-gray-600">{res.label}</span>
            <span className="font-medium">{res.value}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-lg font-semibold mb-2">XAI Heatmap</h2>
      {heatmapUrl ? (
        <div className="border rounded-lg overflow-hidden">
          <img src={heatmapUrl} alt="XAI Heatmap" className="w-full object-contain" />
        </div>
      ) : (
        <div className="text-gray-400 text-sm">No heatmap available</div>
      )}
    </div>
  );
};

export default AnalysisPanel;
