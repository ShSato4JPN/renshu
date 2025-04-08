import { useTodo } from "../../../../store/useTodoStore";
import UpdateTodo from "../UpdateTodo";

export default function TodoList() {
  const { todos } = useTodo();

  return (
    <>
      {todos.map((todo) => {
        return (
          <div>
            <h2>{todo.title}</h2>
            <UpdateTodo todo={todo} />
          </div>
        );
      })}
    </>
  );
}
