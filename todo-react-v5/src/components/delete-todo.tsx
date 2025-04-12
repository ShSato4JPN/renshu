import { useState } from "react";
import { useTodo } from "../context/todo-context";
import Dialog from "./dialog";

export default function DeleteTodo({ id }: { id: string }) {
  const { deleteTodo } = useTodo();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        削除
      </button>
      <Dialog isOpen={isOpen} onClose={onClose}>
        <div>
          <h4>本当に削除しますか？</h4>
          <button onClick={() => onClose()}>キャンセル</button>
          <button onClick={handleDelete}>はい</button>
        </div>
      </Dialog>
    </>
  );
}
