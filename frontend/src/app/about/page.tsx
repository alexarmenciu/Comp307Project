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
          be a daunting task. We know this first hand. That's why we created
          this website, carefully designed and curated with the sole purpose of
          making your job hunting journey a tad smoother. Vestibulum eu sapien
          faucibus, auctor nibh congue, aliquet justo. Aenean tristique turpis
          ac felis semper bibendum. In tincidunt pharetra odio. Curabitur
          venenatis elit id erat facilisis, et suscipit nisi scelerisque. Morbi
          venenatis fringilla nulla vitae rutrum. Phasellus vel lobortis sapien,
          a elementum sapien. In at posuere mi. Praesent commodo, nibh nec
          rutrum dignissim, orci erat tristique augue, sit amet porttitor felis
          nibh vitae massa. Sed nibh velit, imperdiet in bibendum nec, molestie
          porta nunc. Donec eget dictum mi. Phasellus laoreet lorem sit amet sem
          ullamcorper, eget blandit quam accumsan. Sed imperdiet augue sit amet
          lacus blandit interdum. Quisque finibus quam eu erat ornare feugiat.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Meet the Team</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Vestibulum in fermentum justo. Mauris id justo ut nunc
          tincidunt dapibus. Phasellus vel lobortis sapien, a elementum sapien.
          In at posuere mi. Praesent commodo, nibh nec rutrum dignissim, orci
          erat tristique augue, sit amet porttitor felis nibh vitae massa. Sed
          nibh velit, imperdiet in bibendum nec, molestie porta nunc.
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
