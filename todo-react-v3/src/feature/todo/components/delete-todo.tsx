import { useState } from "react";
import Dialog from "../../../components/Dialog";

export default function DeleteTodo() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>削除</button>
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h1>test</h1>
      </Dialog>
    </>
  );
}
