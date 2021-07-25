import chroma from 'chroma-js'
import { ThemeSeed } from './theme'

export function createTheme(seed: ThemeSeed): void {
  const { primary } = seed
  if (primary) {
    const lch = chroma(primary).lch()
    console.log('lch', lch)
  }
}
