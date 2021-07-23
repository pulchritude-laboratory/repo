import { HEXAColor, RGBAColor, HSLAColor } from '../theme'

export const colorSpaceConverter = {
  HexaToRgba,
  HexaToHsla,
  RgbaToHexa,
  RgbaToHsla,
  HslaToRgba,
  HslaToHexa
}

function HexaToRgba(hexa: HEXAColor): RGBAColor {
  let r: string | number = 0
  let g: string | number = 0
  let b: string | number = 0
  let a: string | number = 255

  if (hexa.length === 4) {
    r = '0x' + hexa[1] + hexa[1]
    g = '0x' + hexa[2] + hexa[2]
    b = '0x' + hexa[3] + hexa[3]
  } else if (hexa.length === 7) {
    r = '0x' + hexa[1] + hexa[2]
    g = '0x' + hexa[3] + hexa[4]
    b = '0x' + hexa[5] + hexa[6]
  } else if (hexa.length === 9) {
    r = '0x' + hexa[1] + hexa[2]
    g = '0x' + hexa[3] + hexa[4]
    b = '0x' + hexa[5] + hexa[6]
    a = '0x' + hexa[7] + hexa[8]
  }

  r = parseInt(Number(r).toString(), 10)
  g = parseInt(Number(g).toString(), 10)
  b = parseInt(Number(b).toString(), 10)
  a = parseInt(Number(a).toString(), 10) / 255

  return [r, g, b, a]
}

function RgbaToHexa(rgba: RGBAColor): HEXAColor {
  let r = (+rgba[0]).toString(16),
    g = (+rgba[1]).toString(16),
    b = (+rgba[2]).toString(16),
    a = Math.round(+rgba[3] * 255).toString(16)

  if (r.length === 1) r = '0' + r
  if (g.length === 1) g = '0' + g
  if (b.length === 1) b = '0' + b
  if (a.length === 1) a = '0' + a

  return `#${r}${g}${b}${a}`
}

function RgbaToHsla(rgba: RGBAColor): HSLAColor {
  let [r, g, b] = rgba
  const [, , , a] = rgba

  r /= 255
  g /= 255
  b /= 255

  const cMin = Math.min(r, g, b)
  const cMax = Math.max(r, g, b)
  const delta = cMax - cMin

  let h = 0
  let s = 0
  let l = 0

  if (delta === 0) h = 0
  else if (cMax === r) h = ((g - b) / delta) % 6
  else if (cMax === g) h = (b - r) / delta + 2
  else h = (r - g) / delta + 4

  h = Math.round(h * 60)

  if (h < 0) h += 360

  l = (cMax + cMin) / 2

  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))

  s = +(s * 100).toFixed(1)
  l = +(l * 100).toFixed(1)

  h = Math.round(h)
  s = Math.round(s)
  l = Math.round(l)

  return [h, s, l, a]
}

function HexaToHsla(hexa: HEXAColor): HSLAColor {
  return RgbaToHsla(HexaToRgba(hexa))
}

function HslaToRgba(hsla: HSLAColor): RGBAColor {
  let [, s, l] = hsla
  const [h, , , a] = hsla

  s /= 100
  l /= 100

  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = l - c / 2

  let r = 0
  let g = 0
  let b = 0

  if (0 <= h && h < 60) {
    r = c
    g = x
    b = 0
  } else if (60 <= h && h < 120) {
    r = x
    g = c
    b = 0
  } else if (120 <= h && h < 180) {
    r = 0
    g = c
    b = x
  } else if (180 <= h && h < 240) {
    r = 0
    g = x
    b = c
  } else if (240 <= h && h < 300) {
    r = x
    g = 0
    b = c
  } else if (300 <= h && h < 360) {
    r = c
    g = 0
    b = x
  }

  r = Math.round((r + m) * 255)
  g = Math.round((g + m) * 255)
  b = Math.round((b + m) * 255)

  return [r, g, b, a]
}

function HslaToHexa(hsla: HSLAColor): HEXAColor {
  return RgbaToHexa(HslaToRgba(hsla))
}
