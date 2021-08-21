import { NP } from '../../utils/types'
import { wrapPrivateLayout } from '../../components/layout/private/private-layout'
import { PageFrame } from '@repo/ui-antd'
import { LoremIpsum } from '../../components/ipsum/lorem-ipsum'

const Page: NP = () => {
  return (
    <PageFrame header={{ title: 'Maintenances' }}>
      <LoremIpsum />
    </PageFrame>
  )
}

Page.getLayout = wrapPrivateLayout

export default Page
