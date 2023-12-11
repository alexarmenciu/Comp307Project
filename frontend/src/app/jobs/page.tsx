// login page
"use client";
import React, { useState, useEffect } from "react";
import styles from "../page.module.css";
import Header from "../components/header";

interface Job {
  title: string;
  body: string;
  link: string;
  _id: string;
}

const AboutPage: React.FC = () => {
  const [jobsData, setJobsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // redirect user to login page if not logged in

  const fetchData = async () => {
    fetch("https://8e21-135-84-23-245.ngrok-free.app/db/posts", {
      method: "GET",
      headers: {
        "ngrok-skip-browser-warning": "True",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setJobsData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(
          "There has been a problem with your fetch operation:",
          error
        );
        setError(error.message);
        setIsLoading(false);
      });
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
    fetchData();
  }, []);

  const filteredJobsData = jobsData.filter((job: Job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading jobs: {error}</p>;

  return (
    <div className="main">
      <Header />
      <section className={styles.section}>
        <h2>Jobs</h2>
        <p>Welcome to the Jobs page</p>
        {/* Search input */}
        <label htmlFor="title" className={styles.label}>
          Search by title:
        </label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.input}
        />
        <a
          href="/jobs/post"
          className={styles.link}
          style={{ right: "0", float: "right" }}
        >
          Post a Job
        </a>

        <br></br>
        <br></br>
        <table className={styles.table} style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Apply</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobsData.map((job: Job) => (
              <tr key={job._id}>
                <td>{job.title}</td>
                <td>{job.body || "No description available"}</td>
                <td>
                  <a href={job.link}>{job.link}</a>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AboutPage;
