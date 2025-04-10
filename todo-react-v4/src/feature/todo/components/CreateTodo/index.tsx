import styles from "./styles.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CreateTodoData, schema } from "../../api/create-todo";
import { ErrorMessage } from "@hookform/error-message";
import { useTodo } from "../../../../store/useTodoStore";

export default function CreateTodo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const { createTodo } = useTodo();

  const onSubmit = handleSubmit((data: CreateTodoData) => {
    createTodo(data);
  });

  return (
    <form className={styles.form} onSubmit={onSubmit} role="form">
      <div className={styles.formItem}>
        <label htmlFor="title">タイトル</label>
        <input type="text" {...register("title")} placeholder="タイトル" />
        <ErrorMessage errors={errors} name="title" />
      </div>
      <div className={styles.formItem}>
        <label htmlFor="description">説明</label>
        <input type="text" {...register("description")} placeholder="説明" />
        <ErrorMessage errors={errors} name="description" />
      </div>
      <div className={styles.formItem}>
        <label htmlFor="expire">期限</label>
        <input type="date" {...register("expire")} placeholder="期限" />
        <ErrorMessage errors={errors} name="expire" />
      </div>
      <div className={styles.submit}>
        <button type="submit">登録</button>
      </div>
    </form>
  );
}
