import { ReactNode } from "react";
import styles from "./style.module.scss";
import Header from "../Header";
import Footer from "../Footer";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.layout}>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
