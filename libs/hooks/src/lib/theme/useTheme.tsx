import { useCallback } from 'react'
import { Theme } from './theme'

interface UseThemeUtils {
  setTheme: (theme: Theme) => void
}
export const useTheme = (): UseThemeUtils => {
  const setTheme = useCallback((theme: Theme) => {
    const root = document.documentElement
    theme?.colors?.forEach(cssVar => {
      root.style.setProperty(...cssVar)
    })
  }, [])

  return { setTheme }
}

export default useTheme
