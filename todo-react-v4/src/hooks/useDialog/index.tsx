import styles from "./styles.module.scss";
import { JSX, ReactNode, useCallback, useEffect, useState } from "react";
import { useRef } from "react";

type DialogProps = {
  children: ReactNode;
};

export default function useDialog() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const dialogElement = dialogRef.current;

    if (!dialogElement) return;

    if (isOpen) {
      dialogElement.showModal();
    } else {
      dialogElement.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const onBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  const Dialog = ({ children }: DialogProps): JSX.Element => (
    <dialog
      className={styles.dialog}
      onClick={onBackdropClick}
      ref={dialogRef}
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
    >
      <div className={styles.dialogContext}>{children}</div>
    </dialog>
  );

  return { isOpen, onOpen, onClose, Dialog };
}
