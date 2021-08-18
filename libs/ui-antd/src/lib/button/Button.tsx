import s from './Button.module.scss'
import { Button as Btn, ButtonProps as BtnProps } from 'antd'
import { ReactNode } from 'react'
import cn from 'classnames'

/* eslint-disable-next-line */
export interface ButtonProps {
  title?: BtnProps['title']
  icon?: BtnProps['icon']
  type?: 'default' | 'primary' | 'secondary' | 'danger' | 'warning' | 'ghost' | 'link'
  shape?: BtnProps['shape'] | 'rectangle'
  color?: string
  onClick?: BtnProps['onClick']
  children?: ReactNode
  disabled?: boolean
}

export function Button(props: ButtonProps) {
  console.log('')

  return (
    <span className={`ant-btn-wrapper`}>
      <Btn
        {...(props as any)}
        danger={props.type === 'danger'}
        className={cn(`ant-btn-${props.type}`, { 'ant-btn-with-icon': !!props.icon })}
      >
        {props.title ?? props.children ?? 'Button'}
      </Btn>
    </span>
  )
}

export default Button
