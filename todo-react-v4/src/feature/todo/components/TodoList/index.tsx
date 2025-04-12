import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { Todo, useTodo } from "../../../../store/useTodoStore";
import DeleteTodo from "../DeleteTodo";
import UpdateTodo from "../UpdateTodo";

const ListItem = ({ todo }: { todo: Todo }) => {
  return (
    <motion.div layout className="todo-item">
      <h2>{todo.title}</h2>
      <UpdateTodo todo={todo} />
      <DeleteTodo id={todo.id} />
    </motion.div>
  );
};

export default function TodoList() {
  const { todos, reverse } = useTodo();

  return (
    <LayoutGroup>
      <button
        onClick={() => {
          reverse();
        }}
      >
        sort
      </button>
      <AnimatePresence>
        {todos.map((todo) => (
          <ListItem key={todo.id} todo={todo} />
        ))}
      </AnimatePresence>
    </LayoutGroup>
  );
}
