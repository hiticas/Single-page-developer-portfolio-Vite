import './Button.scss'

function Button({
  variant = 'blue',
  children,
  className = '',
  ...props
}) {
  const classes = ['button', variant, className].join(' ')

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
