import React, { useState } from "react";
import "./Collapsibles.scss";
import { Collapsible } from "components/Collapsible";

interface CollapsibleProps extends React.HTMLAttributes<HTMLDivElement> {
  items: {
    title: any | React.ReactNode;
    content: any | React.ReactNode;
  }[];
}

const Collapsibles: React.FC<CollapsibleProps> = ({ items }) => {
  return (
    <div style={{ width: "100%" }}>
      {items.map((item, i) => (
        <Collapsible title={item.title}>{item.content}</Collapsible>
      ))}
    </div>
  );
};

export default Collapsibles;
