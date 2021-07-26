import chroma from 'chroma-js'
import {
  ColorType,
  ColorVariant,
  HEXAColor,
  Steps,
  ThemeData,
  ThemeKeyMaker,
  ThemeSeed,
  ThemeVariableSegments
} from './theme'

export function createTheme(seed: ThemeSeed): ThemeData {
  const theme: ThemeData = { prefix: seed.prefix, colors: [] }

  // const see

  const colorTypeMaker = (type?: ColorType) => {
    if (!type) return

    if (typeof seed !== 'object') return

    const color = Object.entries(seed).find(s => s[0] === type)?.[1]

    if (!color) return
    let base = chroma(color)

    const lightness = base.get('lch.l')

    if (lightness < 5) {
      base = base.set('lch.l', '5')
    } else if (lightness > 95) {
      base = base.set('lch.l', '95')
    }

    const bright = base.set('lch.l', '*1.1')
    const dark = base.set('lch.l', '*0.9')

    const contrastToWhite = chroma.contrast(base, 'white')
    const contrastToBlack = chroma.contrast(base, 'black')

    let contrast = chroma('black')
    if (contrastToWhite > contrastToBlack - 1.5) contrast = chroma('white')

    const colorKey = (variant: ColorVariant) => ThemeKeyMaker.color(type, variant)

    theme.colors?.push([colorKey('base'), base.hex()])
    theme.colors?.push([colorKey('bright'), bright.hex()])
    theme.colors?.push([colorKey('dark'), dark.hex()])
    theme.colors?.push([colorKey('contrast'), contrast.hex()])
  }

  const backgroundPaletteMaker = (fromColor: HEXAColor, toColor: HEXAColor) => {
    if (!fromColor || !toColor) return

    const from = chroma(fromColor)
    const to = chroma(toColor)

    const palette = chroma.scale([from, to]).mode('lch').colors(ThemeVariableSegments.steps.length)

    const colorKey = (step: Steps) => ThemeKeyMaker.backgroundColor(step)

    palette.forEach((p, i) => {
      theme.colors?.push([colorKey(ThemeVariableSegments.steps[i]), p])
    })
  }

  ThemeVariableSegments.colorTypes.forEach(colorTypeMaker)

  if (seed.background) {
    backgroundPaletteMaker(seed.background, '#000000')
  }

  console.log(' CTH', theme)

  return theme
}

export function createPalette(scaleItems: string[], steps = 15): HEXAColor[] {
  // const colors: HEXAColor[] = ['#340000', '#4354ea']

  const colors = chroma.scale(scaleItems).mode('lch').colors(steps) as HEXAColor[]

  return colors
}

export function updateThemeCssVariables(theme: ThemeData) {
  const { prefix, colors } = theme

  const root = document.documentElement

  const appendPrefix = (raw: string) => (prefix ? raw.replace('--', `--${prefix}-`) : raw)

  colors?.forEach(([k, v]) => root.style.setProperty(appendPrefix(k), v))
}
