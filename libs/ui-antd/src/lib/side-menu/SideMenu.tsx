import { Button, Layout, Menu, MenuItemProps } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'

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
import { useCallback, useEffect, useState } from 'react'
import { ReactNode } from 'react'
import { Icon } from '@mdi/react'
import { mdiBackburger, mdiMenu } from '@mdi/js'

import { AiOutlineMenuFold, AiOutlineMenu } from 'react-icons/ai'
import { MdAlarm } from 'react-icons/md'
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint'
import cn from 'classnames'

const { SubMenu } = Menu

export interface SideMenuItem {
  type?: 'page' | 'action'
  key?: string
  to?: `/${string}`
  onClick?: MenuItemProps['onClick']
  label?: ReactNode
  icon?: ReactNode
  subItems?: Omit<SideMenuItem, 'subItems'>[]
}

const keyMaker = (item?: SideMenuItem) => item?.to ?? item?.key

/* eslint-disable-next-line */
export interface SideMenuProps {
  items?: SideMenuItem[]
  footerItems?: SideMenuItem[]
  header?: (collapsed: boolean) => ReactNode
  footer?: ReactNode
}

export function SideMenu(props: SideMenuProps) {
  const { header, items, footerItems, footer } = props
  const [collapsed, setCollapsed] = useState(false)
  const router = useRouter()
  console.log({ router })

  const [selectedKey, setSelectedKey] = useState(router.pathname ?? keyMaker(items?.[0]))

  const breakpoints = useBreakpoint()

  const defaultKey = keyMaker(items?.[0])
  const skinnyViewport = breakpoints.xs
  console.log('BBRR', breakpoints)

  const renderMenu = useCallback(
    (menuItems?: SideMenuItem[]) => {
      const currentRoute = '/'
      return (
        <Menu
          mode="inline"
          theme="dark"
          onSelect={e => {
            const actionKeys = menuItems?.reduce<string[]>((acc, mi) => {
              if (mi.type === 'action') {
                const key = keyMaker(mi)
                key && acc.push(key)
              }
              if (mi.subItems) {
                mi.subItems.forEach(si => {
                  if (si.type === 'action') {
                    const key = keyMaker(si)
                    key && acc.push(key)
                  }
                })
              }
              return acc
            }, [])
            if (!actionKeys?.includes(e.key)) {
              setSelectedKey(e.key)
            }
          }}
          selectedKeys={selectedKey ? [selectedKey] : []}
        >
          {menuItems?.map(item => {
            const content = (it?: SideMenuItem) => {
              return it?.to ? (
                <Link href={it?.to ?? currentRoute}>
                  <div>{it.label}</div>
                </Link>
              ) : (
                it?.label ?? '???'
              )
            }
            console.log('EDDD', content(item))

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
                      <Link href={subItem?.to ?? currentRoute}>
                        <div>{subItem.label}</div>
                      </Link>
                    </Menu.Item>
                  ))}
                </SubMenu>
              )
            }

            return (
              <Menu.Item
                key={item.to ?? item.key}
                icon={item.icon}
                onClick={e => {
                  item.onClick?.(e)
                  collapsed && item?.to && router.push(item.to)
                }}
              >
                {content(item)}
              </Menu.Item>
            )
          })}
        </Menu>
      )
    },
    [collapsed, selectedKey]
  )

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
      <div className={$.header}>{header?.(collapsed)}</div>
      <div className={$.content}>{renderMenu(items)}</div>
      <div className={$.footer}>{renderMenu(footerItems)}</div>
    </Layout.Sider>
  )
}

export default SideMenu
