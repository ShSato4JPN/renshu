import styles from "./style.module.scss";
import Dialog from "../../../Dialog";
import { useState } from "react";
import { useTodoStore } from "../../../../store/useTodoStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schema, UpdateData } from "../../api/update-todo";

type TodoDialogProps = {
  todo: {
    id: string;
    title: string;
    memo?: string;
    createdAt: string;
    updatedAt: string;
  };
};

export default function UpdateTodo({ todo }: TodoDialogProps) {
  const { register, handleSubmit, getValues } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      title: todo.title,
      memo: todo.memo || "",
    },
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { updateTodo } = useTodoStore();

  const onSubmit = (data: UpdateData) => {
    updateTodo({ ...todo, ...data });
    setIsOpen(false);
  };

  return (
    <>
      <button
        className={styles.todoDialogButton}
        onClick={() => setIsOpen(true)}
      >
        選択
      </button>
      <Dialog
        isOpen={isOpen}
        isCloseButton={false}
        isCancelButton={false}
        isBackClickCLose={false}
        onClose={() => setIsOpen(false)}
      >
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="title">タイトル</label>
            <input type="text" {...register("title")} />
          </div>
          <div>
            <label htmlFor="memo">メモ</label>
            <input type="text" {...register("memo")} />
          </div>
          <button
            type="button"
            onClick={() => {
              const { title, memo } = getValues();

              if (todo.title !== title || todo.memo !== memo) {
                if (confirm("編集途中ですが閉じてもよろしいでしょうか？")) {
                  setIsOpen(false);
                }

                return;
              }

              setIsOpen(false);
            }}
          >
            キャンセル
          </button>
          <button
            type="submit"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              if (!confirm("更新しますか？")) {
                event.preventDefault();
              }
            }}
          >
            更新
          </button>
        </form>
      </Dialog>
      ,
    </>
  );
}
