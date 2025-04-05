import styles from "./style.module.scss";

import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

export default function Todo() {
  return (
    <div className={styles.todo}>
      <CreateTodo />
      <TodoList />
    </div>
  );
}
