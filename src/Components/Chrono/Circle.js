import React from "react";

export default function Circle({ percentage = 100, className }) {
  const radius = 125;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  const strokeDasharray = `${circumference} ${circumference}`;
  return (
    <svg className={className}>
      <circle
        stroke="var(--customBlue)"
        strokeWidth="10"
        strokeLinecap="round"
        cx="135"
        cy="135"
        r="125"
        fill="transparent"
        strokeDasharray={strokeDasharray}
        strokeDashoffset={offset}
      />
    </svg>
  );
}

// radius = (width/2) - (strokeWidth * 2)
