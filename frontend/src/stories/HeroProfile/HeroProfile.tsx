import Typewriter from 'typewriter-effect';
import profilePictureHero from '../../img/profilePictureHero.jpeg';
import './HeroProfile.css';

import { useTheme } from '../../context/ThemeContext';

interface HeroProfileprops {}

export const HeroProfile = ({ ...props }: HeroProfileprops) => {
  const { activeTheme } = useTheme();
  return (
    <>
      <div className="hero-profile-container">
        <div className="hero-profile">
          <img src={profilePictureHero} alt="Om Kolekar Profile" />
          <p>Hey there I'm,</p>
          <h1>Om Kolekar</h1>
          <Typewriter
            options={{
              strings: [
                'Software Developer',
                'Content Creator',
                'BodyBuilder',
                'fitness Enthusiast',
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <p className="hero-profile-tagline">
            What I excel at is creating software, websites, apps, and writing.
          </p>
          <a
            href="https://www.instagram.com/ven_om____/
"
            target="_blank"
            rel="noopener noreferrer"
            className={
              activeTheme === 'light'
                ? 'hero-profile-button-light-theme'
                : 'hero-profile-button-dark-theme'
            }
          >
            Find me on social media
          </a>
        </div>
      </div>
    </>
  );
};

export default HeroProfile;
