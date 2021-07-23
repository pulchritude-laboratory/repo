import { useCallback, useEffect, useState } from 'react'
import { ThemeData, ColorMode } from './theme'

import { colorShifter } from './utils/color-shifters'
import { colorSpaceConverter } from './utils/color-space-converters'

interface UseThemeUtils {
  setTheme: (theme: ThemeData) => void
  fabricateTheme: (theme: ThemeData) => void
}
interface UseThemeProps {
  prefix: string
}
export const useTheme = (props?: UseThemeProps): UseThemeUtils => {
  const { prefix = 'th' } = props ?? {}

  const [currentTheme, setCurrentTheme] = useState<ThemeData>({})

  useEffect(() => {
    console.log('currentTheme', currentTheme)

    const root = document.documentElement
    const appendPrefix = (raw: string) => raw.replace('--', `--${prefix}-`)

    currentTheme?.colors?.forEach(([cssVarRaw, cssVal]) => {
      root.style.setProperty(appendPrefix(cssVarRaw), cssVal)
    })
    currentTheme?.shadows?.forEach(([cssVarRaw, cssVal]) => {
      root.style.setProperty(appendPrefix(cssVarRaw), cssVal)
    })
  }, [currentTheme, prefix])

  const setTheme = useCallback((theme: ThemeData) => {
    setCurrentTheme(theme)
  }, [])

  const fabricateTheme = useCallback((theme: ThemeData) => {
    setCurrentTheme(cth => {
      const th: ThemeData = {
        colors: [],
        shadows: []
      }

      if (theme.factoryColors) {
        const { primary } = theme.factoryColors

        const primarySwatch = colorShifter.hexa.tinySwatch(primary, 15)

        th.colors?.push(['--color-primary-base', primarySwatch[0]])
        th.colors?.push(['--color-primary-muted', primarySwatch[1]])
        th.colors?.push(['--color-primary-vivid', primarySwatch[2]])

        const translucentPrimary = colorSpaceConverter.HslaToHexa(
          colorShifter.hsla.setOpacity(colorSpaceConverter.HexaToHsla(primary), 0.3)
        )
        // const translucent
        const translucentPrimarySwatch = colorShifter.hexa.tinySwatch(translucentPrimary, 10)

        th.colors?.push(['--color-primary-translucent-base', translucentPrimarySwatch[0]])
        th.colors?.push(['--color-primary-translucent-muted', translucentPrimarySwatch[1]])
        th.colors?.push(['--color-primary-translucent-vivid', translucentPrimarySwatch[2]])

        th.colors?.push([`--color-border-dominant`, primarySwatch[1]])

        th.shadows?.push([
          '--shadow-dominant',
          `0 3px 6px -4px ${primarySwatch[0]}, 0 6px 16px 0 ${translucentPrimarySwatch[1]}, 0 9px 28px 8px ${translucentPrimarySwatch[2]}`
        ])
      }

      return th
    })
  }, [])

  const setMode = useCallback((mode: ColorMode) => {
    // const root = document.
    // const key:  = `--color-${mode}`
    // root.style.setProperty()
    // theme?.colors?.forEach(cssVar => {
    // })
  }, [])

  return { setTheme, fabricateTheme }
}

export default useTheme
