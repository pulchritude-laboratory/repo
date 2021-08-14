import { Button, Layout, Menu } from 'antd'
import $ from './SideMenu.module.scss'
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined
} from '@ant-design/icons'
import { useState } from 'react'
import { ReactNode } from 'react'
import { Icon } from '@mdi/react'
import { mdiBackburger, mdiMenu } from '@mdi/js'

import { AiOutlineMenuFold, AiOutlineMenu } from 'react-icons/ai'
import { MdAlarm } from 'react-icons/md'
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint'
import cn from 'classnames'

const { SubMenu } = Menu

export interface SideMenuItem {
  key?: string
  to?: string
  label?: ReactNode
  icon?: ReactNode
  subItems?: Omit<SideMenuItem, 'subItems'>[]
}

/* eslint-disable-next-line */
export interface SideMenuProps {
  items?: SideMenuItem[]
  header?: ReactNode
  footer?: ReactNode
}

export function SideMenu(props: SideMenuProps) {
  const { header, items, footer } = props
  const [collapsed, setCollapsed] = useState(false)

  const breakpoints = useBreakpoint()

  const skinnyViewport = breakpoints.xs
  console.log('BBRR', breakpoints)

  return (
    <Layout.Sider
      breakpoint={'xs'}
      onBreakpoint={v => {
        console.log('BBR', v)
      }}
      collapsedWidth={skinnyViewport ? 0 : 70}
      trigger={null}
      collapsed={collapsed}
      className={$.wrapper}
    >
      <div className={cn($.toggleWrapper, { [$.offsetLeft]: skinnyViewport && collapsed })}>
        <Button
          className={cn($.toggle)}
          onClick={() => {
            console.log('TOO')

            setCollapsed(c => !c)
          }}
        >
          {<Icon path={collapsed ? mdiMenu : mdiBackburger} />}
        </Button>
      </div>
      <div className={$.header}>{header}</div>
      <div className={$.content}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          // inlineCollapsed={true}
        >
          {items?.map(item => {
            if (item.subItems) {
              return (
                <SubMenu
                  key={item.to ?? item.key}
                  title={item.label}
                  icon={item.icon}
                  popupClassName={$.popup}
                >
                  {item.subItems.map(subItem => (
                    <Menu.Item key={subItem.to ?? subItem.key} icon={subItem.icon}>
                      {subItem.label}
                    </Menu.Item>
                  ))}
                </SubMenu>
              )
            }

            return (
              <Menu.Item key={item.to ?? item.key} icon={item.icon}>
                {item.label}
              </Menu.Item>
            )
          })}
        </Menu>
      </div>

      <div className={$.footer}>
        {/* <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub2']}
          mode="inline"
          theme="dark"
          // inlineCollapsed={true}
        >
          <Menu.Item key="12" icon={<AiOutlineMenu />}>
            FOP 1
          </Menu.Item>
          <Menu.Item key="32" icon={<MdAlarm />}>
            FOP 2
          </Menu.Item>
        </Menu> */}
        {footer}
      </div>
    </Layout.Sider>
  )
}

export default SideMenu
