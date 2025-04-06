import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import CreateTodo from "../create-todo";
import userEvent from "@testing-library/user-event";
import { mockCreateTodo } from "../../../../testing/mocks/mockTodoStore";

import "../../../../store/useTodoStore";

const renderCreateTodo = () => {
  return render(<CreateTodo onCreateTodo={mockCreateTodo} />);
};

describe("CreateTodo", () => {
  test("todo 作成フォームが表示される", () => {
    renderCreateTodo();

    expect(screen.getByTestId("title")).toHaveValue("");
    expect(screen.getByTestId("description")).toHaveValue("");
    expect(screen.getByTestId("expire")).toHaveValue("");
    expect(screen.getByRole("button", { name: "登録" })).toBeInTheDocument();
  });

  test("エラーメッセージが出力される", async () => {
    renderCreateTodo();

    const buttonElement = screen.getByRole("button", { name: "登録" });

    const user = userEvent.setup();
    await user.click(buttonElement);

    expect(screen.getByText("タイトルが入力されていません"));
    expect(screen.getByText("有効期限が入力されていません"));
  });

  test("todo が登録される", async () => {
    renderCreateTodo();

    const user = userEvent.setup();

    const titleElement = screen.getByTestId("title");
    await user.type(titleElement, "title");

    const descriptionElement = screen.getByTestId("description");
    await user.type(descriptionElement, "description");

    // type=date のテストコード
    const expireElement = screen.getByTestId("expire");
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];

    fireEvent.change(expireElement, { target: { value: formattedDate } });

    expect(expireElement).toHaveValue(formattedDate);

    // フォームを送信
    const buttonElement = screen.getByRole("button", { name: "登録" });
    await user.click(buttonElement);
  });
});
