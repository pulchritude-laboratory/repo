import { render } from '@testing-library/react'

import AntStyleOverride from './AntStyleOverride'

describe('AntStyleOverride', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AntStyleOverride />)
    expect(baseElement).toBeTruthy()
  })
})
