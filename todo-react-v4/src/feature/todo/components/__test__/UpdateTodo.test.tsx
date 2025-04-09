import { describe, expect, test } from "vitest";
import CreateTodo from "../CreateTodo";
import { screen, render } from "@testing-library/react";
import { useTodo } from "../../../../store/useTodoStore";
import userEvent from "@testing-library/user-event";
import UpdateTodo from "../UpdateTodo";
import DeleteTodo from "../DeleteTodo";

describe("登録から更新までの一連の流れ", () => {
  test("Todo作成（Create操作）", async () => {
    // レンダリング
    render(<CreateTodo />);

    const user = userEvent.setup();

    // テキスト入力
    await user.type(
      screen.getByPlaceholderText("タイトル"),
      "タイトル（テスト）"
    );
    await user.type(screen.getByPlaceholderText("説明"), "説明（テスト）");
    await user.type(screen.getByPlaceholderText("期限"), "2025-04-10");

    // 登録ボタン押下
    await user.click(screen.getByRole("button", { name: "登録" }));

    expect(useTodo.getState().todos.length).toBe(1);
  });

  test("Todo更新（Update操作）", async () => {
    const todo = useTodo.getState().todos[0];
    // レンダリング
    render(<UpdateTodo todo={todo} />);

    const user = userEvent.setup();
    // 更新ボタンを押下してダイアログを表示
    await user.click(screen.getByRole("button", { name: "更新" }));
    // ダイアログ確認
    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
    // 更新内容を入力
    const newTitle = "タイトル（アップデート）";
    await user.clear(screen.getByPlaceholderText("タイトル"));
    await user.type(screen.getByPlaceholderText("タイトル"), newTitle);

    const newDescription = "説明（アップデート）";
    await user.clear(screen.getByPlaceholderText("説明"));
    await user.type(screen.getByPlaceholderText("説明"), newDescription);

    const newExpire = "2025-10-01";
    await user.clear(screen.getByPlaceholderText("期限"));
    await user.type(screen.getByPlaceholderText("期限"), newExpire);

    // 更新ボタン(submit)押下
    const submitButton = dialog.querySelector(
      'button[type="submit"]'
    ) as Element;
    await user.click(submitButton);
    // アラートが表示されることを確認
    expect(window.alert).toHaveBeenCalled();
    // 内容チェック
    expect(useTodo.getState().todos.length).toBe(1);
    // 値チェック
    const { title, description, expire } = useTodo.getState().todos[0];
    expect(title).toEqual(newTitle);
    expect(description).toEqual(newDescription);
    expect(expire).toEqual(newExpire);
  });

  test("Todo更新（Delete操作）", async () => {
    const id = useTodo.getState().todos[0].id;

    render(<DeleteTodo id={id} />);

    const user = userEvent.setup();

    await user.click(screen.getByRole("button", { name: "削除" }));
    // ダイアログが開くことを確認する
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "キャンセル" }));
    // キャンセルボタンイベント
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "削除" }));
    // はいボタンイベント
    await user.click(screen.getByRole("button", { name: "はい" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    // todo が削除されていることを確認する
    expect(useTodo.getState().todos.length).toBe(0);
  });
});
