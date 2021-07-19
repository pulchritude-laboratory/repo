import './Button.module.scss';

/* eslint-disable-next-line */
export interface ButtonProps {
  label?: string;
}

export function Button(props: ButtonProps) {
  return (
    <div>
      <h1>Welcome to button! {props.label}</h1>
    </div>
  );
}

export default Button;
