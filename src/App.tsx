import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Aisling } from './Aisling';
import styles from './styles/App.module.css';

const Header = () => (
  <header className={styles.header}>
    <a href="/" className={styles.aboutLink}>
      <h1 className={styles.logo}>
        A<br />
        &mdash;
        <br />S
      </h1>
    </a>
  </header>
);

const Nav = () => (
  <div className={styles.nav}>
    <nav>
      <a href="https://github.com/asperellis" className={styles.navLink}>
        GITHUB
      </a>
      <a href="https://codepen.io/asperellis/" className={styles.navLink}>
        CODEPEN
      </a>
      <a href="https://www.behance.net/asperellis" className={styles.navLink}>
        DESIGN
      </a>
      <a href="http://kavehakbar.com/" className={styles.navLink}>
        KAVEH AKBAR
      </a>
      <a href="http://divedapper.com/" className={styles.navLink}>
        DIVEDAPPER
      </a>
    </nav>
  </div>
);

const Bio = () => (
  <div className={styles.about}>
    <div>
      <h2 className={styles.aboutHeader}>{"HI I'M ALEX."}</h2>
      <p className={styles.aboutText}>
        I&apos;m currently a Senior Frontend Engineer at <a href="https://pos.toasttab.com/">Toast</a>. Previously, I&apos;ve worked as a Frontend Engineer for <a href="https://aws.amazon.com/quicksight/">Amazon Web Services - QuickSight</a> and <a href="https://www.simon.com/">Simon Property Group</a>. In my spare time I play saxophone, run marathons, dabble in pinball and game on my PC. I also do freelance work on the side for a wide range of clients from musicians to <a href="http://kavehakbar.com">published poets</a>. I&apos;m from Cleveland and currently living in Dublin, Ireland. Don&apos;t hesitate to <a href="mailto:asperellis@gmail.com">reach out</a>!
      </p>
      <a
        href="http://www.alexsperellis.com/resume.pdf"
        className={styles.aboutLink}
      >
        RESUME
      </a>
      <a
        href="https://www.linkedin.com/in/sperellis/"
        className={styles.aboutLink}
      >
        LINKEDIN
      </a>
    </div>
  </div>
);

const Portfolio = () => (
  <div className={styles.app}>
    <Header />
    <Nav />
    <Bio />
  </div>
)

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Portfolio />} />
          <Route path="aisling" element={<Aisling />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
