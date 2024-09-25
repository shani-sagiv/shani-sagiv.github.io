import React from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Modal } from "components";
import "./ImageGallery.scss";
import classnames from "classnames";
import LazyLoad from "react-lazyload";

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
            <LazyLoad>
              <img
                src={item.thumbnail}
                alt=""
                loading="lazy" // Lazy loading the thumbnail
                style={{ width: "100%", height: "auto" }}
              />
            </LazyLoad>
          ),
        }
      : {}),
    renderItem: (item: ReactImageGalleryItem) => (
      <LazyLoad>
        <img
          src={item.original}
          loading="lazy"
          style={{
            maxWidth: "100%",
            objectFit: "contain",
            width: "80vw",
            height: "70vh",
          }}
        />
      </LazyLoad>
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

export default MyImageGallery;
