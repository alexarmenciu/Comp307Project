"use client";
import React from "react";
import styles from "../page.module.css";
import { useEffect, useState } from "react";

export default function Header() {
  const [hasSession, setHasSession] = useState(false);
  const [username, setUsername] = useState("");
  const logout = async () => {
    document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    window.location.href = "/";
  };

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
          setHasSession(true);
          setUsername(
            document.cookie
              .split("; ")
              .find((row) => row.startsWith("email="))
              .split("=")[1]
          );
        }
      }
    };

    checkSession();
  }, []);
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <a href="/" className={styles.title}>
            <p>Hacker Jobs</p>
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
          {hasSession ? (
            <a className={styles.link} onClick={logout}>
              {username}
            </a>
          ) : (
            <a href="/login" className={styles.link}>
              Login
            </a>
          )}
        </div>
      </nav>
    </header>
  );
}
