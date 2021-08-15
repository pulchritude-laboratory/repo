import { Button } from '@repo/ui-antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { wrapPublicLayout } from '../components/layout/public/public-layout'
import { NP } from '../utils/types'

const Page: NP = () => {
  return (
    <div>
      <h2>Grape IoT</h2>
      <Button>
        <Link href="/auth/login"> Login </Link>
      </Button>
    </div>
  )
}

Page.getLayout = wrapPublicLayout

export default Page
