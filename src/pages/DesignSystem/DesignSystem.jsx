import Typography from '../../ui-components/Typography/Typography'
import Button from '../../ui-components/Button/Button'
import './DesignSystem.scss'

function DesignSystem() {
  return (
    <div className="design-system">
      <h1>DesignSystem</h1>
      <Typography as="h1" type="text-preset-1" color="color-slate-900">Lorem ipsum dolor sit amet</Typography>
      <Typography as="h2" type="text-preset-2" color="color-slate-900">Lorem ipsum dolor sit amet</Typography>
      <Typography type="text-preset-3" color="color-slate-900">Lorem ipsum dolor sit amet</Typography>
      <Typography type="text-preset-4" color="color-slate-600">Lorem ipsum dolor sit amet</Typography>
      <Typography type="text-preset-5" color="color-slate-600">Lorem ipsum dolor sit amet</Typography>
      <div className="buttons">
        <Button variant="blue" aria-label="Download Meet version 1.3">
          <Typography as="span" type="text-preset-5" color="color-white">Download</Typography>
          <Typography as="span" type="text-preset-5" color="color-cyan-300">v1.3</Typography>
        </Button>
        <Button variant="purple" aria-label="Learn more about Meet">
          <Typography as="span" type="text-preset-5" color="color-white">Learn More</Typography>
        </Button>
      </div>
    </div>
  )
}

export default DesignSystem
