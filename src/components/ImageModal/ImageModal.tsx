import React, { useState } from "react";
import { Modal } from "components";

interface ImageModalProps {
  src: string;
  alt?: string;
  style?: React.CSSProperties;
  additionalImages?: string[];
}
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const ImageModal: React.FC<ImageModalProps> = ({ src, alt, style }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={openModal}
        style={{
          cursor: "pointer",
          maxWidth: "100%",
          userSelect: "none",
          ...style,
        }}
      />
      {isOpen && (
        <Modal closeModal={closeModal}>
          <img src={src} style={{ maxWidth: "100%", maxHeight: "100%" }} />
        </Modal>
      )}
    </>
  );
};

export default ImageModal;
