import styles from "./styles.module.scss";

import Footer from "../footer";
import Header from "../header";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className={styles.appLayout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
