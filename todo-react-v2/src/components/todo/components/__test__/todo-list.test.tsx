import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import TodoList from "../todos-list";

const renderTodoList = () => {
  return render(<TodoList />);
};

describe("TodoList", () => {
  test("todo が未登録の場合", () => {
    renderTodoList();
    expect(screen.getByText("データがありません"));
  });
});
