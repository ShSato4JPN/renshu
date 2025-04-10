import React, { ReactNode, useEffect, useRef } from "react";

type Dialog2Props = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export default function Dialog2({ children, isOpen, onClose }: Dialog2Props) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

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
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      close();
    }
  };

  return (
    <dialog ref={dialogRef} onClick={handleBackdropClick}>
      <div>{children}</div>
    </dialog>
  );
}
