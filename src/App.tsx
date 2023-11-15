import { useEffect } from "react";

import styles from "./App.module.scss";
import "./index.scss";
import TheTable from "./ui/components/TheTable";
import globals from "./ui/scss/globals.module.scss";

export default function App() {
  useEffect(() => {
    document.body.className = globals.GLOBALS;
  }, []);

  return (
    <div className={styles.bg}>
      <TheTable />
    </div>
  );
}
