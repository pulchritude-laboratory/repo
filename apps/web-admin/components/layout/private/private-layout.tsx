import { SideMenuProps } from '@repo/ui-antd'
import { ReactNode, useMemo } from 'react'
import Icon from '@mdi/react'
import {
  mdiAccountCircle,
  mdiAccountGroup,
  mdiBell,
  mdiCardAccountDetails,
  mdiCog,
  mdiConsole,
  mdiLightbulb,
  mdiLogout,
  mdiMedicalBag,
  mdiScriptTextPlay,
  mdiViewDashboard
} from '@mdi/js'
import { useRouter } from 'next/router'
import { BaseLayout } from '../base/base-layout'

export interface PrivateLayoutProps {
  header?: ReactNode
  children?: ReactNode
}

const t = (s: string) => s.split('.').pop()

export function PrivateLayout(props: PrivateLayoutProps) {
  const router = useRouter()

  const menuItems = useMemo(() => {
    const items: SideMenuProps['items'] = [
      {
        to: '/dashboard',
        label: t('menu.dashboard'),
        icon: <Icon path={mdiViewDashboard} />
      },
      {
        key: '/devices',
        label: t('menu.device'),
        icon: <Icon path={mdiLightbulb} />,
        subItems: [
          {
            to: '/devices/devices',
            label: t('menu.devices')
          },
          {
            to: '/devices/device-types',
            label: t('menu.device-types')
          },
          {
            to: '/devices/device-groups',
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
            to: '/commands/commands',
            label: t('menu.commands')
          },
          {
            to: '/commands/recurring-commands',
            label: t('menu.recurring-commands')
          }
        ]
      },
      {
        to: '/maintenances',
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

  const footerItems = useMemo(() => {
    const items: SideMenuProps['items'] = [
      {
        to: '/account',
        label: t('menu.account'),
        icon: <Icon path={mdiAccountCircle} />
      },
      {
        to: '/settings',
        label: t('menu.settings'),
        icon: <Icon path={mdiCog} />
      },
      {
        key: 'sign-out',
        type: 'action',
        label: t('menu.sign-out'),
        icon: <Icon path={mdiLogout} />,
        onClick: () => router.push('/')
      }
    ]
    return items
  }, [router])
  console.log('PICCC', props.header)

  return (
    <BaseLayout toggleStyle="gap-top-S" items={menuItems} footerItems={footerItems}>
      {props.children}
    </BaseLayout>
  )
}

export function wrapPrivateLayout(page: ReactNode, other: { header: ReactNode }) {
  return <PrivateLayout>{page}</PrivateLayout>
}

export default PrivateLayout
