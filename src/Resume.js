import React from 'react';
import styles from './styles/App.css';

// WIP
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
        <div className={styles.resumeExperienceDetail}>
          <h4>On-Sheet Controls</h4>
          <p>Enabled filter controls for data processing with immediate visual feedback.</p>
          <ul>
            <li>Implemented the ability to place controls on chart layouts.</li>
            <li>Extended application layout to account for placement, positioning and formatting of controls.</li>
            <li>Implemented rendering and performance optimizations to existing control components.</li>
          </ul>
          <h4>Cross Visual Filtering</h4>
          <p>Enabled filtering on target visuals by selecting data points on a source visual.</p>
          <ul>
            <li>Implemented chart highlighting on data point selection.</li>
            <li>Implemented chart highlighting support across various chart types and charting libraries.</li>
            <li>Implemented chart filtering via data selection on multiple source charts.</li>
          </ul>
          <p>While working on these projects I:</p>
          <ul>
            <li>Drove customer calls and feedback collection which influenced data driven product decisions.</li>
            <li>Collaborated with UX and product on feature design.</li>
            <li>Produced accurate estimates and timely incremental feature roll-outs.</li>
          </ul>
        </div>

        <h2>Simon Property Group</h2>
        <h3>Front End Developer, April 2014 - June 2019</h3>
        <div className={styles.resumeExperienceDetail}>
          <p>Maintained front-ends of B2C, B2B, Careers, and Gift-card E-Commerce web applications for one of the largest retail real estate investment trusts and largest shopping mall operator in the US.</p>
          <ul>
            <li>Owned full redesign of consumer facing site as sole front-end developer.</li>
            <li>Focused on responsive design, accessibility and performance.</li>
            <li>Collaborated with UI/UX teams on new style guide and custom React components.</li>
            <li>Launched revamped mall directory with search and filtering capabilities.</li>
            <li>Implemented build automation and version control.</li>
          </ul>
        </div>

        <h2>Simon Property Group</h2>
        <h3>Graphic Designer, March 2011 - April 2014</h3>
        <div className={styles.resumeExperienceDetail}>
          <p>Supported digital marketing team.</p>
          <ul>
            <li>Assisted consumer facing site redesign.</li>
            <li>Designed and implemented Salesforce managed HTML emails.</li>
            <li>Created and maintained design assets for iOS and Android applications.</li>
            <li>Launched revamped mall directory with search and filtering capabilities.</li>
            <li>Created design assets for emails, social ad campaigns, and various landing pages.</li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Resume;
