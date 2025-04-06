import { useState } from "react";
import Dialog from "../../../dialog";

type DeleteTodoProps = {
  onDelete: () => void;
};

export default function DeleteTodo({ onDelete }: DeleteTodoProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>削除</button>
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div>
          <span>削除しますか？</span>
          <button onClick={() => setIsOpen(false)}>キャンセル</button>
          <button onClick={onDelete}>削除</button>
        </div>
      </Dialog>
    </>
  );
}
