"use client";
// pages/login.tsx
import { useState } from "react";
import styles from "../page.module.css";
import Header from "../components/header";
import sha256 from "../components/hashing";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("here");

    try {
      const username = email;
      const hashedword = await sha256(password);
      const response = await fetch(
        "https://8e21-135-84-23-245.ngrok-free.app/db/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password: hashedword }),
        }
      );

      if (response.ok) {
        const date = new Date();
        date.setDate(date.getDate() + 7);

        // Note: Modifying document.cookie is a client-side operation
        document.cookie = `session=${date.toUTCString()}`;
        document.cookie = `email=${email}`;

        // Redirecting on the client side
        window.location.href = "/";
      } else {
        alert("Login failed.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Log In</h1>
        <a href="/signup" className={styles.description}>
          Sign up &nbsp;&nbsp;
        </a>
        <form onSubmit={handleSubmit} className={styles.form}>
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
              required
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
              required
            />
          </div>
          <br></br>
          <div className={styles.field}>
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
