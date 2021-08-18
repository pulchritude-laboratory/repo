import $ from './base-layout.module.scss'
import cn from 'classnames'
import { Header, SideMenu, SideMenuProps } from '@repo/ui-antd'
import { ReactNode, useState } from 'react'
import { Logo } from '../../logo/Logo'

export interface BaseLayoutProps extends SideMenuProps {
  children?: ReactNode
}

export function BaseLayout(props: BaseLayoutProps) {
  const { children, ...menuProps } = props

  return (
    <div className={$.layout}>
      <span className={$.side}>
        <SideMenu
          {...menuProps}
          menuHeader={collapsed => {
            return (
              <div className={$.header}>
                <div className={$.logo}>
                  <Logo mode={collapsed ? 'compact' : 'full'} textColor="adaptive" />
                </div>
              </div>
            )
          }}
        />
      </span>
      <div className={$.page}>{children}</div>
    </div>
  )
}
