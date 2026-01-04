import './Typography.scss'

function Typography({
  as: Component = 'p',
  type = 'text-preset-5',
  color,
  className = '',
  children,
}) {
  const classes = [
    type,
    color,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <Component className={classes}>{children}</Component>
}

export default Typography
