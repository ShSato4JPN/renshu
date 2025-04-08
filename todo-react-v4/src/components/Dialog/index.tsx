import styles from "./styles.module.scss";
import { ReactNode, useEffect } from "react";
import { useRef } from "react";

type DialogProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export default function Dialog({ children, isOpen, onClose }: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

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

  return (
    <dialog className={styles.dialog} onClick={onBackdropClick} ref={dialogRef}>
      <div className={styles.dialogContext}>{children}</div>
    </dialog>
  );
}
