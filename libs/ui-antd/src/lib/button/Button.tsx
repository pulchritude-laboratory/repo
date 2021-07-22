import s from './Button.module.scss'
import { Button as Btn, ButtonProps as BtnProps } from 'antd'
import { ReactNode } from 'react'

/* eslint-disable-next-line */
export interface ButtonProps {
  title?: BtnProps['title']
  type?: BtnProps['type']
  shape?: BtnProps['shape'] | 'rectangle'
  color?: string
  onClick?: BtnProps['onClick']
  children?: ReactNode
}

export function Button(props: ButtonProps) {
  console.log('')

  return (
    <span className={s.shitbutton}>
      <Btn {...(props as any)} className={s.wdsds}>
        {props.title ?? props.children ?? 'Button'}
      </Btn>
    </span>
  )
}

export default Button
