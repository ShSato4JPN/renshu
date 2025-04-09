import '@testing-library/jest-dom/vitest';
import { afterAll, beforeAll, vi } from 'vitest';

beforeAll(() => {
  // window.alertのモック化
  vi.spyOn(window, 'alert').mockImplementation(() => {});
  // window.confirmをOKを押すようにモック化
  vi.spyOn(window, 'confirm').mockImplementation(() => true);
});

afterAll(() => {
  vi.restoreAllMocks();
});