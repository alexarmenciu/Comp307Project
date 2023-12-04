// login page
"use client";
import React, { useState } from "react";
import styles from "../page.module.css";
import Header from "../components/header";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      window.location.href = "/jobs";
    } else {
      alert("Login failed.");
    }
  }

  return (
    <html lang="en">
      <body className={styles.body}>
        <Header />
        <main className={styles.main}>
          <h1 className={styles.title}>Login</h1>
          <form onSubmit={handleSubmit} className={styles.description}>
            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <button type="submit" className={styles.button}>
                Login
              </button>
            </div>
          </form>
        </main>
      </body>
    </html>
  );
}
