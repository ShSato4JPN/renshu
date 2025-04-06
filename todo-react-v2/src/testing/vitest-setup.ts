import '@testing-library/jest-dom/vitest';
import { beforeEach } from 'vitest';
import { mockCreateTodo, mockTodos } from './mocks/mockTodoStore';

beforeEach(() => {
  mockCreateTodo.mockReset();
  mockTodos.length = 0;
})