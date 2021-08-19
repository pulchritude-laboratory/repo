import { NP } from '../../utils/types'
import { wrapPublicLayout } from '../../components/layout/public/public-layout'
import { LoremIpsum } from '../../components/ipsum/lorem-ipsum'

const Page: NP = () => {
  return (
    <div>
      <h2>Why IoT Grape?</h2>
      <LoremIpsum />
    </div>
  )
}

Page.getLayout = wrapPublicLayout

export default Page
