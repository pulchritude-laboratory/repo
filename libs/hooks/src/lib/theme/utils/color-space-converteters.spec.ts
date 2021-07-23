import { colorSpaceConverter as c } from './color-space-converters'

test('HexaToRgba - red', () => {
  const [r, g, b, a] = c.HexaToRgba('#ff0000')

  expect(r).toBe(255)
  expect(g).toBe(0)
  expect(b).toBe(0)
  expect(a).toBe(1)
})

test('HexaToRgba - blue, transparent', () => {
  const [r, g, b, a] = c.HexaToRgba('#0000ff00')

  expect(r).toBe(0)
  expect(g).toBe(0)
  expect(b).toBe(255)
  expect(a).toBe(0)
})

test('HexaToRgba - random color', () => {
  const [r, g, b, a] = c.HexaToRgba('#B66550')

  expect(r).toBe(182)
  expect(g).toBe(101)
  expect(b).toBe(80)
  expect(a).toBe(1)
})

test('RgbaToHexa - random color', () => {
  const hexa = c.RgbaToHexa([182, 101, 80, 1])

  expect(hexa).toBe('#b66550ff')
})

test('RgbaToHsla - random color', () => {
  const [h, s, l, a] = c.RgbaToHsla([182, 101, 80, 0.27])

  expect(h).toBe(12)
  expect(s).toBe(41)
  expect(l).toBe(51)
  expect(a).toBe(0.27)
})

test('HexaToHsla - random color', () => {
  const [h, s, l, a] = c.HexaToHsla('#B66550')

  expect(h).toBe(12)
  expect(s).toBe(41)
  expect(l).toBe(51)
  expect(a).toBe(1)
})

test('HexaToHsla - random color', () => {
  const [r, g, b, a] = c.HslaToRgba([12, 41, 51, 1])

  expect(r).toBe(181)
  expect(g).toBe(99)
  expect(b).toBe(79)
  expect(a).toBe(1)
})

test('HexaToHsla - random color (close enough)', () => {
  const hexa = c.HslaToHexa([12, 41, 51, 1])

  expect(hexa).toBe('#b5634fff')
})
