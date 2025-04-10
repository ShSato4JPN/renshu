import styles from "./styles.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Todo, useTodo } from "../../../../store/useTodoStore";
import { schema, UpdateTodoData } from "../../api/update-todo";
import useDialog from "../../../../hooks/useDialog";

type UpdateTodoProps = {
  todo: Todo;
};

export default function UpdateTodo({ todo }: UpdateTodoProps) {
  const { onOpen, onClose, Dialog } = useDialog();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      title: todo.title,
      description: todo.description,
      expire: todo.expire,
    },
  });

  const { updateTodo } = useTodo();

  const onSubmit = handleSubmit((data: UpdateTodoData) => {
    updateTodo({ ...todo, ...data });

    alert("更新しました");

    onClose();
  });

  return (
    <>
      <button onClick={onOpen}>更新</button>
      <Dialog>
        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.formItem}>
            <label htmlFor="title">タイトル</label>
            <input type="text" {...register("title")} placeholder="タイトル" />
            <ErrorMessage errors={errors} name="title" />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="description">説明</label>
            <input
              type="text"
              {...register("description")}
              placeholder="説明"
            />
            <ErrorMessage errors={errors} name="description" />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="expire">期限</label>
            <input type="text" {...register("expire")} placeholder="期限" />
            <ErrorMessage errors={errors} name="expire" />
          </div>
          <div className={styles.submit}>
            <button type="button" onClick={onClose}>
              キャンセル
            </button>
            <button type="submit">更新</button>
          </div>
        </form>
      </Dialog>
    </>
  );
}
