export const ThemeVariableSegments = {
  colorTypes: ['primary', 'secondary'],
  colorVariants: ['base', 'muted', 'vivid'],
  colorModes: ['light', 'dark', 'black'],
  backgroundTypes: ['lvl-0', 'lvl-1', 'component'],
  shadowTypes: ['normal', 'dominant'],
  borderTypes: ['dominant']
} as const

export type ColorType = typeof ThemeVariableSegments.colorTypes[number]
export type ColorVariant = typeof ThemeVariableSegments.colorVariants[number]
export type ColorMode = typeof ThemeVariableSegments.colorModes[number]
export type BackgroundType = typeof ThemeVariableSegments.backgroundTypes[number]
export type ShadowType = typeof ThemeVariableSegments.shadowTypes[number]
export type BorderType = typeof ThemeVariableSegments.borderTypes[number]

export type BackgroundColorKey = `--color-background-${BackgroundType}`
export type ColorKey = `--color-${ColorType}-${ColorVariant}`
export type TranslucentColorKey = `--color-${ColorType}-translucent-${ColorVariant}`
export type ShadowKey = `--shadow-${ShadowType}`
export type BorderColorKey = `--color-border-${BorderType}`

export const ThemeKeyMaker = {
  color: (type: ColorType, variant: ColorVariant): ColorKey => `--color-${type}-${variant}` as any,
  borderColor: (type: BorderType): BorderColorKey => `--color-border-${type}` as any,
  backgroundColor: (type: BackgroundType): BackgroundColorKey =>
    `--color-background-${type}` as any,
  shadow: (type: ShadowType): ShadowKey => `--shadow-${type}` as any
}

export type HEXAColor = `#${string}`
export type RGBAColor = [r: number, g: number, b: number, a: number]
export type HSLAColor = [h: number, s: number, l: number, a: number]

export type Colors = [
  ColorKey | TranslucentColorKey | BackgroundColorKey | BorderColorKey,
  HEXAColor
]
export type Shadows = [ShadowKey, string]

export interface ThemeData {
  factoryColors?: {
    primary: HEXAColor
  }
  colors?: Colors[]
  shadows?: Shadows[]
}
