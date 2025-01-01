import React, { CSSProperties } from "react";
import { ImageGallery, Collapsible } from "components";
import "./Collapsibles.scss";

interface CollapsibleProps extends React.HTMLAttributes<HTMLDivElement> {
  items: {
    title: any | React.ReactNode;
    content?: any | React.ReactNode;
    images?: string[];
    style?: CSSProperties;
  }[];
}

const Collapsibles: React.FC<CollapsibleProps> = ({ items }) => {
  return (
    <div style={{ width: "100%" }}>
      {items.map((item, i) => (
        <Collapsible title={item.title}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              whiteSpace: "pre-line",
              alignItems: "right",
              justifyContent: "flex-start",
            }}
          >
            {!item.images ? null : (
              <ImageGallery
                style={{
                  width: "30vw",
                  maxWidth: 200,
                  float: "right",
                  marginLeft: 10,
                }}
                images={item.images.map((i) => ({
                  original: i,
                  thumbnail: i,
                }))}
              />
            )}
            {item.content ? item.content : null}
          </div>
        </Collapsible>
      ))}
    </div>
  );
};

export default Collapsibles;
