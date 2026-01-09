import './Hero.scss'
import ringsImage from "../../assets/images/pattern-rings.svg";
import profileImageMobile from "../../assets/images/image-profile-mobile.png";
import profileImageTablet from "../../assets/images/image-profile-tablet.png";
import profileImageDesktop from "../../assets/images/image-profile-desktop.webp";
import circleImage from "../../assets/images/pattern-circle.svg";
import Typography from '../../ui-components/Typography/Typography';
import Button from '../../ui-components/Button/Button';

function Hero() {
  return (
    <div className="hero">
      <div className="developer-image-wrapper">
        <img className="rings" src={ringsImage} alt="rings-image" />
        <img className="profile-image-mobile" src={profileImageMobile} alt="profile-image-mobile" />
        <img className="profile-image-tablet" src={profileImageTablet} alt="profile-image-tablet" />
        <img className="profile-image-desktop" src={profileImageDesktop} alt="profile-image-desktop" />
        <img className="circle" src={circleImage} alt="circle-image" />
      </div>
      <div className="hero-content">
        <Typography as="h1" type="heading-xl" className="hero-title">Nice to <br className="break"/> meet you! <br className="break-2"/>I’m <span className='green-underline'>Adam Keyes.</span></Typography>
        <Typography type="body" className="hero-subtitle">Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</Typography>
        <a href="mailto:adamkeyes@example.com">
          <Button aria-label="Contact">
            <Typography as="span" type="body-btn">Contact me</Typography>
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero