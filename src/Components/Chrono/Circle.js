import React, { useEffect } from "react";

export default function Circle(props) {
  const radius = 125;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (props.percentage / 100) * circumference;

  const strokeDasharray = `${circumference} ${circumference}`;
  return (
    <svg className={props.className}>
      <circle
        stroke="#00A"
        strokeWidth="10"
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
