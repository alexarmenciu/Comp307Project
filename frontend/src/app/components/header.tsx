import React from "react";
import Link from "next/link";
import styles from "../page.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <a href="/" className={styles.title}>
            Hacker Jobs
          </a>
        </div>
      </nav>
      <nav className={styles.nav}>
        <div>
          <a href="/jobs" className={styles.link}>
            Jobs
          </a>
          <a href="/about" className={styles.link}>
            About
          </a>
          <a href="/login" className={styles.link}>
            Login
          </a>
        </div>
      </nav>
    </header>
  );
}
