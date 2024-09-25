import React, { useEffect, useRef, useState } from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Modal } from "components";
import "./ImageGallery.scss";
import classnames from "classnames";

interface ImageGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  images: Array<{
    original: string;
    thumbnail?: string;
  }>;
}

const MyImageGallery: React.FC<ImageGalleryProps> = ({ images, style }) => {
  const imagesWithThumbnail = images.map((i) => ({
    original: i.original,
    thumbnail: i.thumbnail || i.original,
  }));
  const [isFullScreen, setIsFullScreen] = React.useState(false);
  const defaultParams = {
    items: imagesWithThumbnail,
    showPlayButton: false,
    showThumbnails: false,
    showFullscreenButton: false,
    showIndex: true,
    isRTL: true,
  };
  const defaultModalParams = {
    ...defaultParams,
    ...(images.length > 1
      ? {
          showThumbnails: true,
          thumbnailPosition: "right" as "right" | "left" | "bottom" | "top",
          renderThumbInner: (item: ReactImageGalleryItem) => (
            <img
              src={item.thumbnail}
              alt=""
              loading="lazy" // Lazy loading the thumbnail
              style={{ width: "100%", height: "auto" }}
            />
          ),
        }
      : {}),
    renderItem: (item: ReactImageGalleryItem) => (
      <LazyImage src={item.original} />
    ),
  };

  return (
    <span
      className={classnames("image-gallery-wrapper", {
        fullscreen: isFullScreen,
      })}
      style={{ position: "relative", flexShrink: 0, ...style }}
    >
      <ImageGallery
        {...defaultParams}
        disableKeyDown
        showNav={images.length > 1}
      />
      <div
        className={"full-screen-button"}
        onClick={() => setIsFullScreen(true)}
      >
        ⛶
      </div>
      <Modal closeModal={() => setIsFullScreen(false)} hidden={!isFullScreen}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImageGallery
            {...defaultModalParams}
            onClick={() => setIsFullScreen(false)}
          />
        </div>
      </Modal>
    </span>
  );
};

const LazyImage: React.FC<{ src: string }> = ({ src }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Disconnect the observer once image is visible
          }
        });
      },
      { threshold: 0.1 },
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : undefined} // Only load the image when visible
      alt=""
      loading="lazy"
      style={{
        maxWidth: "100%",
        objectFit: "contain",
        width: "80vw",
        height: "70vh",
      }}
    />
  );
};

export default MyImageGallery;
