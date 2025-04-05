import styles from "./style.module.scss";
import { ReactNode, useEffect, useRef } from "react";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  isCloseButton?: boolean;
  isOkButton?: boolean;
  isCancelButton?: boolean;
  isBackClickCLose?: boolean;
  onClose: () => void;
  onSubmit?: () => void;
};

export default function Modal({
  children,
  isOpen,
  isCloseButton = true,
  isOkButton = false,
  isCancelButton = false,
  isBackClickCLose = true,
  onClose,
  onSubmit,
}: ModalProps) {
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
    if (isBackClickCLose && event.target === dialogRef.current) {
      onClose();
    }
  };

  return (
    <dialog
      className={styles.dialog}
      ref={dialogRef}
      onClick={handleBackdropClick}
    >
      <div className={styles.dialogLayout}>
        <header className={styles.header}>
          {isCloseButton && <button onClick={() => onClose()}>X</button>}
        </header>
        <div className={styles.body}>{children}</div>
        <footer className={styles.footer}>
          {isCancelButton && (
            <button onClick={() => onClose()}>キャンセル</button>
          )}
          {isOkButton && <button onClick={() => onSubmit?.()}>はい</button>}
        </footer>
      </div>
    </dialog>
  );
}
