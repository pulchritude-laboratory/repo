import { NP } from '../../utils/types'
import { wrapPublicLayout } from '../../components/layout/public/public-layout'

const Page: NP = () => {
  return (
    <div>
      <h2>Features</h2>
    </div>
  )
}

Page.getLayout = wrapPublicLayout

export default Page
