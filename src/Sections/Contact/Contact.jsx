import Button from '../../ui-components/Button/Button'
import Input from '../../ui-components/Input/Input'
import Typography from '../../ui-components/Typography/Typography'
import ringsImage from "../../assets/images/pattern-rings.svg";
import './Contact.scss'

function Contact() {
  return (
    <div className="contact">
      <img className="rings" src={ringsImage} alt="rings-image" />
      <div className="text">
        <Typography as="h1" type="heading-xl" className="title">Contact</Typography>
        <Typography type="body" className="subtitle">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</Typography>  
      </div>
      <div className='inputs'>
        <Input
          placeholder="Name"
          type="name"
          error={false && "Sorry, invalid format here"}
        />
        <Input
          placeholder="Email"
          type="email"
          error={false && "Sorry, invalid format here"}
        />
        <textarea name="message" placeholder="Message" className="textarea" rows={3}></textarea>
        <Button aria-label="Contact">
          <Typography as="span" type="body-btn">Contact me</Typography>
        </Button>
      </div>
    </div>
  )
}

export default Contact