import styles from "./styles.module.scss";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return <div className={styles.layout}>{children}</div>;
}
