import $ from './layout.module.scss'
import { SideMenu, SideMenuItem, SideMenuProps } from '@repo/ui-antd'
import { ReactNode, useMemo } from 'react'
import { FaLightbulb } from 'react-icons/fa'
import Icon from '@mdi/react'
import {
  mdiAccountGroup,
  mdiBell,
  mdiCardAccountDetails,
  mdiConsole,
  mdiLightbulb,
  mdiLightbulbGroup,
  mdiMedicalBag,
  mdiScriptTextPlay,
  mdiViewDashboard
} from '@mdi/js'

export interface LayoutProps {
  children?: ReactNode
}

const t = (s: string) => s.split('.').pop()

export function Layout(props: LayoutProps) {
  const menuItems = useMemo(() => {
    const items: SideMenuProps['items'] = [
      {
        to: '/dashboard',
        label: t('menu.dashboard'),
        icon: <Icon path={mdiViewDashboard} />
      },
      {
        to: '/device',
        label: t('menu.device'),
        icon: <Icon path={mdiLightbulb} />,
        subItems: [
          {
            to: 'device/devices',
            label: t('menu.devices')
          },
          {
            to: 'device/device-types',
            label: t('menu.device-types')
          },
          {
            to: 'device/device-groups',
            label: t('menu.device-groups')
          }
        ]
      },
      {
        to: '/notifications',
        label: t('menu.notifications'),
        icon: <Icon path={mdiBell} />
      },
      {
        to: '/rules',
        label: t('menu.rules'),
        icon: <Icon path={mdiScriptTextPlay} />
      },
      {
        to: '/command',
        label: t('menu.command'),
        icon: <Icon path={mdiConsole} />,
        subItems: [
          {
            to: '/commands',
            label: t('menu.commands')
          },
          {
            to: '/recurring-commands',
            label: t('menu.recurring-commands')
          }
        ]
      },
      {
        to: '/maintenance',
        label: t('menu.maintenance'),
        icon: <Icon path={mdiMedicalBag} />
      },
      {
        to: '/users',
        label: t('menu.users'),
        icon: <Icon path={mdiAccountGroup} />
      },
      {
        to: '/permissions',
        label: t('menu.permissions'),
        icon: <Icon path={mdiCardAccountDetails} />
      }
    ]
    return items
  }, [])

  return (
    <div className={$.layout}>
      <span className={$.side}>
        <SideMenu
          header={
            <div className={$.header}>
              <div className={$.logo}>LOGO</div>
            </div>
          }
          items={menuItems}
          footer={<div className={$.footer}>FOOT</div>}
        />
      </span>
      <span className={$.content}>{props.children}</span>
    </div>
  )
}

export default Layout
