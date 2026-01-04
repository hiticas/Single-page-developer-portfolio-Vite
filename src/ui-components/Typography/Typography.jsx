import './Typography.scss'

function Typography({
  as: Component = 'p',
  type = 'body',
  className = '',
  children,
}) {
  const classes = [
    type,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <Component className={classes}>{children}</Component>
}

export default Typography
