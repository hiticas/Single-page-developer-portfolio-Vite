import Typography from '../Typography/Typography';
import './Input.scss';

function Input({
  error,
  className = '',
  ...props
}) {
  const hasError = !!error;
  const classes = ['input-wrapper', className].join(' ');

  return (
    <div className={classes}>
      <input
        className={`input ${hasError ? 'input-error' : ''}`}
        aria-invalid={hasError}
        aria-describedby={hasError ? 'input-error' : undefined}
        id='input-field'
        {...props}
      />

      {hasError && (
        <Typography
          as="span"
          className="input-error"
        >
          {error}
        </Typography>
      )}
    </div>
  );
}

export default Input;