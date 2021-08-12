import chroma from 'chroma-js'
import {
  ColorType,
  ColorVariant,
  ComponentType,
  HEXAColor,
  ShadowType,
  Steps,
  ThemeData,
  ThemeKeyMaker,
  ThemeSeed,
  ThemeVariableSegments
} from './theme'

export function createTheme(seed: ThemeSeed): ThemeData {
  const theme: ThemeData = { prefix: seed.prefix, color: [], shadow: [] }

  // const see

  const colorTypeMaker = (type?: ColorType) => {
    if (!type) return

    if (typeof seed !== 'object') return

    const color = Object.entries(seed).find(s => s[0] === type)?.[1]

    if (!color) return
    const base = chroma(color)

    let revisedBase = base
    const lightness = base.get('lch.l')

    if (lightness < 5) {
      revisedBase = base.set('lch.l', '5')
    } else if (lightness > 90) {
      revisedBase = base.set('lch.l', '90')
    }

    console.log(type, { base, revisedBase })

    const bright = revisedBase.set('lch.l', '*1.05')
    const brightest = revisedBase.set('lch.l', '*1.1')
    const dark = revisedBase.set('lch.l', '*0.95')
    const darkest = revisedBase.set('lch.l', '*0.65')
    const tint = revisedBase.alpha(0.15)

    const contrastToWhite = chroma.contrast(base, 'white')
    const contrastToBlack = chroma.contrast(base, 'black')

    let contrast = chroma('black')
    const lightContrast = contrastToWhite > contrastToBlack - 1.5
    if (lightContrast) contrast = chroma('white')

    const colorKey = (variant: ColorVariant) => ThemeKeyMaker.color(type, variant)

    theme.color?.push([colorKey('base'), base.hex()])
    theme.color?.push([colorKey('bright'), bright.hex()])
    theme.color?.push([colorKey('brightest'), brightest.hex()])
    theme.color?.push([colorKey('dark'), dark.hex()])
    theme.color?.push([colorKey('darkest'), darkest.hex()])
    theme.color?.push([colorKey('contrast'), contrast.hex()])
    theme.color?.push([colorKey('tint'), tint.hex()])
    if (lightContrast) {
      theme.color?.push([colorKey('half-contrast'), contrast.alpha(0.4).hex()])
    } else {
      theme.color?.push([colorKey('half-contrast'), contrast.alpha(0.4).hex()])
    }
  }

  const backgroundPaletteMaker = (fromColor?: HEXAColor, toColor?: HEXAColor) => {
    if (!fromColor || !toColor) return

    const from = chroma(fromColor)
    const to = chroma(toColor)

    const palette = chroma.scale([from, to]).mode('lch').colors(ThemeVariableSegments.steps.length)

    const colorKey = (step: Steps) => ThemeKeyMaker.backgroundColor(step)

    palette.forEach((p, i) => {
      theme.color?.push([colorKey(ThemeVariableSegments.steps[i]), p])
    })
  }

  const radiusStepMaker = (reference?: number) => {
    if (reference === undefined) return

    const colorKey = (type: ComponentType) => ThemeKeyMaker.borderRadius(type)

    theme.color?.push([colorKey('button'), reference + 'rem'])
    theme.color?.push([colorKey('input'), reference + 'rem'])
    theme.color?.push([colorKey('card'), reference * 2 + 'rem'])
  }

  const delaySpeedMaker = () => {
    const baseline = 1

    ThemeVariableSegments.delayDurations.forEach(s =>
      theme.color?.push([ThemeKeyMaker.delayDuration(s), `${s * 100 * 1}ms`])
    )
  }

  const shadowMaker = () => {
    const colorKey = (type: ShadowType) => ThemeKeyMaker.shadow(type)
    if (!seed.primary || !seed.background) return
    const primary = chroma(seed.primary)

    const bgLuminance = chroma(seed.background).luminance()
    console.log('KKK', { bgLuminance })
    const isDark = bgLuminance < 0.07

    if (isDark) {
      theme.shadow?.push([
        colorKey('button-primary'),
        `${primary.alpha(1).hex()} 0px 2px 10px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px`
      ])
    } else {
      theme.shadow?.push([
        colorKey('button-primary'),
        `rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px`
      ])
      theme.shadow?.push([
        colorKey('button-secondary'),
        `rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px`
      ])
    }

    // theme.shadow?.push([
    //   colorKey('bg-500'),
    //   `rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px`
    // ])
    // theme.shadow?.push([
    //   colorKey('bg-600'),
    //   `rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px`
    // ])

    // theme.shadow?.push([
    //   colorKey('button-primary'),
    //   `${primary.alpha(0.3).hex()} 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px`
    // ])
    // theme.shadow?.push([
    //   colorKey('button-secondary'),
    //   'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
    // ])
    // theme.color?.push([colorKey('input'), reference + 'rem'])
    // theme.color?.push([colorKey('card'), reference * 2 + 'rem'])
  }

  ThemeVariableSegments.colorTypes.forEach(colorTypeMaker)

  theme.color?.push([
    ThemeKeyMaker.lightAngle(),
    seed.lightAngle ? seed.lightAngle + 'deg' : '150deg'
  ])

  // backgroundPaletteMaker(seed.background, '#000000')

  radiusStepMaker(seed.borderRadius)

  shadowMaker()

  delaySpeedMaker()

  console.log(' CTH', theme)

  return theme
}

export function createPalette(scaleItems: string[], steps = 15): HEXAColor[] {
  // const colors: HEXAColor[] = ['#340000', '#4354ea']

  const colors = chroma.scale(scaleItems).mode('lch').colors(steps) as HEXAColor[]

  return colors
}

export function updateThemeCssVariables(theme: ThemeData) {
  const { prefix, color, shadow } = theme

  const root = document.documentElement

  const appendPrefix = (raw: string) => (prefix ? raw.replace('--', `--${prefix}-`) : raw)

  console.log('theme', theme)

  color?.forEach(([k, v]) => root.style.setProperty(appendPrefix(k), v))
  shadow?.forEach(([k, v]) => root.style.setProperty(appendPrefix(k), v))
}
