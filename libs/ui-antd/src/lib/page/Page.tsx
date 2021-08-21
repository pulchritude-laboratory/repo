import { ReactNode, useEffect, useState } from 'react'
import $ from './Page.module.scss'
import cn from 'classnames'
import { ButtonProps } from '../button/Button'

import Header from '../header/Header'
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint'

export interface PageProps {
  header?: {
    title?: string
    buttons?: ButtonProps[]
  }
  headerComponent?: ReactNode
  children?: ReactNode
  onHeaderShrink?: (e: boolean) => void
}

export function PageFrame(props: PageProps) {
  const { children, header, headerComponent, onHeaderShrink } = props

  const [isAtTop, setIsAtTop] = useState(true)
  const [shrunk, setShrunk] = useState(false)

  const breakpoint = useBreakpoint()

  useEffect(() => {
    setShrunk(!isAtTop || !!breakpoint.xs)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAtTop, breakpoint.xs])

  useEffect(() => {
    onHeaderShrink?.(shrunk)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shrunk])

  return (
    <div
      className={$.page}
      onScroll={e => {
        const target = e.nativeEvent.target as any

        const longScroll = target?.scrollHeight - target?.clientHeight > 80
        console.log('GGG', {
          longScroll,
          ll: target?.scrollHeight - target?.clientHeight,
          oo: target?.scrollTop === 0,
          ee: longScroll,
          target
        })

        setIsAtTop(target?.scrollTop === 0)
      }}
    >
      <div className={cn($.headerWrapper, { [$.shrink]: shrunk })}>
        <Header shadow={!isAtTop}>
          {headerComponent ?? (
            <div className={cn($.header)}>
              <div className={$.title}>
                <h2>{header?.title}</h2>
              </div>
              <div className={$.buttons}>{/* <h2>{header?.title}</h2> */}</div>
            </div>
          )}
        </Header>
      </div>
      <div className={$.content}>{children}</div>
    </div>
  )
}

export default PageFrame
