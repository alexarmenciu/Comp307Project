// Homepage

import styles from "./page.module.css";
import Header from "./components/header";

export default function Home() {
  return (
    <body>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.center} style={{ fontSize: "10vh" }}>
          Welcome to Hacker Jobs
        </h1>
        <div className={styles.description}>
          <div className={styles.center} style={{ width: "80vw" }}>
            <section>
              <p>
                <h2 className={styles.title} style={{ fontSize: "7vh" }}>
                  Our Successes
                </h2>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ padding: "20px" }}>
                    <h3>Jobs Posted</h3>
                    <img
                      src="https://www.aeaweb.org/content/file?id=4578"
                      style={{ height: "20vh" }}
                    />
                    <p>1000+</p>
                  </div>
                  <div style={{ padding: "20px" }}>
                    <h3>Happy Hires</h3>
                    <img
                      src="https://assets-global.website-files.com/6516813912555e8b460c1f1e/652d1a8b12eb4cf0c38e2af8_Unique%20hiring%20process.png"
                      style={{ height: "20vh" }}
                    />
                    <p>500+</p>
                  </div>
                </div>
              </p>
            </section>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2023 Hacker Jobs</p>
        <a href="mailto:shuran.pan@mail.mcgill.ca">Contact Us</a>
      </footer>
    </body>
  );
}
