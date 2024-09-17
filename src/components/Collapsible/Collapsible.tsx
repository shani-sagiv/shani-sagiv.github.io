import React, { useState } from "react";
import "./Collapsible.scss";
import classnames from "classnames";

interface CollapsibleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactNode;
}

const Collapsible: React.FC<CollapsibleProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const renderIcon = () => {
    return (
      <div
        style={{
          height: 25,
          width: 25,
          // padding: 5,
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 20,
        }}
      >
        {isOpen ? "-" : "+"}
      </div>
    );
  };

  return (
    <div className="collapsible">
      <div
        onClick={toggleCollapse}
        style={{ cursor: "pointer" }}
        className={classnames("title", { open: isOpen })}
      >
        <span>{title}</span>
        <div>{isOpen ? "⤴" : "⤵"}</div>
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
