import { Card as AntCard, CardProps as AntCardProps } from 'antd'
import { ReactNode } from 'react'
import './Card.module.scss'

/* eslint-disable-next-line */
export interface CardProps extends AntCardProps {
  children?: ReactNode
}

export function Card(props: CardProps) {
  return <AntCard>{props.children}</AntCard>
}

export default Card
