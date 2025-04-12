import { createContext, useContext } from "react";

export type Todo = {
  id: string;
  title: string;
  description?: string;
  expire: string;
  createdAt: string;
  updatedAt: string;
};

type TodoContext = {
  todos: Todo[];
  createTodo: ({
    title,
    description,
    expire,
  }: Pick<Todo, "title" | "description" | "expire">) => void;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
};

export const TodoContext = createContext<TodoContext | undefined>(undefined);

export const useTodo = () => {
  const context = useContext(TodoContext);

  if (!context) throw new Error("context error");

  return { ...context };
};
