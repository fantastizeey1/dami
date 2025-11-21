const SectionFade = ({
  fromColor = "#FFD166",
  toColor = "#073B4C",
  height = 120,
  direction = "down",
  curve = "linear", // linear, ease, ease-in, ease-out, smooth
  midpoint = 50, // percentage where the fade is centered
  opacity = 1,
  className = "",
}) => {
  const gradientCurves = {
    linear: "",
    ease: ", rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%",
    "ease-in": " in srgb",
    "ease-out": " in srgb",
    smooth: " in oklab",
  };

  const getGradient = () => {
    const isUp = direction === "up";
    const start = isUp ? toColor : fromColor;
    const end = isUp ? fromColor : toColor;
    const dir = isUp ? "to top" : "to bottom";

    if (midpoint !== 50) {
      return `linear-gradient(${dir}, ${start} 0%, ${end} ${midpoint}%, ${end} 100%)`;
    }

    return `linear-gradient(${dir}${
      gradientCurves[curve] || ""
    }, ${start}, ${end})`;
  };

  return (
    <div
      style={{
        height: `${height}px`,
        background: getGradient(),
        opacity,
      }}
      className={`w-full ${className}`}
      aria-hidden="true"
    />
  );
};

export default SectionFade;
