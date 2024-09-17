import React, { useRef, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

interface ImageGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  images: Array<{
    original: string;
    thumbnail: string;
  }>;
}

const MyImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const galleryRef = useRef<any>(null);
  galleryRef?.current?.toggleFullScreen();
  console.log({ galleryRef });

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <ImageGallery
        ref={galleryRef}
        stopPropagation={true}
        items={images}
        showPlayButton={false}
        showThumbnails={false}
        useBrowserFullscreen
      />
    </div>
  );
};

export default MyImageGallery;
