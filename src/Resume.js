import React from 'react';
import styles from './styles/App.css';

const Resume = () => {
  return (
    <section className={styles.resume}>
      <h1 className={styles.resumeHeader}>ALEX<br/>SPERELLIS</h1>
      <aside className={styles.resumeSidebar}>
        <div className={styles.resumeContact}>
          +1.812.243.5823<br/>
          asperellis@gmail.com<br/>
          www.alexsperellis.com<br/>
        </div>
        <div className={styles.resumeSkills}>
          <h2>SKILLS</h2>
          <div className={styles.resumeSkill}>
            <h3>Development</h3>
            HTML, CSS/SCSS, JavaScript, React, TypeScript, Git, Webpack, Software testing
          </div>
          <div className={styles.resumeSkill}>
            <h3>Design</h3>
            UI Design, Adobe CC - Photoshop, Illustrator, InDesign
          </div>
        </div>
        <div className={styles.resumeEducation}>
          <h2>EDUCATION</h2>
          <h3>PURDUE UNIVERSITY</h3>
          <h4>Bachelor of Science</h4>
          <div>
            Computer Graphics Technology<br/>
            Minor in Art & Design<br/>
            May 2010
          </div>
        </div>
      </aside>
      <section className={styles.resumeExperience}>
        <h2>Amazon Web Services - QuickSight</h2>
        <h3>Front End Engineer, June 2019 - Present</h3>
      </section>
    </section>
  );
};

export default Resume;
