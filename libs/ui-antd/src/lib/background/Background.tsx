import { FC } from 'react'
import $ from './Background.module.scss'

export const Background: FC = ({ children }) => {
  return <div className={$.background}>{children}</div>
}
