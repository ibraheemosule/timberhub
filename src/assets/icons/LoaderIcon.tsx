import { memo } from "react";

const LoaderIcon: React.FC<{ size: number; color?: string }> = ({
  size,
  color,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{
      margin: "auto",
      background: "none",
      display: "block",
      shapeRendering: "auto",
    }}
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <circle
      cx="50"
      cy="50"
      fill="none"
      stroke={color ?? "rgba(0, 0, 0, 0.5)"}
      strokeWidth="13"
      r="40"
      strokeDasharray="188.49555921538757 64.83185307179586"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="0.5952380952380952s"
        values="0 50 50;360 50 50"
        keyTimes="0;1"
      ></animateTransform>
    </circle>
  </svg>
);

export default memo(LoaderIcon);
