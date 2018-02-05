import React, { Component } from 'react';
import './styles/Global.css';
import styles from './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <h1 className={styles.logo}>&nbsp;&nbsp;{'ALEX'}<br/>{'SPER-'}<br/>{'-ELLIS'}</h1>
        </header>
        <nav className={styles.nav}>
          <a href="" className={styles.navLink}>GITHUB</a>
          <a href="" className={styles.navLink}>CODEPEN</a>
          <a href="" className={styles.navLink}>SIMON</a>
          <a href="" className={styles.navLink}>DIVEDAPPER</a>
          <a href="" className={styles.navLink}>DESIGN</a>
        </nav>
        <div className={styles.about}>
          <h2 className={styles.header}>{'HI IM, ALEX'}</h2>
          <p className={styles.chronicle}>
            {'I\'m currently a Senior Front End Developer at Simon Property Group and previously worked as a graphic designer. I switched to development four years ago and haven\'t looked back. I love to travel, run marathons and game on my PC. I also do freelance work on the side for a wide range of clients from musicians to published poets. I\'m from Indianapolis and currently travel the country with my partner  working remote while she takes travel nursing contracts. Don\'t hesitate to reach out!'}
          </p>
        </div>
        <footer className={styles.footer}>
          <div className={styles.footerItem}>
            <h2 className={styles.header}>{'CONTACT'}</h2>
            <p>asperellis@gmail.com<br/>812.243.5823</p>
          </div>
          <div className={styles.footerItem}>
            <h2 className={styles.header}>{'RESUME'}</h2>
            <p>PDF Download</p>
          </div>
          <div className={styles.footerItem}>
            <h2 className={styles.header}>{'CURRENTLY'}</h2>
            <ul>
              <li>Reading: The Wind Up Bird Chronicles</li>
              <li>Listening: Spotify Playlist</li>
              <li>Playing: Rocket League and PUBG</li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
