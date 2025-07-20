import React from 'react';
import Logo from '../../img/logo.svg';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Header.css';

interface Headerprops {
  homeRef: any;
  aboutRef: any;
  skillsRef: any;
  projectsRef: any;
  contactRef: any;
}

export const Header = ({
  aboutRef,
  skillsRef,
  projectsRef,
  contactRef,
  homeRef,
  ...props
}: Headerprops) => {
  const handleScroll = (ref: any): void => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
    console.log('change page');
  };

  return (
    <>
      <div className="header-desktop">
        <section>
          <div>
            <a
              href="#home"
              rel="noopener noreferrer"
              onClick={() => {
                handleScroll(homeRef.current);
              }}
            >
              <img src={Logo} alt="Om Kolekar Logo" />
            </a>
          </div>
          <div className="navigation">
            <nav>
              <a
                href="#home"
                rel="noopener noreferrer"
                onClick={() => {
                  handleScroll(homeRef.current);
                }}
              >
                Home
              </a>
              <a
                href="#about"
                rel="noopener noreferrer"
                onClick={() => {
                  handleScroll(aboutRef.current);
                }}
              >
                About
              </a>
              <a
                href="#skills"
                rel="noopener noreferrer"
                onClick={() => {
                  handleScroll(skillsRef.current);
                }}
              >
                Skills
              </a>
              <a
                href="#skills"
                rel="noopener noreferrer"
                onClick={() => {
                  handleScroll(projectsRef.current);
                }}
              >
                Projects
              </a>
              <a
                href="#contact"
                rel="noopener noreferrer"
                onClick={() => {
                  handleScroll(contactRef.current);
                }}
              >
                Contact
              </a>
            </nav>
            <div>
              <ThemeToggle />
            </div>
          </div>
        </section>
      </div>
      <div className="header-mobile-no-menu">
        <div className="logo-theme-toggle">
          <a
            href="#home"
            rel="noopener noreferrer"
            onClick={() => {
              handleScroll(homeRef.current);
            }}
          >
            <img src={Logo} alt="Om Kolekar Logo" />
          </a>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
      <div className="header-mobile">
        <header>
          <input id="burger" type="checkbox" />

          <label htmlFor="burger">
            <span></span>
            <span></span>
            <span></span>
          </label>

          <nav>
            <div className="logo-theme-toggle">
              <a
                href="#home"
                rel="noopener noreferrer"
                onClick={() => {
                  handleScroll(homeRef.current);
                }}
              >
                <img src={Logo} alt="Om Kolekar Logo" />
              </a>
            </div>
            <ul>
              <li>
                <div>
                  <ThemeToggle />
                </div>
              </li>
              <li>
                <a
                  href="#home"
                  rel="noopener noreferrer"
                  onClick={() => {
                    handleScroll(homeRef.current);
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  rel="noopener noreferrer"
                  onClick={() => {
                    handleScroll(aboutRef.current);
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  rel="noopener noreferrer"
                  onClick={() => {
                    handleScroll(skillsRef.current);
                  }}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  rel="noopener noreferrer"
                  onClick={() => {
                    handleScroll(projectsRef.current);
                  }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  rel="noopener noreferrer"
                  onClick={() => {
                    handleScroll(contactRef.current);
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
