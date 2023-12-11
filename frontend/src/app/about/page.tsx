// login page
"use client";
import React, { useState } from "react";
import styles from "../page.module.css";
import Header from "../components/header";

const AboutPage: React.FC = () => {
  return (
    <div className="main">
      <Header />

      <section className={styles.section}>
        <h2>Our Story</h2>
        <p>
          Hello :) We&apos;re a group of Computer Science students at McGill
          University in our final year of undergrad. With the current job market
          challenges in mind, we&apos;ve put together this website to make job
          hunting a bit easier for fellow students. We hope you find it useful.
          Happy job hunting!
        </p>
      </section>

      <section className={styles.section}>
        <h2>Our Mission</h2>
        <p>To pass Comp307! For the Glory!!!!!!</p>
        <p>
          Navigating the transition from academia to the professional world can
          be a daunting task. We know this first hand. That&apos;s why we
          created this website, carefully designed and curated with the sole
          purpose of making your job hunting journey a tad smoother. Welcome to
          Hacker Jobs, where our mission is to connect the brightest minds with
          groundbreaking opportunities in the ever-evolving landscape of
          cybersecurity and technology. At Hacker Jobs, we believe in fostering
          a community of innovation, where talented individuals and
          forward-thinking organizations come together to shape the future of
          the web.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Meet the Team</h2>
        <p>
          Made by Alex Armenciu, Susan Pan, and Oliver Stappas, all final year
          students at McGill University.
        </p>
        <ul>
          <li>Alex Armenciu </li>
          <li>Susan Pan </li>
          <li>Oliver Stappas </li>
        </ul>
      </section>

      <footer className={styles.description}>
        <p>
          Contact us at:{" "}
          <a href="mailto:alexandru.armenciu@mail.mcgill.ca">
            alexandru.armenciu@mail.mcgill.ca
          </a>
          <a href="mailto:shuran.pan@mail.mcgill.ca">
            shuran.pan@mail.mcgill.ca
          </a>
          <a href="mailto:oliver.stappas@mail.mcgill.ca">
            oliver.stappas@mail.mcgill.ca
          </a>
        </p>
      </footer>
    </div>
  );
};

export default AboutPage;
