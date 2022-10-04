import useOnEscapeKeyDown from "@/hooks/shared/useOnEscapeKeyDown";
import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";


interface Props {
  className?: string;
  testid?: string;
  variant?: string;
  width?: number;
  withCloseIcon?: boolean;
  isOpen: boolean;
  setIsOpen: Function,
  onClose?: Function;
  renderLink?: Function;
  renderContent: Function;
}

const defaultProps: Props = {
  className: "",
  testid: "modal",
  variant: "center",
  width: 600,
  withCloseIcon: true,
  isOpen: false,
  setIsOpen: () => {},
  onClose: () => {},
  renderLink: () => {},
  renderContent: () => {},

};

const Modal = ({
  className,
  testid,
  variant,
  width,
  withCloseIcon,
  isOpen,
  setIsOpen,
  onClose: tellParentToClose,
  renderLink,
  renderContent,
}: Props) => {
//   const [isOpen, setIsOpen] = useState(propsIsOpen);

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  useOnEscapeKeyDown(isOpen, closeModal)

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isOpen]);

  return <>{isOpen && ReactDOM.createPortal(
  <div className={styles.scroll_overlay}>
    <div className={`${styles.clickable_overlay} ${styles.center_overlay}`}>
        <div className={`${styles.styles_modal} ${styles.center}`}>
            {renderContent({close: closeModal})}
        </div>
    </div>
  </div>, document.getElementById('root')!)}</>;
};

export default Modal;
