import { wrapPublicLayout } from '../components/layout/public/public-layout'
import { NP } from '../utils/types'
import { LoremIpsum } from '../components/ipsum/lorem-ipsum'

const Page: NP = () => {
  return (
    <div>
      <h2>Grape IoT</h2>
      <LoremIpsum />
    </div>
  )
}

Page.getLayout = wrapPublicLayout

export default Page
