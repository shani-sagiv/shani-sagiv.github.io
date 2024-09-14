import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

interface StickyHeaderScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  items: { title: React.ReactNode; content: React.ReactNode }[];
}

const StickyHeaderScroll: React.FC<StickyHeaderScrollProps> = ({ items }) => {
  const navigate = useNavigate();

  // Create refs for each section
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToSection = (index: number) => {
    const section = sectionRefs.current[index];
    if (section) {
      const yOffset = -70;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        overflow: "visible", // Ensure sticky works
      }}
    >
      {/* Orange sticky header */}
      <div
        style={{
          width: "100%",
          height: "100px",
          position: "sticky",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          top: 0, // Sticky at the top when scrolling down
          zIndex: 1000, // Ensure it's on top of other content
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              textAlign: "center",
              cursor: "pointer",
              borderBottom: "1px solid black",
            }}
            onClick={() => scrollToSection(index)} // Click to scroll to the section
          >
            <>{item.title}</>
          </div>
        ))}
      </div>

      {/* Scrollable content */}
      {items.map((item, index) => (
        <div
          key={index}
          ref={(el) => (sectionRefs.current[index] = el)} // Assign ref to each section
          style={{
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <h1>{item.title}</h1>
          <div>{item.content}</div> {/* Render the content dynamically */}
        </div>
      ))}
    </div>
  );
};

export default StickyHeaderScroll;
