/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Layout, Menu, MenuItemProps } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'

import $ from './SideMenu.module.scss'

import { useCallback, useEffect, useMemo, useState } from 'react'
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

export interface SideMenuProps {
  items?: SideMenuItem[]
  onCollapseChange?: (collapse: boolean) => void
  footerItems?: SideMenuItem[]
  disabledSkinnyMenu?: boolean
  collapsedOnInit?: boolean
  toggleStyle?: 'gap-top-S' | 'gap-top-M'
  disabled?: boolean
  collapseAfterSelection?: boolean
  menuHeader?: (collapsed: boolean) => ReactNode
}

export function SideMenu(props: SideMenuProps) {
  const {
    menuHeader,
    items,
    footerItems,
    disabled,
    disabledSkinnyMenu,
    collapseAfterSelection,
    collapsedOnInit,
    onCollapseChange,
    toggleStyle
  } = props

  const router = useRouter()
  const breakpoints = useBreakpoint()

  const [collapsed, setCollapsed] = useState(!!collapsedOnInit)
  const [selectedKey, setSelectedKey] = useState(router.pathname ?? keyMaker(items?.[0]))

  const skinnyViewport = breakpoints.xs
  const blockedSkinnyMenu = disabledSkinnyMenu || skinnyViewport

  useEffect(() => {
    if (disabled) setCollapsed(true)
  }, [disabled])

  useEffect(() => {
    onCollapseChange?.(collapsed)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collapsed])

  const actionKeys = useMemo(() => {
    return [...(items ?? []), ...(footerItems ?? [])]?.reduce<string[]>((acc, mi) => {
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
  }, [items, footerItems])

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined = undefined

    if (collapseAfterSelection && selectedKey) {
      timer = setTimeout(() => {
        setCollapsed(true)
      }, 100)
    }
    console.log('HIHIIH', selectedKey, timer)
    return () => {
      timer && clearTimeout(timer)
    }
  }, [selectedKey, collapseAfterSelection])

  const renderMenu = useCallback(
    (menuItems?: SideMenuItem[]) => {
      const currentRoute = '/'
      return (
        <Menu
          mode="inline"
          theme="dark"
          onSelect={e => {
            console.log('hoho SELECT', menuItems?.length, e.key)

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
                  <a>{it.label}</a>
                </Link>
              ) : (
                it?.label ?? '???'
              )
            }

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
                      {content(subItem)}
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
    [collapsed, router, selectedKey, actionKeys]
  )

  return (
    <Layout.Sider
      breakpoint={'xs'}
      collapsedWidth={blockedSkinnyMenu ? 0 : 70}
      trigger={null}
      collapsed={collapsed}
      className={$.wrapper}
    >
      <div
        className={cn($.toggleWrapper, $[toggleStyle ?? ''], {
          [$.offsetLeft]: blockedSkinnyMenu && collapsed
        })}
      >
        {!disabled && (
          <Button className={cn($.toggle)} onClick={() => setCollapsed(c => !c)}>
            {<Icon path={collapsed ? mdiMenu : mdiBackburger} />}
          </Button>
        )}
      </div>
      <div className={$.header}>{menuHeader?.(collapsed)}</div>
      <div className={$.content}>{renderMenu(items)}</div>
      <div className={$.footer}>{renderMenu(footerItems)}</div>
    </Layout.Sider>
  )
}

export default SideMenu
