import DeleteTodo from "../DeleteTodo";
import UpdateTodo from "../UpdateTodo";
import styles from "./style.module.scss";

type TodoItemProps = {
  todo: {
    id: string;
    title: string;
    memo?: string;
    createdAt: string;
    updatedAt: string;
  };
};

export default function TodoItem({ todo }: TodoItemProps) {
  return (
    <div className={styles.todoItem}>
      <input type="checkbox" />
      <div>{todo.title}</div>
      <div>{todo.createdAt}</div>
      <UpdateTodo todo={todo} />
      <DeleteTodo id={todo.id} />
    </div>
  );
}
