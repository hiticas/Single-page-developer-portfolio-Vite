import Button from '../../ui-components/Button/Button';
import Typography from '../../ui-components/Typography/Typography';
import './Project.scss';

function Project({ image, title, languages = [], links = [] }) {
  return (
    <div className="project">
      <div className='wrapper-image'>
        <img className="image" src={image} alt={title} />
        <div className="project-links-desktop">
          {links.map((link, index) => (
            <a href={link.url} key={index} className="project-link" target="_blank" rel="noopener noreferrer">
              <Button aria-label="Contact">
                <Typography as="span" type="body-btn">{link.label}</Typography>
              </Button>
            </a>
          ))}
        </div>
      </div>
      <div className="project-info">
        <Typography as="h3" type="heading-m" className="project-title">{title}</Typography>

        <div className="project-languages">
          {languages.map((lang, index) => (
            <Typography type="body" key={index} className="language-tag">
              {lang}
            </Typography>
          ))}
        </div>

        <div className="project-links">
          {links.map((link, index) => (
            <a href={link.url} key={index} className="project-link" target="_blank" rel="noopener noreferrer">
              <Button aria-label="Contact">
                <Typography as="span" type="body-btn">{link.label}</Typography>
              </Button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;