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

  return (
    <Layout.Sider
      collapsedWidth={70}
      // trigger={
      //   <Button
      //     className={$.toggle}
      //     onClick={() => {
      //       console.log('TOO')

      //       setCollapsed(c => !c)
      //     }}
      //   >
      //     C
      //   </Button>
      // }
      trigger={null}
      collapsible
      collapsed={collapsed}
      className={$.wrapper}
    >
      <Button
        className={$.toggle}
        onClick={() => {
          console.log('TOO')

          setCollapsed(c => !c)
        }}
      >
        {<Icon path={collapsed ? mdiMenu : mdiBackburger} />}
      </Button>
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
