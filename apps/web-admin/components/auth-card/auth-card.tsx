import { Button, ButtonProps, Card } from '@repo/ui-antd'
import { ReactNode } from 'react'
import { FC } from 'react'
import { Logo } from '../logo/Logo'
import $ from './auth-card.module.scss'

interface AuthCardProps {
  children?: ReactNode
  title?: string
  submitButtonProps?: ButtonProps
}
export const AuthCard: FC<AuthCardProps> = props => {
  const { children, submitButtonProps, title } = props

  return (
    <div className={$.page}>
      <div className={$.wrapper}>
        <Card>
          <div className={$.logo}>
            <Logo mode="full-large" />
          </div>
          {children}
          <div className={$.submit}>
            <Button {...submitButtonProps} type="primary"></Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
