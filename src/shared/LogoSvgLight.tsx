import React from "react";

const LogoSvgLight = () => {
  return (
    <svg
      className="w-full hidden dark:block"
      viewBox="0 0 96 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{`
        @keyframes travs-plane-fly-light {
          0%   { transform: translate(-3px, 3px); }
          100% { transform: translate(3px, -3px); }
        }
        .travs-logo-plane-light {
          transform-box: fill-box;
          transform-origin: center;
          animation: travs-plane-fly-light 2.8s ease-in-out infinite alternate;
        }
      `}</style>
      {/* Paper plane icon (uses currentColor so it picks up the active theme) */}
      <g className="travs-logo-plane-light">
        <path
          d="M2 14 L29 3 L24 28 L15 20 L2 14 Z"
          fill="currentColor"
        />
        <path
          d="M15 20 L29 3"
          stroke="#1F2937"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 20 L19 26"
          stroke="#1F2937"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.5"
        />
      </g>

      {/* Wordmark */}
      <text
        x="36"
        y="22"
        fontFamily="Poppins, system-ui, -apple-system, 'Segoe UI', sans-serif"
        fontSize="17"
        fontWeight="700"
        fill="white"
        letterSpacing="-0.4"
      >
        .TRAVS
      </text>
    </svg>
  );
};

export default LogoSvgLight;
