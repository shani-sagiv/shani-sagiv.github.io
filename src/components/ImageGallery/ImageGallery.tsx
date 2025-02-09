import React, { CSSProperties } from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Modal } from "components";
import "./ImageGallery.scss";
import classnames from "classnames";

interface ImageGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  images:
    | {
        original: string;
        thumbnail?: string;
      }[]
    | string[];
  style?: CSSProperties;
}

const MyImageGallery: React.FC<ImageGalleryProps> = ({ images, style }) => {
  const imagesWithThumbnail = images.map((i: any) => ({
    original: i?.original || i,
    thumbnail: i?.thumbnail || i?.original || i,
  }));
  const [isFullScreen, setIsFullScreen] = React.useState(false);
  const defaultParams = {
    items: imagesWithThumbnail,
    showPlayButton: false,
    showThumbnails: false,
    showFullscreenButton: false,
    showIndex: true,
    isRTL: true,
    lazyLoad: true,
  };
  const defaultModalParams = {
    ...defaultParams,
    // ...(images.length > 1
    //   ? {
    //       showThumbnails: true,
    //       thumbnailPosition: "right" as "right" | "left" | "bottom" | "top",
    //       renderThumbInner: (item: ReactImageGalleryItem) => (
    //         // <LazyLoad>
    //         <img
    //           src={item.thumbnail}
    //           alt=""
    //           loading="lazy" // Lazy loading the thumbnail
    //           style={{ width: "100%", height: "auto" }}
    //         />
    //         // </LazyLoad>
    //       ),
    //     }
    //   : {}),
    renderItem: (item: ReactImageGalleryItem) => (
      // <LazyLoad>
      <img
        src={item.original}
        loading="lazy"
        style={{
          maxWidth: "100%",
          objectFit: "contain",
          width: "100vw",
          height: "100vh",
        }}
      />
      // </LazyLoad>
    ),
  };

  const isImageOverflowing = (img: any) => {
    const parent = img.parentElement;
    if (!parent) return false;

    const imgRect = img.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    return (
      imgRect.width > parentRect.width || imgRect.height > parentRect.height
    );
  };
  const checkImageOverflow = (img: HTMLImageElement) => {
    if (!img || !img.parentElement) return false;

    const imgRect = img.getBoundingClientRect();
    const parentRect = img.parentElement.getBoundingClientRect();

    return (
      imgRect.width > parentRect.width || imgRect.height > parentRect.height
    );
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
        renderItem={(item: ReactImageGalleryItem) => (
          <img
            src={item.original}
            loading="lazy"
            onLoad={(e) => {
              // console.log("Image height:", e.currentTarget.clientHeight);
              if (e.currentTarget.clientHeight > 300) {
                e.currentTarget.style.marginTop = "-180px";
              }
            }}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
            }}
          />
        )}
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
            showThumbnails={false}
            onClick={() => setIsFullScreen(false)}
          />
        </div>
      </Modal>
    </span>
  );
};

export default MyImageGallery;
