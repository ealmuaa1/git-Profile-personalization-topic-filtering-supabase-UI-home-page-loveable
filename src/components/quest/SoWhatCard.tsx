import React from "react";

export function SoWhatCard({
  summary,
  tieIn,
}: {
  summary: string;
  tieIn: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6 mb-8">
      <h3 className="text-xl font-bold mb-2">So what?</h3>
      <p className="mb-4">{summary}</p>
      <div className="bg-muted rounded-lg p-4">
        <h4 className="font-semibold mb-1">Career/Tool Tie-in</h4>
        <p>{tieIn}</p>
      </div>
    </div>
  );
}
