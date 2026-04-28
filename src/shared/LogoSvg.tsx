import React from "react";

const LogoSvg = () => {
  return (
    <svg
      className="w-full block dark:hidden"
      viewBox="0 0 96 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Paper plane icon (uses currentColor so it picks up the active theme) */}
      <path d="M2 14 L29 3 L24 28 L15 20 L2 14 Z" fill="currentColor" />
      <path
        d="M15 20 L29 3"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 20 L19 26"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
      />

      {/* Wordmark */}
      <text
        x="36"
        y="22"
        fontFamily="Poppins, system-ui, -apple-system, 'Segoe UI', sans-serif"
        fontSize="17"
        fontWeight="700"
        fill="#1F2937"
        letterSpacing="-0.4"
      >
        .TRAVS
      </text>
    </svg>
  );
};

export default LogoSvg;
