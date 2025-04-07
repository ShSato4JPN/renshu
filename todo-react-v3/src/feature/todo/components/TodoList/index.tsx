import { useTodo } from "../../../../stores/useTodo";
import DeleteTodo from "../delete-todo";

export default function TodoList() {
  const { todos } = useTodo();

  return (
    <>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <div>{todo.id}</div>
            <div>{todo.title}</div>
            <div>{todo.description}</div>
            <div>{todo.expire}</div>
            <div>{todo.createdAt}</div>
            <div>{todo.updatedAt}</div>
            <DeleteTodo />
          </div>
        );
      })}
    </>
  );
}
