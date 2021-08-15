export const ThemeVariableSegments = {
  colorTypes: [
    'primary',
    'secondary',
    'default',
    'success',
    'warning',
    'danger',
    'disabled',
    'background',
    'accent'
  ],
  colorVariants: [
    'base',
    'base-rgb',
    'bright',
    'brightest',
    'dark',
    'whiteness',
    'darkest',
    'contrast-background',
    'contrast',
    'contrast-coef',
    'contrast-rgb',
    'contrast-01',
    'contrast-02',
    'contrast-05',
    'half-contrast',
    'tint'
  ],
  steps: ['0', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
  components: ['card', 'button', 'button-large', 'input'],
  shadowTypes: ['bg-500', 'bg-600', 'button-primary', 'button-secondary', 'button-default'],
  borderTypes: ['dominant'],
  time: ['02', '05', '10', '15', '20'],
  scrollBarParts: ['track', 'handle']
} as const

export type ColorType = typeof ThemeVariableSegments.colorTypes[number]
export type ColorVariant = typeof ThemeVariableSegments.colorVariants[number]
export type Steps = typeof ThemeVariableSegments.steps[number]
export type ShadowType = typeof ThemeVariableSegments.shadowTypes[number]
export type BorderType = typeof ThemeVariableSegments.borderTypes[number]
export type ComponentType = typeof ThemeVariableSegments.components[number]
export type Time = typeof ThemeVariableSegments.time[number]
export type ScrollBarParts = typeof ThemeVariableSegments.scrollBarParts[number]

export const ThemeKeyMaker = {
  color: (type: ColorType, variant: ColorVariant) => `--color-${type}-${variant}`,
  backgroundColor: (step: Steps) => `--color-background-${step}`,
  borderColor: (type: BorderType) => `--border-color-${type}`,
  borderRadius: (type: ComponentType) => `--border-color-${type}`,
  lightAngle: () => `--light-angle`,
  shadow: (type: ShadowType) => `--shadow-${type}`,
  time: (time: Time) => `--time-${time}`,
  scrollBarColor: (part: ScrollBarParts) => `--color-scroll-bar-${part}`
}

export type HEXAColor = `#${string}`
export type RGBAColor = [r: number, g: number, b: number, a: number]
export type HSLAColor = [h: number, s: number, l: number, a: number]

export type CssVariable = [string, string]

export interface ThemeData {
  prefix?: string
  time?: CssVariable[]
  color?: CssVariable[]
  borderRadius?: CssVariable[]
  shadow?: CssVariable[]
}

export interface ThemeSeed {
  prefix: string
  primary?: HEXAColor
  secondary?: HEXAColor
  default?: HEXAColor
  disabled?: HEXAColor
  success?: HEXAColor
  warning?: HEXAColor
  danger?: HEXAColor
  background?: HEXAColor
  accent?: HEXAColor
  borderRadius?: number
  lightAngle?: number
}
