import AppLayout from "./components/AppLayout";
import Layout from "./components/Layout";
import CreateTodo from "./feature/todo/components/CreateTodo";
import TodoList from "./feature/todo/components/TodoList";

function App() {
  return (
    <AppLayout>
      <Layout>
        <CreateTodo />
        <TodoList />
      </Layout>
    </AppLayout>
  );
}

export default App;
