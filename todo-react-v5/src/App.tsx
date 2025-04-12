import "./App.css";
import { TodoContext } from "./context/todo-context";
import CreateTodo from "./components/create-todo";
import ListTodo from "./components/list-todo";
//import HandleError from "./components/HandleError";
import { ErrorBoundary } from "react-error-boundary";
import { useTodoContext } from "./context/useTodoContext";

function App() {
  const { todos, createTodo, updateTodo, deleteTodo } = useTodoContext();

  return (
    <ErrorBoundary fallback={<h1>エラーが発生しました！！</h1>}>
      <TodoContext value={{ todos, createTodo, updateTodo, deleteTodo }}>
        <CreateTodo />
        <ListTodo />
      </TodoContext>
    </ErrorBoundary>
  );
}

export default App;
