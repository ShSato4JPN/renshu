import styles from "./styles.module.scss";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateTodoData, schema } from "../../api/create-todo";
import { useTodo } from "../../../../stores/useTodo";

export default function CreateTodo() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const { createTodo } = useTodo();

  const onSubmit = (data: CreateTodoData) => {
    createTodo(data);

    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
      <div className={styles.formFooter}>
        <button type="submit">登録</button>
      </div>
    </form>
  );
}
