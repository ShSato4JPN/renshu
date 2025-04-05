import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { v7 as uuid } from "uuid";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");

type TodoItem = {
  id: string;
  title: string;
  memo?: string;
  createdAt: string;
  updatedAt: string;
};

interface TodoState {
  todos: TodoItem[];
  createTodo: (todo: { title: string; memo?: string }) => void;
  updateTodo: (todo: { id: string; title: string; memo?: string }) => void;
  deleteTodo: (id: string) => void;
}

export const useTodoStore = create<TodoState>()(
  devtools(
    persist(
      (set) => ({
        todos: [],
        createTodo: ({ title, memo }) =>
          set((state) => {
            const id = uuid();
            const now = dayjs().format("yyyy/MM/dd HH:mm:ss");

            return {
              todos: [
                ...state.todos,
                { id, title, memo, createdAt: now, updatedAt: now },
              ],
            };
          }),
        updateTodo: ({ id, title, memo }) =>
          set((state) => {
            const now = dayjs().format("yyyy/MM/dd HH:mm:ss");

            const updatedTodos = state.todos.map((todo) => {
              if (todo.id === id) {
                return { ...todo, title, memo, updatedAt: now };
              }
              return todo;
            });

            return { todos: updatedTodos };
          }),
        deleteTodo: (id) => {
          set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
          }));
        },
      }),
      {
        name: "todo-storage",
      }
    )
  )
);
