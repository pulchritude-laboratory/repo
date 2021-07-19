import './Button.module.scss'
import { Button as Btn, ButtonProps as BtnProps } from 'antd'

/* eslint-disable-next-line */
export interface ButtonProps {
  title?: BtnProps['title']
  type?: BtnProps['type']
  shape?: BtnProps['shape'] | 'rectangle'
  color?: string
}

export function Button(props: ButtonProps) {
  return (
    <Btn {...(props as any)} style={{ background: props.color }}>
      {props.title ?? 'Button'}
    </Btn>
  )
}

export default Button
