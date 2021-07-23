import { HEXAColor, HSLAColor } from '../theme'
import { colorSpaceConverter } from './color-space-converters'

export const colorShifter = {
  hsla: {
    darken,
    lighten,
    saturate,
    desaturate,
    rotateHue,
    setOpacity
  },
  hexa: {
    tinySwatch
  }
}

function darken(hsla: HSLAColor, percentage: number): HSLAColor {
  const [...v] = hsla
  v[2] = minmax(0, 100, v[2] * (100 + percentage) * 0.01)
  return v
}

function lighten(hsla: HSLAColor, percentage: number): HSLAColor {
  const [...v] = hsla
  v[2] = minmax(0, 100, v[2] * (100 - percentage) * 0.01)
  return v
}

function saturate(hsla: HSLAColor, percentage: number): HSLAColor {
  const [...v] = hsla
  v[2] = minmax(0, 100, v[2] * (100 + percentage) * 0.01)
  return v
}

function desaturate(hsla: HSLAColor, percentage: number): HSLAColor {
  const [...v] = hsla
  v[1] = minmax(0, 100, v[1] * (100 - percentage) * 0.01)
  return v
}

function rotateHue(hsla: HSLAColor, deg: number): HSLAColor {
  const [...v] = hsla
  v[0] = minmax(0, 360, v[0] + deg)
  return v
}

function setOpacity(hsla: HSLAColor, opacity: number): HSLAColor {
  const [...v] = hsla
  v[3] = minmax(0, 1, opacity)
  return v
}

function tinySwatch(
  hexa: HEXAColor,
  percentage: number
): [base: HEXAColor, muted: HEXAColor, vivid: HEXAColor] {
  const hslaBase = colorSpaceConverter.HexaToHsla(hexa)
  const hslaMuted = saturate(hslaBase, -percentage)
  const hslaVivid = saturate(hslaBase, percentage)

  console.log('ddd', { hexa, hslaBase, hslaMuted, hslaVivid })

  return [
    hexa,
    colorSpaceConverter.HslaToHexa(hslaMuted),
    colorSpaceConverter.HslaToHexa(hslaVivid)
  ]
}

const minmax = (min: number, max: number, val: number) => Math.min(max, Math.max(min, val))
