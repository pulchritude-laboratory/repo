import { ReactNode } from 'react'
import $ from './Header.module.scss'
import cn from 'classnames'

export interface HeaderProps {
  children?: ReactNode
  shadow?: boolean
}

export function Header(props: HeaderProps) {
  return <div className={cn($.header, { [$.shadow]: props.shadow })}>{props.children}</div>
}

export default Header
