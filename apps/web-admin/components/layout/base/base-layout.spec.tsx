import { render } from '@testing-library/react'

import { BaseLayout } from './base-layout'

describe('Base Layout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BaseLayout />)
    expect(baseElement).toBeTruthy()
  })
})
