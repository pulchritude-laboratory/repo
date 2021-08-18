import { NP } from '../../utils/types'
import { wrapAuthLayout } from '../../components/layout/auth/auth-layout'

const Page: NP = () => {
  return (
    <div>
      <h2>Register</h2>
    </div>
  )
}

Page.getLayout = wrapAuthLayout

export default Page
