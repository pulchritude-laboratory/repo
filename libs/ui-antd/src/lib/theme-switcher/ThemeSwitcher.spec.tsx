import { render } from '@testing-library/react'

import ThemeSwitcher from './ThemeSwitcher'

describe('ThemeSwitcher', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThemeSwitcher />)
    expect(baseElement).toBeTruthy()
  })
})
