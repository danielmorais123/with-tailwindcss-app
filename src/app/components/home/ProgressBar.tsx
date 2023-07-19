"use client";

import { Progress, Typography } from "@material-tailwind/react";

export default function ProgressBar({ percentage }: { percentage: number }) {
  return (
    <div className="w-full mt-4">
      <div className="flex items-center justify-between gap-4 mb-2">
        <p className="text-xs text-gray-500">Completed</p>
        <p className="text-xs">{percentage}%</p>
      </div>
      <Progress value={percentage} />
    </div>
  );
}
