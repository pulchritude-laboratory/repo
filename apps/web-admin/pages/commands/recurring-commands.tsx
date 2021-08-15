import { NP } from '../../utils/types'
import { wrapPrivateLayout } from '../../components/layout/private/private-layout'

const Page: NP = () => {
  return (
    <div>
      <h2>Recurring Commands</h2>
    </div>
  )
}

Page.getLayout = wrapPrivateLayout

export default Page
