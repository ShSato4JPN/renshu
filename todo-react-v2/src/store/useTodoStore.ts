import { v7 as uuid } from 'uuid';
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault("Asia/Tokyo")

export type Todo = {
  id: string,
  title: string,
  description?: string,
  expire: string,
  createdAt: string,
  updatedAt: string,
}

interface TodoState {
  todos: Todo[],
  createTodo: ({title, description, expire}: {title: string, description?:string, expire: string}) => void,
  updateTodo: (todo: Todo) => void,
  deleteTodo: (id: {id: string}) => void,
}

export const useTodo = create<TodoState>()(devtools(persist((set) => ({
  todos: [],
  createTodo: ({title, description, expire}: {title: string, description?:string, expire: string}) => {
    set((state) => {
      const id = uuid();
      const now = dayjs.tz().format('YYYY-MM-DD HH:mm:ss')

      return {todos: [...state.todos, {id, title, description, expire, createdAt: now, updatedAt: now}]}
    })
  },
  updateTodo: ({id, title, description, expire}: Todo) => {
    set((state) => {
      const updatedData = state.todos.map(todo => {
        if (todo.id === id) {
          const now = dayjs.tz().format('YYYY-MM-DD HH:mm:ss')

          return {...todo, title, description, expire, updatedAt: now}
        }

        return todo
      })

      return {todos: [...updatedData]}
    })

  },
  deleteTodo: ({id}: {id: string}) => {
    set((state) => {
      const deletedData = state.todos.filter(todo => todo.id !== id)

      return {todos: [...deletedData]}
    })
  }
}), {name: 'todo-data'})))