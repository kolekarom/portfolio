import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const EmailForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Replace with your EmailJS service details
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'omkolekar72@gmail.com'
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => {
          onClose();
        }, 2000);
      }
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: 'var(--bg1)',
        border: '1px solid var(--b)',
        borderRadius: '12px',
        padding: '2rem',
        width: '90%',
        maxWidth: '500px',
        position: 'relative'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'transparent',
            border: 'none',
            color: 'var(--m)',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
        >
          ×
        </button>

        <h2 style={{
          fontFamily: 'var(--D)',
          fontSize: '2rem',
          color: 'var(--t)',
          marginBottom: '1.5rem',
          letterSpacing: '1px'
        }}>
          Send Message
        </h2>

        {submitStatus === 'success' && (
          <div style={{
            background: 'rgba(0, 255, 136, 0.1)',
            border: '1px solid var(--g)',
            color: 'var(--g)',
            padding: '1rem',
            borderRadius: '6px',
            marginBottom: '1rem',
            fontFamily: 'var(--M)',
            fontSize: '0.9rem'
          }}>
            Message sent successfully! I'll get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div style={{
            background: 'rgba(255, 107, 53, 0.1)',
            border: '1px solid var(--a2)',
            color: 'var(--a2)',
            padding: '1rem',
            borderRadius: '6px',
            marginBottom: '1rem',
            fontFamily: 'var(--M)',
            fontSize: '0.9rem'
          }}>
            Failed to send message. Please try again or email directly at omkolekar72@gmail.com
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              color: 'var(--a)',
              fontFamily: 'var(--M)',
              fontSize: '0.7rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}>
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                background: 'var(--bg2)',
                border: '1px solid var(--b)',
                borderRadius: '6px',
                padding: '0.75rem',
                color: 'var(--t)',
                fontFamily: 'var(--B)',
                fontSize: '1rem'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              color: 'var(--a)',
              fontFamily: 'var(--M)',
              fontSize: '0.7rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}>
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                background: 'var(--bg2)',
                border: '1px solid var(--b)',
                borderRadius: '6px',
                padding: '0.75rem',
                color: 'var(--t)',
                fontFamily: 'var(--B)',
                fontSize: '1rem'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              color: 'var(--a)',
              fontFamily: 'var(--M)',
              fontSize: '0.7rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}>
              Subject *
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                background: 'var(--bg2)',
                border: '1px solid var(--b)',
                borderRadius: '6px',
                padding: '0.75rem',
                color: 'var(--t)',
                fontFamily: 'var(--B)',
                fontSize: '1rem'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              color: 'var(--a)',
              fontFamily: 'var(--M)',
              fontSize: '0.7rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}>
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{
                width: '100%',
                background: 'var(--bg2)',
                border: '1px solid var(--b)',
                borderRadius: '6px',
                padding: '0.75rem',
                color: 'var(--t)',
                fontFamily: 'var(--B)',
                fontSize: '1rem',
                resize: 'vertical'
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                background: 'var(--a)',
                color: '#000',
                border: 'none',
                borderRadius: '6px',
                padding: '0.82rem 1.75rem',
                fontFamily: 'var(--M)',
                fontSize: '0.74rem',
                letterSpacing: '1px',
                fontWeight: '700',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                opacity: isSubmitting ? 0.7 : 1,
                transition: 'all 0.22s'
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            <button
              type="button"
              onClick={onClose}
              style={{
                background: 'transparent',
                color: 'var(--t)',
                border: '1px solid var(--b2)',
                borderRadius: '6px',
                padding: '0.82rem 1.75rem',
                fontFamily: 'var(--M)',
                fontSize: '0.74rem',
                letterSpacing: '1px',
                cursor: 'pointer',
                transition: 'all 0.22s'
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailForm;