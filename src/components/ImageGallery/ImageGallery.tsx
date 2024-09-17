import React, { useEffect, useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Modal } from "components";
import "./ImageGallery.scss";

interface ImageGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  images: Array<{
    original: string;
    thumbnail?: string;
  }>;
}

const MyImageGallery: React.FC<ImageGalleryProps> = ({ images, style }) => {
  const [isFullScreen, setIsFullScreen] = React.useState(false);
  const defaultParams = {
    items: images,
    showPlayButton: false,
    showThumbnails: false,
    showFullscreenButton: false,
  };

  return (
    <span style={{ position: "relative", flexShrink: 0, ...style }}>
      <ImageGallery {...defaultParams} disableKeyDown />
      <div
        className={"full-screen-button"}
        onClick={() => setIsFullScreen(true)}
      >
        ⛶
      </div>
      <Modal closeModal={() => setIsFullScreen(false)} hidden={!isFullScreen}>
        <ImageGallery {...defaultParams} />
      </Modal>
    </span>
  );
};

export default MyImageGallery;
