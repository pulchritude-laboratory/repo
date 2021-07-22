export namespace Theme {
  export type ColorType = 'primary' | 'secondary'
  export type ColorVariant = 'base' | 'muted' | 'vivid'
  export type ColorMode = 'light' | 'dark' | 'black'
  export type Background = 'lvl-0' | 'component'

  export type BackgroundColorKey = `--color-background-${Background}`
  export type ColorKey = `--color-${ColorType}-${ColorVariant}`
  export type ColorModeKey = `--color-${ThemeColorMode}`

  export type Colors = [ColorKey | BackgroundColorKey, string]

  export interface Data {
    mode?: ColorModeKey
    colors?: Colors[]
  }
}
