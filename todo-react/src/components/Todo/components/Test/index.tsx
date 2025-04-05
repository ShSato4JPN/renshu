import React, { useRef, useEffect } from "react";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  closeOnEscape?: boolean;
  closeOnOutsideClick?: boolean;
  initialFocusRef?: React.RefObject<HTMLElement>;
}

/**
 * アクセシビリティと使いやすさを考慮した再利用可能なダイアログコンポーネント
 */
const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  children,
  closeOnEscape = true,
  closeOnOutsideClick = true,
  initialFocusRef,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useRef(
    `dialog-title-${Math.random().toString(36).substr(2, 9)}`
  ).current;
  const contentId = useRef(
    `dialog-content-${Math.random().toString(36).substr(2, 9)}`
  ).current;

  // ダイアログの開閉を処理
  useEffect(() => {
    const dialogElement = dialogRef.current;
    if (!dialogElement) return;

    if (isOpen) {
      dialogElement.show();

      // 初期フォーカス設定
      if (initialFocusRef && initialFocusRef.current) {
        initialFocusRef.current.focus();
      } else {
        // デフォルトでは最初のタブ可能な要素にフォーカス
        const focusableElements = dialogElement.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length > 0) {
          (focusableElements[0] as HTMLElement).focus();
        }
      }
    } else {
      try {
        dialogElement.close();
      } catch (e) {
        // ダイアログがまだ開いていない場合のエラーを防止
      }
    }

    return () => {
      try {
        if (dialogElement.open) {
          dialogElement.close();
        }
      } catch (e) {
        // クリーンアップ時のエラーを防止
      }
    };
  }, [isOpen, initialFocusRef]);

  // Escキーのハンドリング
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && closeOnEscape) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, closeOnEscape]);

  // フォーカストラップの実装
  useEffect(() => {
    const dialogElement = dialogRef.current;
    if (!isOpen || !dialogElement) return;

    const focusableElements = dialogElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;

      if (event.shiftKey) {
        // Shift+Tab キーで後ろに移動
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab キーで前に移動
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    dialogElement.addEventListener("keydown", handleTabKey);
    return () => {
      dialogElement.removeEventListener("keydown", handleTabKey);
    };
  }, [isOpen]);

  // 外側クリックの処理
  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    alert();
    if (closeOnOutsideClick && event.target === dialogRef.current) {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="dialog"
      onClick={handleBackdropClick}
      aria-labelledby={titleId}
      aria-describedby={contentId}
    >
      <div className="dialog-content">
        <header className="dialog-header">
          <h2 id={titleId} className="dialog-title">
            {title}
          </h2>
          <button
            type="button"
            className="dialog-close"
            onClick={onClose}
            aria-label="閉じる"
          >
            &times;
          </button>
        </header>
        <div id={contentId} className="dialog-body">
          {children}
        </div>
        <footer className="dialog-footer">
          <button type="button" className="dialog-button" onClick={onClose}>
            閉じる
          </button>
        </footer>
      </div>
    </dialog>
  );
};

export default Dialog;
