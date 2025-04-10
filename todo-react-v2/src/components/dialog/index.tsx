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

  useEffect(() => {
    // ハンドラを定義
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    // ハンドラをマッピング
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    // コンポーネントが削除されると同時にクリーアップ関数でイベントを取り除く
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const onBackgroundClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) {
      onClose();
    }
  };

  return (
    <dialog
      className={styles.dialog}
      onClick={onBackgroundClick}
      ref={dialogRef}
    >
      <div className={styles.dialogContext}>{children}</div>
    </dialog>
  );
}
