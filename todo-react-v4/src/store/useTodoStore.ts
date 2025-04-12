import { v7 as uuid } from "uuid";
import { create } from "zustand";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");

export type Todo = {
  id: string;
  title: string;
  description?: string;
  expire: string;
  createdAt: string;
  updatedAt: string;
};

type TodoState = {
  todos: Todo[];
  reverse: () => void;
  createTodo: ({
    title,
    description,
    expire,
  }: Pick<Todo, "title" | "description" | "expire">) => void;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
};

export const useTodo = create<TodoState>((set) => ({
  todos: [],
  reverse: () => {
    set((state) => {
      return { todos: state.todos.reverse() };
    });
  },
  createTodo: ({ title, description, expire }) => {
    set((state) => {
      const id = uuid();
      const now = dayjs.tz().format("YYYY/MM/DD HH:mm:dd");

      return {
        todos: [
          ...state.todos,
          { id, title, description, expire, createdAt: now, updatedAt: now },
        ],
      };
    });
  },
  updateTodo: (todo) => {
    set((state) => {
      const now = dayjs.tz().format("YYYY/MM/DD HH:mm:dd");

      const updatedData = state.todos.map((current) => {
        if (todo.id === current.id) {
          return { ...todo, updatedAt: now };
        }

        return current;
      });

      return { todos: [...updatedData] };
    });
  },
  deleteTodo: (id) => {
    set((state) => {
      const deletedData = state.todos.filter((todo) => id !== todo.id);

      return { todos: [...deletedData] };
    });
  },
}));
