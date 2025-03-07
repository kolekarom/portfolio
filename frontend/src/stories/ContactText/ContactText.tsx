import React from 'react';
import './ContactText.css';

interface ContactTextProps {}

export const ContactText = ({ ...props }: ContactTextProps) => {
  return (
    <>
      <div className="contact-text">
        <p>
          I am open to talking about other projects, freelance and writing
          roles. You can reach me here at{' '}
          <a href="omkolekar72@gmail.com">omkolekar72@gmail.com</a>. I
          look forward to hearing from you!
        </p>
      </div>
    </>
  );
};

export default ContactText;
