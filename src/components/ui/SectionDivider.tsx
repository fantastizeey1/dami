const SectionDivider = ({
  color = "#FFD166", // next section background
  borderColor = "white", // slanted border color
  thickness = 8, // thickness of slanted border
  direction = "right", // "right" ↘️, "left" ↙️, or "angle" ^
}) => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
      <svg
        className="relative block w-full h-20"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {direction === "right" && (
          <>
            {/* White slanted border */}
            <polygon
              fill={borderColor}
              points={`0,100 100,${0 + thickness} 100,0 0,92`}
            />
            {/* Section background */}
            <polygon
              fill={color}
              points={`0,100 100,${0 + thickness} 100,100 0,100`}
            />
          </>
        )}

        {direction === "left" && (
          <>
            {/* White slanted border */}
            <polygon
              fill={borderColor}
              points={`0,${0 + thickness} 100,100 100,${100 - thickness} 0,0`}
            />
            {/* Section background */}
            <polygon fill={color} points={`0,${0 + thickness} 100,100 0,100`} />
          </>
        )}

        {direction === "angle" && (
          <>
            {/* Section background */}
            <polygon fill={color} points={`0,100 50,0 100,100`} />
            {/* White angled border - left side */}
            <polygon
              fill={borderColor}
              points={`0,100 50,0 50,${thickness} ${thickness * 0.5},100`}
            />
            {/* White angled border - right side */}
            <polygon
              fill={borderColor}
              points={`50,0 100,100 ${
                100 - thickness * 0.5
              },100 50,${thickness}`}
            />
          </>
        )}
      </svg>
    </div>
  );
};

export default SectionDivider;
