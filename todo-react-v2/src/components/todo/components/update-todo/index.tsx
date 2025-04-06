import { useState } from "react";
import Dialog from "../../../dialog";
import { Todo } from "../../../../store/useTodoStore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../../api/update-todo";
import styles from "./styles.module.scss";
import { ErrorMessage } from "@hookform/error-message";
import { describe } from "vitest";

type UpdateTodoProps = {
  todo: Todo;
  onUpdate: () => void;
};

export default function UpdateTodo({ todo, onUpdate }: UpdateTodoProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      title: todo.title,
      description: todo.description,
      expire: todo.expire,
    },
  });

  return (
    <>
      <button onClick={() => setIsOpen(true)}>編集</button>
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <form className={styles.form}>
          <div className={styles.formItem}>
            <label htmlFor="title">タイトル</label>
            <input
              {...register("title")}
              placeholder="タイトル"
              data-testid="title"
            />
          </div>
          <div className={styles.error}>
            <ErrorMessage errors={errors} name="title" />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="description">説明</label>
            <input
              {...register("description")}
              placeholder="説明"
              data-testid="description"
            />
          </div>
          <div className={styles.error}>
            <ErrorMessage errors={errors} name="description" />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="expire">有効期限</label>
            <input
              {...register("expire")}
              type="date"
              placeholder="有効期限"
              data-testid="expire"
            />
          </div>
          <div className={styles.error}>
            <ErrorMessage errors={errors} name="expire" />
          </div>
          <div className={styles.submit}>
            <button type="submit" data-testid="submit">
              キャンセル
            </button>
            <button type="submit" data-testid="submit">
              更新
            </button>
          </div>
        </form>
      </Dialog>
    </>
  );
}
