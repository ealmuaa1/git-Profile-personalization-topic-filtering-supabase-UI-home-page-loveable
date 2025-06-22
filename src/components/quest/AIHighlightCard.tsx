import React from "react";

export function AIHighlightCard({
  title,
  summary,
  source,
}: {
  title: string;
  summary: string;
  source: string;
}) {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mb-3">
      <div className="text-xs font-bold text-blue-700 mb-1">{source}</div>
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-blue-900">{summary}</div>
    </div>
  );
}
