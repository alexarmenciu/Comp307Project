// login page
"use client";
import React, { useState } from "react";
import styles from "../page.module.css";
import Header from "../components/header";

const AboutPage: React.FC = () => {
  const [jobsData, setJobsData] = useState([
    { id: 1, title: "Job 1", description: "Description for Job 1" },
    { id: 2, title: "Job 2", description: "Description for Job 2" },
    {
      id: 3,
      title: "Software Developer",
      description: "Develop cutting-edge software solutions for clients.",
    },
    {
      id: 4,
      title: "Comp307 Professor",
      description: "For the Glory!",
    },
    {
      id: 5,
      title: "Marketing Specialist",
      description: "Develop and implement marketing strategies for products.",
    },
    {
      id: 6,
      title: "Data Analyst",
      description:
        "Analyze and interpret complex data sets to provide insights.",
    },
    {
      id: 7,
      title: "Customer Support Representative",
      description: "Assist customers with product inquiries and issues.",
    },
  ]);

  const getPosts = async () => {
    const response = await fetch("http://localhost:3001/db/posts");
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="main">
      <Header />

      <section className={styles.section}>
        <h2>Jobs</h2>
        <p>Welcome to the Jobs page</p>
        <br></br>
        <br></br>

        {/* Jobs Table for the GLORY*/}
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {jobsData.map((job) => (
              <tr key={job.id}>
                <td>{job.id}</td>
                <td>{job.title}</td>
                <td>{job.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AboutPage;
