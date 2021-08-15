import $ from './public-layout.module.scss'
import { ReactNode } from 'react'

export interface PublicLayoutProps {
  children?: ReactNode
}

export function PublicLayout(props: PublicLayoutProps) {
  return (
    <div className={$.layout}>
      <span className={$.content}>{props.children}</span>
    </div>
  )
}

export function wrapPublicLayout(page: ReactNode) {
  return <PublicLayout>{page}</PublicLayout>
}

export default PublicLayout
