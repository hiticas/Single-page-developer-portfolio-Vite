import Typography from '../../ui-components/Typography/Typography'
import Button from '../../ui-components/Button/Button'
import './DesignSystem.scss'
import Input from '../../ui-components/Input/Input'

function DesignSystem() {
  return (
    <div className="design-system">
      <Typography as="h1" type="heading-xl">Heading (XL)</Typography>
      <Typography as="h2" type="heading-l">Heading (L)</Typography>
      <Typography as="h3" type="heading-m">Heading (M)</Typography>
      <Typography type="body">This is Body (L). Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat.</Typography>
      <Button aria-label="Contact">
        <Typography as="span" type="body-btn">Contact me</Typography>
      </Button>
      <Input
        label="Email address"
        placeholder="Name"
        type="email"
        error={false && "Sorry, invalid format here"}
      />
      <Input
        className={true && 'input-error'}
        label="Email address"
        placeholder="Name"
        type="email"
        error={true && "Sorry, invalid format here"}
      />
    </div>
  )
}

export default DesignSystem
