import Skill from '../../components/Skill/Skill'
import './Skills.scss'
import rings from '../../assets/images/pattern-rings.svg'

function Skills() {
  return (
    <div className="skills">
      <div className="row">
        <Skill skill="HTML" years="4 Years Experience" />
        <Skill skill="CSS" years="4 Years Experience" />
      </div>
      <div className="row">
        <Skill skill="JavaScript" years="4 Years Experience" />
        <Skill skill="Accessibility" years="4 Years Experience" />
      </div>
      <div className="row">
        <Skill skill="React" years="3 Years Experience" />
        <Skill skill="SCSS" years="3 Years Experience" />
      </div>
      <img className="rings" src={rings} alt="rings" />
    </div>
  )
}

export default Skills