import { Button } from '@repo/ui-antd'
import { NP } from '../../utils/types'
import { wrapAuthLayout } from '../../components/layout/auth/auth-layout'
import { useRouter } from 'next/router'
import { AuthCard } from '../../components/auth-card/auth-card'

const Page: NP = () => {
  const router = useRouter()

  return (
    <div>
      <h2>Login</h2>
      <AuthCard>
        <Button type="primary" onClick={() => router.push('/dashboard')}>
          Login
        </Button>
      </AuthCard>
    </div>
  )
}

Page.getLayout = wrapAuthLayout

export default Page
