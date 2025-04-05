import styles from "./style.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTodoStore } from "../../../../store/useTodoStore";
import { schema, TodoData } from "../../api/create-todo";

export default function CreateTodo() {
  const { register, handleSubmit } = useForm({ resolver: zodResolver(schema) });
  const { createTodo } = useTodoStore();

  const onSubmit = (data: TodoData) => {
    createTodo(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.todoForm}>
      <label htmlFor="title">タイトル</label>
      <input {...register("title")} placeholder="タイトル" />
      <label htmlFor="memo">メモ</label>
      <input {...register("memo")} placeholder="メモ" />
      <button type="submit">登録</button>
    </form>
  );
}
