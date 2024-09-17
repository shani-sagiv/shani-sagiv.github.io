import React, { useState } from "react";
import "./Collapsibles.scss";
import { Collapsible } from "components/Collapsible";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import MyImageGallery from "components/ImageGallery/ImageGallery";

interface CollapsibleProps extends React.HTMLAttributes<HTMLDivElement> {
  items: {
    title: any | React.ReactNode;
    content: any | React.ReactNode;
    images?: string[];
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
            }}
          >
            {!item.images ? null : (
              <span
                style={{
                  width: "60vw",
                  maxWidth: 200,
                  float: "right",
                  marginLeft: 10,
                }}
              >
                <MyImageGallery
                  images={item.images.map((i) => ({
                    original: i,
                    thumbnail: i,
                  }))}
                />
                {/*<ImageGallery*/}
                {/*  showPlayButton={false}*/}
                {/*  showThumbnails={false}*/}
                {/*  items={}*/}
                {/*/>*/}
              </span>
            )}
            {item.content}
          </div>
        </Collapsible>
      ))}
    </div>
  );
};

export default Collapsibles;
