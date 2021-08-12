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

import { AiOutlineMenuFold, AiOutlineMenu } from 'react-icons/ai'

const { SubMenu } = Menu

export interface SideMenuItem {
  key?: string
  icon?: ReactNode
  subItems?: SideMenuItem[]
}

/* eslint-disable-next-line */
export interface SideMenuProps {
  items?: SideMenuItem[]
  header?: ReactNode
  footer?: ReactNode
}

export function SideMenu(props: SideMenuProps) {
  const { header, footer } = props
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout.Sider
      collapsedWidth={80}
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
        {collapsed ? <AiOutlineMenu /> : <AiOutlineMenuFold />}
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
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            Option 3
          </Menu.Item>
          <SubMenu
            popupClassName={$.popup}
            key="sub1"
            icon={<MailOutlined />}
            title="Navigation One"
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub2" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub5" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>

      <div className={$.footer}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub2']}
          mode="inline"
          theme="dark"
          // inlineCollapsed={true}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            FOP 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            FOP 2
          </Menu.Item>
        </Menu>
        {footer}
      </div>
    </Layout.Sider>
  )
}

export default SideMenu
