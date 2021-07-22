import { useCallback } from 'react'
import { Theme } from './theme'

interface UseThemeUtils {
  setTheme: (theme: Theme.Data) => void
}
export const useTheme = (): UseThemeUtils => {
  const setTheme = useCallback((theme: Theme.Data) => {
    const root = document.documentElement
    theme?.colors?.forEach(cssVar => {
      root.style.setProperty(...cssVar)
    })
  }, [])

  const setMode = useCallback((mode: Theme.ColorMode) => {
    // const root = document.
    // const key: Theme. = `--color-${mode}`
    // root.style.setProperty()
    // theme?.colors?.forEach(cssVar => {
    // })
  }, [])

  return { setTheme }
}

export default useTheme
