import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classnames from "classnames";
import "./StickyHeaderScroll.scss";

interface StickyHeaderScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  items: { title: React.ReactNode; content: React.ReactNode }[];
}

const StickyHeaderScroll: React.FC<StickyHeaderScrollProps> = ({ items }) => {
  const navigate = useNavigate();
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentItemIndex, setCurrentItemIndex] = useState<number | null>(null);

  // Scroll to the section when clicked
  const scrollToSection = (index: number) => {
    const section = sectionRefs.current[index];
    if (section) {
      const yOffset = -70;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Observe visibility of sections to get the currently visible section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(
              entry.target as HTMLDivElement,
            );
            setCurrentItemIndex(index);
          }
        });
      },
      { threshold: 0.5 }, // Trigger when 50% of the section is visible
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
            <>{item.title}</>
          </div>
        ))}
      </div>

      {/* Scrollable Content */}
      {items.map((item, index) => (
        <div
          key={index}
          ref={(el) => (sectionRefs.current[index] = el)} // Assign ref to each section
          style={{ width: "100%", boxSizing: "border-box" }}
        >
          <h1>{item.title}</h1>
          <div>{item.content}</div>
        </div>
      ))}
    </div>
  );
};

export default StickyHeaderScroll;
