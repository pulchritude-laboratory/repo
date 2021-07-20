type ColorType = 'primary' | 'secondary'
type ColorVariant = 'base' | 'muted' | 'vivid'
type ColorKey = `--color-${ColorType}-${ColorVariant}`

export type ThemeColors = [ColorKey, string]

export interface Theme {
  colors?: ThemeColors[]
}
