import { useState } from "react";
import { Todo } from "./todo-context";
import { v7 as uuid } from "uuid";

export const useTodoContext = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return {
    todos,
    createTodo: ({
      title,
      description,
      expire,
    }: Pick<Todo, "title" | "description" | "expire">) => {
      const id = uuid();
      const createdAt = "test";
      const updatedAt = "test";

      setTodos((current) => [
        ...current,
        {
          id,
          title,
          description,
          expire,
          createdAt,
          updatedAt,
        },
      ]);
    },
    updateTodo: (todo: Todo) => {
      setTodos((current) => [...current, todo]);
    },
    deleteTodo: (id: string) => {
      setTodos((current) => [...current.filter((todo) => id !== todo.id)]);
    },
  };
};
