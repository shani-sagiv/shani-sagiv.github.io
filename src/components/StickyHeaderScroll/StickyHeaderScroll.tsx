import React, { useRef, useState, useEffect } from "react";
import classnames from "classnames";
import "./StickyHeaderScroll.scss";

interface StickyHeaderScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  items: {
    title: React.ReactNode;
    tabTitle: React.ReactNode;
    content: React.ReactNode;
  }[];
}

const StickyHeaderScroll: React.FC<StickyHeaderScrollProps> = ({ items }) => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentItemIndex, setCurrentItemIndex] = useState<number | null>(null);
  const visibleSections = useRef<Set<number>>(new Set());

  // Scroll to the section when clicked
  const scrollToSection = (index: number) => {
    const section = sectionRefs.current[index];
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Observe visibility of sections to get the currently visible section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.current.indexOf(
            entry.target as HTMLDivElement,
          );

          if (entry.isIntersecting) {
            // Add the currently visible section index
            visibleSections.current.add(index);
          } else {
            // Remove the section index when it goes off-screen
            visibleSections.current.delete(index);
          }

          // Find the lowest index of visible sections
          const lowestVisibleIndex = Math.min(
            ...Array.from(visibleSections.current),
          );
          setCurrentItemIndex(lowestVisibleIndex);
        });
      },
      { threshold: 0 }, // Trigger as soon as any part of the section is visible
    );

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        overflow: "visible",
      }}
    >
      {/* Sticky Header */}
      <div className={"sticky-header"}>
        {items.map((item, index) => (
          <div
            key={index}
            className={classnames("sticky-header-item", {
              current: currentItemIndex === index,
            })}
            onClick={() => scrollToSection(index)} // Click to scroll to the section
          >
            <span style={{ textAlign: "center" }}>{item.tabTitle}</span>
          </div>
        ))}
      </div>

      {/* Scrollable Content */}
      {items.map((item, index) => (
        <div
          key={index}
          id={"item-" + index}
          ref={(el) => (sectionRefs.current[index] = el)} // Assign ref to each section
          style={{ width: "100%", boxSizing: "border-box" }}
        >
          <h1 style={{ textAlign: "center" }}>{item.title}</h1>
          <div>{item.content}</div>
        </div>
      ))}
    </div>
  );
};

export default StickyHeaderScroll;
