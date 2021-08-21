import { FC } from 'react'
import $ from './Background.module.scss'
import cn from 'classnames'

interface BackgroundProps {
  imgUrl?: string
  web?: boolean
}
export const Background: FC<BackgroundProps> = ({ children, web }) => {
  return <div className={cn($.background, { [$.web]: web })}>{children}</div>
}
