export const ThemeVariableSegments = {
  colorTypes: ['primary', 'secondary', 'success', 'warning', 'danger', 'background'],
  colorVariants: ['base', 'dark', 'bright', 'contrast'],
  steps: ['0', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
  shadowTypes: ['normal', 'dominant'],
  borderTypes: ['dominant']
} as const

export type ColorType = typeof ThemeVariableSegments.colorTypes[number]
export type ColorVariant = typeof ThemeVariableSegments.colorVariants[number]
export type Steps = typeof ThemeVariableSegments.steps[number]
export type ShadowType = typeof ThemeVariableSegments.shadowTypes[number]
export type BorderType = typeof ThemeVariableSegments.borderTypes[number]

export type BackgroundColorKey = `--color-background-${Steps}`
export type ColorKey = `--color-${ColorType}-${ColorVariant}`
export type TranslucentColorKey = `--color-${ColorType}-translucent-${ColorVariant}`
export type ShadowKey = `--shadow-${ShadowType}`
export type BorderColorKey = `--color-border-${BorderType}`

export const ThemeKeyMaker = {
  color: (type: ColorType, variant: ColorVariant): ColorKey => `--color-${type}-${variant}` as any,
  borderColor: (type: BorderType): BorderColorKey => `--color-border-${type}` as any,
  backgroundColor: (step: Steps): BackgroundColorKey => `--color-background-${step}` as any,
  shadow: (type: ShadowType): ShadowKey => `--shadow-${type}` as any
}

export type HEXAColor = `#${string}`
export type RGBAColor = [r: number, g: number, b: number, a: number]
export type HSLAColor = [h: number, s: number, l: number, a: number]

export type Colors = [ColorKey | TranslucentColorKey | BackgroundColorKey | BorderColorKey, string]
export type Shadows = [ShadowKey, string]

export interface ThemeData {
  prefix?: string
  factoryColors?: {
    primary: HEXAColor
  }
  colors?: Colors[]
  shadows?: Shadows[]
}

export interface ThemeSeed {
  prefix: string
  primary?: HEXAColor
  secondary?: HEXAColor
  success?: HEXAColor
  warning?: HEXAColor
  danger?: HEXAColor
  background?: HEXAColor
}
