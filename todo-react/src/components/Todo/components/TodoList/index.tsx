import { useTodoStore } from "../../../../store/useTodoStore";
import TodoItem from "../TodoItem";
import styles from "./style.module.scss";

export default function TodoList() {
  const { todos } = useTodoStore();

  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
}
