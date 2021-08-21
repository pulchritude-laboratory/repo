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
import { BaseLayout } from '../base/base-layout'
import { PublicLayout } from '../public/public-layout'

export interface AuthLayoutProps {
  children?: ReactNode
}

const t = (s: string) => s.split('.').pop()

export function AuthLayout(props: AuthLayoutProps) {
  const router = useRouter()

  return (
    <PublicLayout minimalist>
      <span className={$.content}>{props.children}</span>
    </PublicLayout>
  )
}

export function wrapAuthLayout(page: ReactNode) {
  return <AuthLayout>{page}</AuthLayout>
}

export default AuthLayout
