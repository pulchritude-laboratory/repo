import { Button } from '@repo/ui-antd'
import { NP } from '../../utils/types'
import Link from 'next/link'
import { wrapAuthLayout } from '../../components/layout/auth/auth-layout'
import { useRouter } from 'next/router'

const Page: NP = () => {
  const router = useRouter()

  return (
    <div>
      <h2>Login</h2>
      <Button type="primary" onClick={() => router.push('/dashboard')}>
        Login
      </Button>
    </div>
  )
}

Page.getLayout = wrapAuthLayout

export default Page
