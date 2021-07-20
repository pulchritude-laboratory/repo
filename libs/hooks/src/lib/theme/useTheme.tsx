import { useCallback } from 'react'

interface UseThemeUtils {
  setTheme: () => void
}
export const useTheme = (): UseThemeUtils => {
  const setTheme = useCallback(() => {
    const root = document.documentElement
    root.style.setProperty('--color-primary-base', '#000000')
  }, [])

  return { setTheme }
}

export default useTheme
