import Typography from '../../ui-components/Typography/Typography'
import './Skill.scss'

function Skill({ skill, years }) {
  return (
    <div className="skill">
      <Typography as="h2" type="heading-l">{skill}</Typography>
      <Typography type="body">{years}</Typography>
    </div>
  )
}

export default Skill