import useDialog from "../../../../hooks/useDialog";
import { useTodo } from "../../../../store/useTodoStore";

type DeleteTodoProps = {
  id: string;
};

export default function DeleteTodo({ id }: DeleteTodoProps) {
  const { onOpen, onClose, Dialog } = useDialog();
  const { deleteTodo } = useTodo();

  const handleDelete = () => {
    deleteTodo(id);

    onClose();
  };

  return (
    <>
      <button onClick={onOpen}>削除</button>
      <Dialog>
        <div>
          <div>削除しますか？</div>
          <button onClick={onClose}>キャンセル</button>
          <button onClick={handleDelete}>はい</button>
        </div>
      </Dialog>
    </>
  );
}
