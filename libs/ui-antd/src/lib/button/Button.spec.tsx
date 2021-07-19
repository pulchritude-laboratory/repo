import { render } from '@testing-library/react'

import Button from './Button'

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button />)
    expect(baseElement).toBeTruthy()
  })

  it('should render the title', () => {
    const { baseElement } = render(<Button title="TEXT" />)
    expect(baseElement.textContent).toBe('TEXT')
  })
})
