import React from 'react';
import styles from './styles/Aisling.module.css';

// A valentines gift for the gf
export const Aisling = () => {
  const player = React.createRef()
  const [playing, setPlaying] = React.useState(false)

  const handleAudio = () => {
    if (player && !playing) {
      player.current.play();
      setPlaying(true);
      return;
    }

    player.current.pause();
    setPlaying(false);
  }

  return (
    <div className={styles.aisling}>
      <div>
        <h1>
          Misty
          <button onClick={handleAudio} className={styles.mistyBtn}>
            {!playing ? (
              <svg viewBox="0 0 32 32">
                <path d="M4 4 L28 16 L4 28 z"></path>
              </svg>
            ) : (
              <svg viewBox="0 0 32 32">
                <path d="M4 4 H12 V28 H4 z M20 4 H28 V28 H20 z"></path>
              </svg>
            )}
          </button>
        </h1>
        {'Look at me'}
        <br />
        {"I'm as helpless as a kitten up a tree"}
        <br />
        {"And I feel like I'm clingin' to a cloud"}
        <br />
        {"I can't understand"}
        <br />
        {'I get misty, just holding your hand'}
        <br />
        <br />
        {'Walk my way'}
        <br />
        {'And a thousand violins begin to play'}
        <br />
        {'Or it might be the sound of your hello'}
        <br />
        {'That music I hear'}
        <br />
        {"I get misty whenever you're near"}
        <br />
        <br />
        {"Don't you know that you're leading me on?"}
        <br />
        {"And it's just what I want you to do"}
        <br />
        {"Can't you see that I'm hopelessly lost?"}
        <br />
        {"That's why I'm following you"}
        <br />
        <br />
        {'On my own'}
        <br />
        {'When I wander through this wonderland alone'}
        <br />
        {'Never knowing my right foot from my left'}
        <br />
        {'My hat from my glove'}
        <br />
        {"I'm too misty, and too much in love"}
        <br />
        <br />
        {'Too misty'}
        <br />
        {'And too much'}
        <br />
        {'Too much in love'}
        <br />
        <br />
        {'Happy Valentines Day Aisling - Alex'}
        <div className={styles.credits}>
          Tenor Saxophone: Alex Sperellis
          <br />
          Guitar: Cory Russell
          <br />
          Drums: Robot
          <br />
          Produced by: Rizzle Ink.
        </div>
      </div>
      <audio className={'misty'} ref={player}>
        <source
          src="http://www.alexsperellis.com/audio/Misty.mp3"
          type="audio/mp3"
        />
        <p>
          {"Your browser doesn't support HTML5 audio. Here is a "}
          <a href="http://www.alexsperellis.com/audio/Misty.mp3">
            link to the audio
          </a>
          {' instead.'}
        </p>
      </audio>
    </div>
  );
}
