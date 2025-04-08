import styles from "./stylese.module.scss";
import CreateTodo from "./feature/todo/components/CreateTodo";
import TodoList from "./feature/todo/components/TodoList";

function App() {
  return (
    <>
      <div className={styles.layout}>
        <CreateTodo />
        <TodoList />
      </div>
    </>
  );
}

export default App;
