import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useTodo } from "../context/todo-context";

const schema = z.object({
  title: z.string().nonempty({ message: "タイトルを入力してください" }),
  description: z.string().optional(),
  expire: z.string().nonempty({ message: "期限を入力してください" }),
});

export default function CreateTodo() {
  const { createTodo } = useTodo();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    createTodo(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="title"></label>
      <input {...register("title")} placeholder="タイトル" />
      <ErrorMessage errors={errors} name="title" />
      <label htmlFor="description"></label>
      <input {...register("description")} placeholder="説明" />
      <ErrorMessage errors={errors} name="description" />
      <label htmlFor="expire"></label>
      <input {...register("expire")} placeholder="期限" type="date" />
      <ErrorMessage errors={errors} name="expire" />
      <button type="submit">登録</button>
    </form>
  );
}
