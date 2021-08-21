import { Card as AntCard, CardProps as AntCardProps } from 'antd'
import $ from './Card.module.scss'

export type CardProps = AntCardProps

export function Card(props: CardProps) {
  return (
    <AntCard {...props} className={$.card}>
      {props.children}
    </AntCard>
  )
}

export default Card
