import React, { CSSProperties, useEffect, useState } from "react";
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
  showThumbnails?: boolean;
}

const MyImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  style,
  showThumbnails = false,
}) => {
  const [visibleImages, setVisibleImages] = useState<any[]>([]);

  // 🟢 טעינה מדורגת: קודם תמונה אחת → שנייה → ואז כל השאר
  useEffect(() => {
    if (!images || images.length === 0) return;

    setVisibleImages([images[0]]); // רק הראשונה מידית

    const secondTimer = setTimeout(() => {
      if (images[1]) {
        setVisibleImages((prev) => [...prev, images[1]]);
      }
    }, 300);

    const restTimer = setTimeout(() => {
      setVisibleImages(images);
    }, 1500);

    return () => {
      clearTimeout(secondTimer);
      clearTimeout(restTimer);
    };
  }, [images]);

  const imagesWithThumbnail = visibleImages.map((i: any) => ({
    original: i?.original || i,
    thumbnail: showThumbnails ? (i?.thumbnail || i?.original || i) : null,
  }));

  const [isFullScreen, setIsFullScreen] = useState(false);

  const defaultParams = {
    items: imagesWithThumbnail,
    showPlayButton: false,
    showThumbnails,
    showFullscreenButton: false,
    showIndex: true,
    isRTL: false,
    lazyLoad: true,
    // autoPlay: true,
    infinite: true,
    // slideInterval: 4000,
  };

  const defaultModalParams = {
    ...defaultParams,
    autoPlay: false,
    renderItem: (item: ReactImageGalleryItem) => (
      <img
        src={item.original}
        loading="lazy"
        decoding="async"
        style={{
          maxWidth: "100%",
          objectFit: "contain",
          width: "100vw",
          height: "100vh",
        }}
      />
    ),
  };

  return (
    <div
      className={classnames("image-gallery-wrapper", {
        fullscreen: isFullScreen,
      })}
      style={{ ...style }}
    >
      <ImageGallery
        {...defaultParams}
        renderThumbInner={(item: ReactImageGalleryItem) => (
          <img
            src={item.thumbnail || ""}
            alt=""
            loading="lazy"
            decoding="async"
            style={{
              width: "100%",
              height: "80px",
              objectFit: "cover",
              borderRadius: "4px",
            }}
          />
        )}
        disableKeyDown
        renderItem={(item: ReactImageGalleryItem) => (
          <img
            src={item.original}
            id={item.original}
            loading="lazy"
            decoding="async"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        )}
        showNav={images.length > 1}
      />
      <div className="full-screen-button" onClick={() => setIsFullScreen(true)}>
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
    </div>
  );
};

export default MyImageGallery;
