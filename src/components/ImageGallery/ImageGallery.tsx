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
    showThumbnails?: boolean;

}

const MyImageGallery: React.FC<ImageGalleryProps> = ({ images, style, showThumbnails=false }) => {
  const imagesWithThumbnail = images.map((i: any) => ({
    original: i?.original || i,
    thumbnail: i?.thumbnail || i?.original || i,
  }));
  const [isFullScreen, setIsFullScreen] = React.useState(false);
  
  
  
  const defaultParams = {
    items: imagesWithThumbnail,
    showPlayButton: false,
    showThumbnails: showThumbnails,
    showFullscreenButton: false,
    showIndex: true,
    isRTL: false,
    lazyLoad: true,
        autoPlay: true,
    slideInterval: Math.floor(Math.random() * 3000) + 1000, // 1000ms = 1 second
 

  };
  const defaultModalParams = {
    ...defaultParams,
            autoPlay: false,

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

  return (
    <div
      className={classnames("image-gallery-wrapper", {
        fullscreen: isFullScreen,
      })}
      // style={{height:"100%"}}
      style={{  ...style}}
    >
      <ImageGallery
        {...defaultParams}
        renderThumbInner={ (item: ReactImageGalleryItem) => (
          <img
            src={item.thumbnail}
            alt=""
            loading="lazy"
            style={{
              width: "100%",       // או מספר קבוע למשל "80px"
              height: "80px",      // שים גובה אחיד
              objectFit: "cover",  // תמלא את המרחב ותחתוך
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
            onLoad={(e) => {
              // console.log("item.original:", item.original);
              // console.log("Image height:", e.currentTarget.clientHeight);
              //   c
              // if (e.currentTarget.clientHeight > 300) {
              //   e.currentTarget.style.marginTop = "-40%";
              //   // e.currentTarget.style.backgroundColor = "red";
              // }
            }}
            style={{
              objectFit: "cover",        // ⬅️ ממלא את כל המרחב וחותך אם צריך
              objectPosition: "center",  // ⬅️ שומר על האמצע
              maxWidth: "100%",
              maxHeight: "100%",
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
    </div>
  );
};

export default MyImageGallery;
