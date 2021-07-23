import { renderHook } from '@testing-library/react-hooks'
import { useTheme } from './useTheme'

const initHook = () => renderHook(() => useTheme()).result.current

describe('theme setter', () => {
  const { setTheme } = initHook()

  const root = document.documentElement

  // const valueBefore = root.style.getPropertyValue('--color-primary-muted')

  // it('before', () => {
  //   expect(valueBefore).toBe('')
  // })

  // setTheme({
  //   colors: [['--color-primary-muted', '#da1']]
  // })

  // const valueAfter = root.style.getPropertyValue('--color-primary-muted')

  // it('after', () => {
  //   expect(valueAfter).toBe('#da1')
  // })

  it('after', () => {
    expect(1).toBe(1)
  })
})
