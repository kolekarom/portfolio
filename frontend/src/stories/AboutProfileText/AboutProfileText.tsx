import React from 'react';

interface AboutProfileTextProps {}

export const AboutProfileText = ({ ...props }: AboutProfileTextProps) => {
  const styles = {
    container: {
      width: '100%',
      maxWidth: '1200px',
      margin: '2rem auto',
      padding: '2rem',
      backgroundColor: '#f9f9f9',
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
        I am Om Kolekar, a tech enthusiast and software developer based in Solapur, India 🇮🇳. My primary objective is to build innovative and scalable digital solutions that solve real-world problems, especially in the areas of web development and cloud computing. I believe in continuous learning and love exploring new technologies that push the boundaries of what's possible.
      </p>
      <p style={styles.paragraph}>
        Personally, I am someone who enjoys blending logic with creativity. I speak English, Hindi, and Marathi fluently, and I have a strong sense of discipline and teamwork nurtured through my academic and physical training. Fitness is a huge part of my life — I love working out and playing football. Philosophy, too, holds a special place in my heart — I often find myself reflecting on deep concepts in my free time.
      </p>
      <p style={styles.paragraph}>
        In the future, I aim to contribute to the tech industry not just as a developer but as a mentor and leader. I plan to dive deeper into DevOps, AI, and system design while also sharing knowledge through content creation and open-source collaboration. The long-term dream? To launch a startup that brings together wellness, education, and tech 🚀.
      </p>
      <p style={{ ...styles.paragraph, textAlign: 'center', fontWeight: 'bold', color: '#2980b9' }}>
        Peace out ✌🏿
      </p>
    </article>
  );
};

export default AboutProfileText;
