import styles from "./page.module.css";
import Header from "./components/header";

export default function Home() {
  return (
    <body>
      <Header />
      <main className={styles.main}>
        <div className={styles.description}>
          <p className={styles.text}>
            This is a Next.js (React) app with a NestJS (Express) backend. The
            frontend and backend are written in TypeScript.
          </p>
        </div>
      </main>
    </body>
  );
}
