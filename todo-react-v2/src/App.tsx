import AppLayout from "./components/app-layout";
import CreateTodo from "./components/todo/components/create-todo";
import TodoList from "./components/todo/components/todos-list";
import Layout from "./components/layout";
import { useTodo } from "./store/useTodoStore";

function App() {
  const { createTodo } = useTodo();
  return (
    <AppLayout>
      <Layout>
        <CreateTodo onCreateTodo={createTodo} />
        <TodoList />
      </Layout>
    </AppLayout>
  );
}

export default App;
