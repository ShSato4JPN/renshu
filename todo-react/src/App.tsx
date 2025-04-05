import AppError from "./components/AppError";
import { ErrorBoundary } from "react-error-boundary";
import AppLayout from "./components/Layout";
import Todo from "./components/Todo";
import Dialog from "./components/Todo/components/Test";
import { useRef, useState } from "react";

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <ErrorBoundary fallback={<AppError />}>
      <AppLayout>
        <Todo />
        <input />
        <input />
        <input />
        <input />
        <input />
        <input />
        <button onClick={() => setIsDialogOpen(true)}>ダイアログを開く</button>

        <Dialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          title="サンプルダイアログ"
        >
          <p>ダイアログの内容をここに記述します。</p>
          <input ref={inputRef} placeholder="このフィールドに初期フォーカス" />
        </Dialog>
      </AppLayout>
    </ErrorBoundary>
  );
}

export default App;
