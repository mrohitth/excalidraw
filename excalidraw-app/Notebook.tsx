import React from "react";

const NotebookLinesOverlay: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: "none",
        zIndex: 5,
        background: `
          repeating-linear-gradient(
            to bottom,
            rgba(0, 0, 255, 0.15),
            rgba(0, 0, 255, 0.15) 1px,
            transparent 1px,
            transparent 40px
          )
        `,
      }}
    >
      {/* Red margin line as a standalone div */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "150px", // margin distance from the left
          width: "4px",
          backgroundColor: "rgba(255, 0, 0, 0.4)",
        }}
      />
    </div>
  );
};

export default NotebookLinesOverlay;
