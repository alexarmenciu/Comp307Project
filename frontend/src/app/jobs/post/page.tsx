// login page
"use client";
import React, { useState, useEffect } from "react";
import styles from "../../page.module.css";
import Header from "../../components/header";

const AboutPage: React.FC = () => {
  // form to add a job
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    const checkSession = async () => {
      const sessionCookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("session="));

      if (sessionCookie) {
        const expirationTimeString = sessionCookie.split("=")[1];
        const expirationDate = new Date(expirationTimeString);

        if (
          !isNaN(expirationDate.getTime()) &&
          expirationDate.getTime() > Date.now()
        ) {
          // Session is still valid
          // setHasSession(true);
          // const tempCookie = document.cookie
          //   .split("; ")
          //   .find((row) => row.startsWith("email="));
          // // Using nullish coalescing operator (??)
          // const temp = tempCookie?.split("=")[1] ?? "null";
          // setUsername(temp);
        } else {
          window.location.href = "/login";
        }
      } else {
        window.location.href = "/login";
      }
    };

    checkSession();
  }, []);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("here");

    try {
      const tempCookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("email="));

      // Using nullish coalescing operator (??)
      const user = tempCookie?.split("=")[1] ?? "null";

      const response = await fetch(
        "https://8e21-135-84-23-245.ngrok-free.app/db/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user, title, body, link }),
        }
      );

      // Redirecting on the client side
      window.location.href = "/jobs";
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return (
    <div className="main">
      <Header />
      <section className={styles.section}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h1 className={styles.title}>Post a Job</h1>

          <div className={styles.field}>
            <label htmlFor="title" className={styles.label}>
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="link" className={styles.label}>
              Link
            </label>
            <input
              id="link"
              type="text"
              value={link}
              onChange={(event) => setLink(event.target.value)}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.field} style={{ paddingBottom: "10px" }}>
            <label htmlFor="body" className={styles.label}>
              Description
            </label>
            <textarea
              id="body"
              value={body}
              onChange={(event) => setBody(event.target.value)}
              className={styles.input}
              style={{ height: "100px" }}
              required
            />
          </div>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default AboutPage;
