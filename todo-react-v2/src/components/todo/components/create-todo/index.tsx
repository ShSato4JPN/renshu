import styles from "./styles.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { CreateTodoData, schema } from "../../api/create-todo";

type CreateTodoProps = {
  onCreateTodo: (todo: {
    title: string;
    expire: string;
    description?: string;
  }) => void;
};

export default function CreateTodo({ onCreateTodo }: CreateTodoProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: CreateTodoData) => {
    onCreateTodo(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
          登録
        </button>
      </div>
    </form>
  );
}
