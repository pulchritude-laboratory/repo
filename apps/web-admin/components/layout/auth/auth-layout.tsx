import $ from './auth-layout.module.scss'
import { SideMenu, SideMenuItem, SideMenuProps } from '@repo/ui-antd'
import { ReactNode, useMemo } from 'react'
import { FaLightbulb } from 'react-icons/fa'
import Icon from '@mdi/react'
import {
  mdiAccountCircle,
  mdiAccountGroup,
  mdiBell,
  mdiCardAccountDetails,
  mdiCog,
  mdiConsole,
  mdiLightbulb,
  mdiLightbulbGroup,
  mdiLogout,
  mdiMedicalBag,
  mdiScriptTextPlay,
  mdiViewDashboard
} from '@mdi/js'
// import { Logo } from '../../logo/Logo'
import { useRouter } from 'next/router'
import { Logo } from '../../logo/Logo'

export interface AuthLayoutProps {
  children?: ReactNode
}

const t = (s: string) => s.split('.').pop()

export function AuthLayout(props: AuthLayoutProps) {
  const router = useRouter()

  return (
    <div className={$.layout}>
      <span className={$.content}>{props.children}</span>
    </div>
  )
}

export function wrapAuthLayout(page: ReactNode) {
  return <AuthLayout>{page}</AuthLayout>
}

export default AuthLayout
