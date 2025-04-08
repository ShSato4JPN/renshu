import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import CreateTodo from "../CreateTodo";
import userEvent from "@testing-library/user-event";

const renderCreateTodo = () => {
  return render(<CreateTodo />);
};

describe("初期表示", () => {
  test("全ての要素が表示されている", () => {
    renderCreateTodo();

    expect(screen.getByPlaceholderText("タイトル")).toHaveValue("");
    expect(screen.getByPlaceholderText("説明")).toHaveValue("");
    expect(screen.getByPlaceholderText("期限")).toHaveValue("");
    expect(screen.getByRole("button", { name: "登録" })).toBeInTheDocument();
  });
});

describe("機能", () => {
  test("エラーメッセージが出力される", async () => {
    renderCreateTodo();

    const buttonElement = screen.getByRole("button", { name: "登録" });
    const user = userEvent.setup();

    await user.click(buttonElement);

    expect(screen.getByText("タイトルを入力してください")).toBeInTheDocument();
    expect(screen.getByText("期限を入力してください")).toBeInTheDocument();
  });
});
