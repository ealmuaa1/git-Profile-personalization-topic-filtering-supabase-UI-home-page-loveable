import React, { useState } from "react";

export function LessonAccordion({
  lessons,
}: {
  lessons: { title: string; content: string }[];
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-xl font-bold mb-4">Lessons</h3>
      {lessons.map((lesson, idx) => (
        <div key={idx} className="mb-2">
          <button
            className="w-full text-left font-semibold py-2 px-4 rounded bg-muted hover:bg-primary/10 transition"
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            data-testid={`lesson-toggle-${idx}`}
          >
            {lesson.title}
          </button>
          {openIdx === idx && (
            <div className="p-4 bg-muted rounded-b">{lesson.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}
