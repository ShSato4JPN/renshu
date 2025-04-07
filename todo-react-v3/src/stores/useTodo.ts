import { v7 as uuid } from 'uuid';
import {create} from 'zustand'
import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc)
dayjs.extend(timezone)


type Todo = {
  id: string;
  title: string;
  description?: string;
  expire: string;
  createdAt: string;
  updatedAt: string;
}

type TodoState = {
  todos: Todo[];
  createTodo: ({title, description, expire}: {title: string, description?: string, expire: string}) => void
  updateTodo: (todo: Todo) => void
  deleteTodo: (id: string) => void
}

export const useTodo = create<TodoState>(set => ({
  todos: [],
  createTodo: ({title, description, expire}) => {
    set((state) => {
      const id = uuid();
      const now = dayjs.tz().format('YYYY-MM-DD HH:mm:ss')

      return {todos: [...state.todos, {id, title, description, expire, createdAt: now, updatedAt: now}]}
    })
  },
  updateTodo: (todo: Todo) => {
    set((state) => {
      const now = dayjs.tz().format('YYYY-MM-DD HH:mm:ss')

      const updatedTodos = state.todos.map((current) => {
        if (current.id === todo.id) {
          return {...todo, updatedAt: now};
        }
        return current;
      });

      return {todos: updatedTodos};
    })
  },
  deleteTodo: (id) => {
    set((state) => {
      const deletedTodos = state.todos.filter(todo => todo.id !== id)

      return {todos: [...deletedTodos]}
    })
  }
}))