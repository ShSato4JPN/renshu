import { ErrorBoundary } from "react-error-boundary";
import { ReactNode } from "react";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <ErrorBoundary FallbackComponent={() => <h1>error</h1>}>
      <div>
        <header>header</header>
        <main>{children}</main>
        <footer>footer</footer>
      </div>
    </ErrorBoundary>
  );
}
