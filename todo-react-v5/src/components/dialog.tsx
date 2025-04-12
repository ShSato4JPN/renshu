import { ReactNode, useCallback, useEffect } from "react";

type DialogProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export default function Dialog({ children, isOpen, onClose }: DialogProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    addEventListener("keydown", handleKeyDown);

    return () => {
      removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        console.log(e.target);
        onClose();
      }
    },
    [onClose]
  );

  return (
    <dialog
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal={isOpen}
      aria-labelledby="dialog_label"
      aria-describedby="dialog_desc"
      ref={(node) => {
        if (!node) return;

        if (isOpen) {
          node.showModal();
        } else {
          node.close();
        }
      }}
    >
      <div>{children}</div>
    </dialog>
  );
}
