import { render } from '@testing-library/react'

import { PrivateLayout } from './private-layout'

describe('Private Layout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PrivateLayout />)
    expect(baseElement).toBeTruthy()
  })
})
