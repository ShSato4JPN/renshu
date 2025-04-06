import styles from "./styles.module.scss";
import { useTodo } from "../../../../store/useTodoStore";
import DeleteTodo from "../delete-todo";
import UpdateTodo from "../update-todo";

export default function TodoList() {
  const { todos, deleteTodo, updateTodo } = useTodo();

  if (todos.length === 0) {
    return (
      <div>
        <span>データがありません</span>
      </div>
    );
  }

  return (
    <>
      {todos.map((todo) => {
        return (
          <div className={styles.todo} key={todo.id}>
            <header className={styles.header}>{todo.title}</header>
            <div className={styles.body}>
              <div className={styles.item}>
                <div>内容</div>
                <div>{todo.description}</div>
              </div>
              <div className={styles.item}>
                <div>期限</div>
                <div>{todo.expire}</div>
              </div>
              <div className={styles.item}>
                <div>作成日</div>
                <div>{todo.createdAt}</div>
              </div>
              <div className={styles.item}>
                <div>更新日</div>
                <div>{todo.updatedAt}</div>
              </div>
            </div>
            <footer className={styles.footer}>
              <UpdateTodo todo={todo} onUpdate={() => updateTodo(todo)} />
              <DeleteTodo onDelete={() => deleteTodo({ id: todo.id })} />
            </footer>
          </div>
        );
      })}
    </>
  );
}
