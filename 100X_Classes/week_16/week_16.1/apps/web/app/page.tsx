import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div> i am from web page</div>
      <Button appName={"web app"}>i am saif</Button>
    </div>
  );
}
