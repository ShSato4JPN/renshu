import { useTodo } from "../context/todo-context";
import DeleteTodo from "./delete-todo";

export default function ListTodo() {
  const { todos } = useTodo();

  return (
    <>
      {todos.map((todo, i) => {
        return (
          <div key={i}>
            <h3>{todo.title}</h3>
            <div>{todo.description}</div>
            <div>{todo.expire}</div>
            <DeleteTodo id={todo.id} />
          </div>
        );
      })}
    </>
  );
}
