import { wrapPrivateLayout } from '../../components/layout/private/private-layout'
import { NP } from '../../utils/types'

const Page: NP = () => {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  )
}

Page.getLayout = wrapPrivateLayout

export default Page
