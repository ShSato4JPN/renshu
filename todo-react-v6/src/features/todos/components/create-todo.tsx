import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createTodoInputSchema } from "../api/create-todo";

export default function CreateTodo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createTodoInputSchema),
  });

  const onSubmit = handleSubmit((data) => {
    alert(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="title"></label>
      <input {...register("title")}></input>
      <label htmlFor="description"></label>
      <input {...register("description")}></input>
      <button type="submit">登録</button>
    </form>
  );
}
