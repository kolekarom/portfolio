import React from 'react';

interface AboutProfileTextProps {}

export const AboutProfileText = ({ ...props }: AboutProfileTextProps) => {
  const styles = {
    container: {
      width: '100%',
      // maxWidth: '1200px',
      margin: '2rem auto',
      padding: '2rem',
      backgroundColor: '#e0f7ff',
      borderRadius: '16px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      boxSizing: 'border-box' as const,
    },
    headingMain: {
      fontSize: '2.2rem',
      color: '#2c3e50',
      borderBottom: '3px solid #f1c40f',
      paddingBottom: '0.5rem',
    },
    paragraph: {
      fontSize: '1.1rem',
      marginTop: '1rem',
      lineHeight: '1.8',
    },
  };

  return (
    <article style={styles.container}>
      <h2 style={styles.headingMain}>👋 About Me</h2>
      <p style={styles.paragraph}>
  I'm Om Kolekar — a tech enthusiast and software developer from Solapur, India 🇮🇳. I focus on building scalable web and cloud solutions, and I’m always exploring new technologies to solve real-world problems.
</p>
<p style={styles.paragraph}>
  I blend logic with creativity, speak English, Hindi, and Marathi, and thrive on teamwork and discipline. Outside of tech, I stay active through workouts, football, and deep philosophical thinking.
</p>
<p style={styles.paragraph}>
  My vision is to grow as a tech leader and mentor, diving deeper into DevOps, AI, and system design — with the ultimate goal of launching a startup that unites wellness, education, and innovation 🚀.
</p>
<p style={{ ...styles.paragraph, textAlign: 'center', fontWeight: 'bold', color: '#2980b9' }}>
  Peace out ✌🏿
</p>

    </article>
  );
};

export default AboutProfileText;
