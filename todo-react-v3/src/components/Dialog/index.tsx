import styles from "./styles.module.scss";
import { ReactNode, useEffect, useRef } from "react";

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

  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (dialogRef.current === event.target) {
      onClose();
    }
  };

  return (
    <dialog
      className={styles.dialog}
      onClick={handleBackdropClick}
      ref={dialogRef}
    >
      <div className={styles.dialogContext}>{children}</div>
    </dialog>
  );
}
