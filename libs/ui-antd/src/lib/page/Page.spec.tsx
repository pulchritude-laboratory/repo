import { render } from '@testing-library/react'

import { PageFrame } from './Page'

describe('Page', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageFrame />)
    expect(baseElement).toBeTruthy()
  })
})
