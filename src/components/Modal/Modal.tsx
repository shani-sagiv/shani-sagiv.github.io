import React, { ReactNode, useEffect } from "react";
import "./Modal.scss";

interface ModalProps {
  closeModal: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children, closeModal }) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Disable scrolling when the modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset"; // Re-enable scrolling when modal closes
    };
  }, []);

  return (
    <div className={"modal-overlay"} onClick={handleOverlayClick}>
      <div className={"modal"}>{children}</div>
    </div>
  );
};

export default Modal;
