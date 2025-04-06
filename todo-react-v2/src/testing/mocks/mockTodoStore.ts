import {vi} from 'vitest';

export const mockCreateTodo = vi.fn();
export const mockTodos = []

vi.mock('../../../src/store/useTodoStore', () => ({
  useTodo: () => ({
    todos: mockTodos,
    createTodo: mockCreateTodo,
  }),
  getState: () => ({
    todos: mockTodos
  })
}))