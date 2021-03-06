import $ from './public-layout.module.scss'
import { ReactNode, useMemo, useState } from 'react'
import {
  Background,
  Button,
  ButtonProps,
  Header,
  PageFrame,
  SideMenuItem,
  SideMenuProps
} from '@repo/ui-antd'
import Link from 'next/link'
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint'
import Icon from '@mdi/react'
import { mdiArrowLeft, mdiDraw, mdiLogin } from '@mdi/js'
import { BaseLayout } from '../base/base-layout'
import { Logo } from '../../logo/Logo'
import cn from 'classnames'
import { useRouter } from 'next/router'

export interface PublicLayoutProps {
  minimalist?: boolean
  children?: ReactNode
}

export function PublicLayout(props: PublicLayoutProps) {
  const { minimalist } = props
  const breakpoints = useBreakpoint()

  const [collapsed, setCollapsed] = useState<boolean>(true)
  const [isAtTop, setIsAtTop] = useState(true)
  const [shrunkHeader, setShrunkHeader] = useState(true)

  const router = useRouter()

  const skinnyViewport = breakpoints.xs

  const menuItems = useMemo(() => {
    const items: SideMenuProps['items'] = [
      {
        label: 'Home',
        to: '/'
      },
      {
        label: 'Why Iot Grape?',
        to: '/info/why'
      },
      {
        label: 'Features',
        to: '/info/features'
      },
      {
        label: 'Plans & Pricing',
        to: '/info/pricing'
      },
      {
        label: 'Contact',
        to: '/info/contact'
      }
    ]
    return items
  }, [])

  const footerItems = useMemo(() => {
    const items: (SideMenuItem & { button: ButtonProps })[] = [
      {
        to: '/auth/login',
        button: { type: 'primary' },
        label: 'Login',
        icon: <Icon path={mdiLogin} />
      },
      {
        to: '/auth/register',
        button: { type: 'ghost' },

        label: 'Register',
        icon: <Icon path={mdiDraw} />
      }
    ]
    return items
  }, [])

  return (
    <Background web={minimalist}>
      <BaseLayout
        items={menuItems}
        footerItems={footerItems}
        disabledSkinnyMenu
        collapseAfterSelection
        collapsedOnInit
        toggleStyle={shrunkHeader ? 'gap-top-S' : 'gap-top-M'}
        disabled={!skinnyViewport || minimalist}
        onCollapseChange={setCollapsed}
      >
        <PageFrame
          onHeaderShrink={setShrunkHeader}
          headerComponent={
            minimalist ? (
              <div className={cn($.header, { [$.mobileMinimalist]: skinnyViewport })}>
                <Button type="ghost" icon={<Icon path={mdiArrowLeft} />}>
                  <Link href="/">
                    <a>{'Home'}</a>
                  </Link>
                </Button>
              </div>
            ) : (
              <div
                className={cn($.header, {
                  [$.mobile]: skinnyViewport,
                  [$.hiddenContent]: !collapsed || minimalist
                })}
              >
                <span className={$.logo}>
                  <Logo mode={skinnyViewport ? 'full' : 'full'} />
                </span>
                {!breakpoints.xs && (
                  <span className={$.info}>
                    {menuItems.map(item => (
                      <Button key={item.to} type={router.pathname === item.to ? 'link' : 'ghost'}>
                        <Link href={item.to}>
                          <a>{item.label}</a>
                        </Link>
                      </Button>
                    ))}
                  </span>
                )}
                <span className={$.auth}>
                  {footerItems
                    .slice()
                    .reverse()
                    .map(item => (
                      <Button key={item.to} type={item.button.type ?? 'ghost'}>
                        <Link href={item.to}>
                          <a>{item.label}</a>
                        </Link>
                      </Button>
                    ))}
                </span>
              </div>
            )
          }
        >
          <div>{props.children}</div>
        </PageFrame>
      </BaseLayout>
    </Background>
  )
}

export function wrapPublicLayout(page: ReactNode) {
  return <PublicLayout>{page}</PublicLayout>
}

export default PublicLayout
