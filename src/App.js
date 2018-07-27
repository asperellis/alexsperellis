import React from 'react';
import styles from './styles/App.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        &nbsp;&nbsp;{'ALEX'}
        <br />
        {'SPER-'}
        <br />
        {'-ELLIS'}
      </h1>
    </header>
  );
}

function Nav() {
  return (
    <div className={styles.nav}>
      <nav>
        <a href="https://github.com/asperellis" className={styles.navLink}>
          GITHUB
        </a>
        <a href="https://codepen.io/asperellis/" className={styles.navLink}>
          CODEPEN
        </a>
        <a href="https://www.simon.com" className={styles.navLink}>
          SIMON
        </a>
        <a href="http://kavehakbar.com/" className={styles.navLink}>
          KAVEH AKBAR
        </a>
        <a href="http://divedapper.com/" className={styles.navLink}>
          DIVEDAPPER
        </a>
        <a href="https://www.behance.net/asperellis" className={styles.navLink}>
          DESIGN
        </a>
      </nav>
    </div>
  );
}

function Bio() {
  return (
    <div className={styles.about}>
      <div>
        <h2 className={styles.aboutHeader}>{'HI IM, ALEX'}</h2>
        <p className={styles.aboutText}>
          I&apos;m currently a Front End Developer at{' '}
          <a href="http://www.simon.com">Simon Property Group</a> and previously
          worked as a graphic designer. I switched to development four years ago
          and haven&apos;t looked back. I love to travel, run marathons and game
          on my PC. I also do freelance work on the side for a wide range of
          clients from musicians to{' '}
          <a href="http://kavehakbar.com">published poets</a>. I&apos;m from
          Indianapolis and currently travel the country with my partner working
          remote while she takes travel nursing contracts.<br/>Don&apos;t hesitate
          to <a href="mailto:asperellis@gmail.com">reach out</a>!
        </p>
        <a href="http://www.alexsperellis.com/resume.pdf" className={styles.aboutLink}>RESUME</a>
      </div>
    </div>
  );
}

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Nav />
      <Bio />
    </div>
  );
};

export default App;
