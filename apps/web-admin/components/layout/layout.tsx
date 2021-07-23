import $ from './layout.module.scss'
import { SideMenu } from '@repo/ui-antd'
import { ReactNode } from 'react'

export interface LayoutProps {
  children?: ReactNode
}

export function Layout(props: LayoutProps) {
  return (
    <div className={$.layout}>
      <span className={$.side}>
        <div className={$.header}>
          <div className={$.logo}>LOGO</div>
        </div>
        <div className={$.menu}>
          <SideMenu />
        </div>
        <div className={$.footer}>FOOT</div>
      </span>
      <span className={$.content}>{props.children}</span>
    </div>
  )
}

export default Layout
