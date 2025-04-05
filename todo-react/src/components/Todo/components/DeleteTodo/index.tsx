import { useState } from "react";
import Dialog from "../../../Dialog";
import styles from "./style.module.scss";
import { useTodoStore } from "../../../../store/useTodoStore";

type TodoDialogProps = {
  id: string;
};

export default function DeleteTodo({ id }: TodoDialogProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { deleteTodo } = useTodoStore();

  const onDelete = (id: string) => {
    deleteTodo(id);
  };

  return (
    <>
      <button
        className={styles.todoDialogButton}
        onClick={() => setIsOpen(true)}
      >
        削除
      </button>
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        isCloseButton={false}
        isCancelButton={true}
        isOkButton={true}
        onSubmit={() => onDelete(id)}
      >
        <span>削除しますか</span>
      </Dialog>
    </>
  );
}
