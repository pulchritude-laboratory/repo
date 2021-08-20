import { Card } from '@repo/ui-antd'
import { ReactNode } from 'react'
import { FC } from 'react'
import $ from './auth-card.module.scss'

interface AuthCardProps {
  children?: ReactNode
}
export const AuthCard: FC<AuthCardProps> = props => {
  const { children } = props

  return (
    <div className={$.page}>
      <div className={$.wrapper}>
        <Card>{children}</Card>
      </div>
    </div>
  )
}
