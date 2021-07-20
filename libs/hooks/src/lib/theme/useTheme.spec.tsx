import { renderHook } from '@testing-library/react-hooks'
import { useTheme } from './useTheme'

const initHook = () => {
  const { result } = renderHook(() => useTheme())
  return result.current
}

describe('Button', () => {
  const { setTheme } = initHook()

  const root = document.documentElement
  const valueBefore = root.style.getPropertyValue('--color-primary-base')

  it('before', () => {
    expect(valueBefore).toBe('')
  })

  setTheme()

  const valueAfter = root.style.getPropertyValue('--color-primary-base')

  it('after', () => {
    expect(valueAfter.length).toBe(7)
  })
})
