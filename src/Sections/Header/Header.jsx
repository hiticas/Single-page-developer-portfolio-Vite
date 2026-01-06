import Typography from '../../ui-components/Typography/Typography'
import './Header.scss'

import iconGithub from "../../assets/images/icon-github.svg";
import iconFrontendMentor from "../../assets/images/icon-frontend-mentor.svg";
import iconLinkedin from "../../assets/images/icon-linkedin.svg";
import iconTwitter from "../../assets/images/icon-twitter.svg";

function Header() {
  return (
    <div className="header">
      <Typography className="developer-name" as="h3" type="heading-m">adamkeyes</Typography>
      <div className="social-icons">
        <img className="social-icon" src={iconGithub} alt="GitHub" />
        <img className="social-icon" src={iconFrontendMentor} alt="Frontend Mentor" />
        <img className="social-icon" src={iconLinkedin} alt="LinkedIn" />
        <img className="social-icon" src={iconTwitter} alt="Twitter" />
      </div>
    </div>
  )
}

export default Header