import React, { useState } from "react";
import "./Collapsible.scss";

interface CollapsibleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactNode;
}

const Collapsible: React.FC<CollapsibleProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        padding: "10px",
        boxSizing: "border-box",
        textAlign: "right",
      }}
    >
      <div onClick={toggleCollapse} style={{ cursor: "pointer" }}>
        {title}
      </div>
      {isOpen && (
        <div className="collapsible-content" style={{}}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapsible;
