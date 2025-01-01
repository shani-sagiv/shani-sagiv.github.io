import React, { ReactNode, useEffect } from "react";
import "./Modal.scss";

interface ModalProps {
  closeModal: () => void;
  children: ReactNode;
  hidden?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  children,
  closeModal,
  hidden = false,
}) => {
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
  if (hidden) {
    return null;
  }

  return (
    <div className={"modal-overlay"} onClick={handleOverlayClick}>
      <div className={"modal"}>{children}</div>
    </div>
  );
};

export default Modal;
