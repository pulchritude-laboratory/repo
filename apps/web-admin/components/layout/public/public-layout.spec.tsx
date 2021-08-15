import { render } from '@testing-library/react'

import { PublicLayout } from './public-layout'

describe('Public Layout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PublicLayout />)
    expect(baseElement).toBeTruthy()
  })
})
