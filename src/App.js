import React, { Component } from 'react';
import styles from './styles/App.css';
import aboutImg from './images/alex.jpg';

class Img extends Component {
  render() {
    return (
      <img src={aboutImg} alt="Me at Pizza Beddia. Pizza is great." className={styles.aboutImg} />
    );
  }
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerItem}>
        <h2 className={styles.header}>{'CONTACT'}</h2>
        <ul>
          <li><a href="mailto:asperellis@gmail.com" title="Email Me">asperellis@gmail.com</a></li>
          <li><a href="tel:+18122435823" title="Call Me">812.243.5823</a></li>
        </ul>
      </div>
      <div className={styles.footerItem}>
        <h2 className={styles.header}>{'RESUME'}</h2>
        <a href="http://www.alexsperellis.com/resume.pdf" title="Alex Sperellis' Resume">PDF Download</a>
      </div>
      <div className={styles.footerItem}>
        <h2 className={styles.header}>{'CURRENTLY'}</h2>
        <ul>
          <li>Reading: <a href="https://www.amazon.com/Wind-Up-Bird-Chronicle-Novel/dp/0679775439/ref=sr_1_1?ie=UTF8&qid=1518013050&sr=8-1&keywords=the+wind+up+bird+chronicle">The Wind Up Bird Chronicles</a></li>
          <li>Listening: <a href="https://open.spotify.com/user/asperellis/playlist/3lhFAwCloJwQ3oocLJOrP9?si=u0x8QKDnRSuvTX9hoVzzBw">Spotify Playlist</a></li>
          <li>Playing: <a href="http://store.steampowered.com/app/252950/Rocket_League/">Rocket League</a> and <a href="http://store.steampowered.com/app/578080/PLAYERUNKNOWNS_BATTLEGROUNDS/">PUBG</a></li>
        </ul>
      </div>
    </footer>
  );
}

function Bio(props) {
  return (
    <div className={[styles.aboutText, !props.show && styles.hideMobile].join(' ')}>
      <h2 className={styles.header}>{'HI IM, ALEX'}</h2>
      <p className={styles.chronicle}>
        {'I\'m currently a Senior Front End Developer at Simon Property Group and previously worked as a graphic designer. I switched to development four years ago and haven\'t looked back. I love to travel, run marathons and game on my PC. I also do freelance work on the side for a wide range of clients from musicians to published poets. I\'m from Indianapolis and currently travel the country with my partner  working remote while she takes travel nursing contracts. Don\'t hesitate to reach out!'}
      </p>
    </div>
  );
}

function Nav(props) {
  return (
    <nav className={styles.nav}>
      <button onClick={props.aboutClick} className={styles.navLink}>ABOUT</button>
      <a href="https://github.com/asperellis" className={styles.navLink}>GITHUB</a>
      <a href="https://codepen.io/asperellis/" className={styles.navLink}>CODEPEN</a>
      <a href="https://www.simon.com" className={styles.navLink}>SIMON</a>
      <a href="http://divedapper.com/" className={styles.navLink}>DIVEDAPPER</a>
      <a href="https://www.behance.net/asperellis" className={styles.navLink}>DESIGN</a>
    </nav>
  );
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showBioMobile: false
    };

    this.aboutClick = this.aboutClick.bind(this);
  }

  aboutClick() {
    this.setState({ showBioMobile: !this.state.showBioMobile });
  }

  render() {
    return (
      <section className={styles.portfolio}>
        <div className={styles.about}>
          <h1 className={styles.logo}>&nbsp;&nbsp;{'ALEX'}<br/>{'SPER-'}<br/>{'-ELLIS'}</h1>
          <Nav aboutClick={this.aboutClick} />
          <Img />
          <Bio show={this.state.showBioMobile} />
        </div>
        <Footer />
      </section>
    );
  }
}

export default App;
