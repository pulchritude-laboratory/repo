import './ThemeSwitcher.module.css'
import {
  createPalette,
  createTheme,
  ThemeSeed,
  updateThemeCssVariables
} from '@repo/utils/theme-maker'
import { Button } from '../button/Button'
import { Radio, Slider } from 'antd'
import { useCallback, useEffect, useMemo, useState } from 'react'

interface ColorOptions {
  value: 'blue' | 'green' | 'red' | 'magenta'
  label: string
}

const mainPalette = createPalette([
  'red',
  'orange',
  'yellow',
  'greenYellow',
  'green',
  'turquoise',
  'blue',
  'mediumSlateBlue',
  'violet'
])
const successPalette = createPalette(['#00e772', '#04e700', '#41a900'], 7)
const warningPalette = createPalette(['#f1ff1f', '#ebce00', 'e69c00'], 7)
const dangerPalette = createPalette(['#e36206', '#ed1414', '#c20000'], 7)
const grayPalette = createPalette(['#000000', '#ffffff'], 15)
// const palette2 = createPalette('rgb')

/* eslint-disable-next-line */
export interface ThemeSwitcherProps {}

export function ThemeSwitcher(props: ThemeSwitcherProps) {
  // const { setTheme, fabricateTheme, createColorPalette } = useTheme()

  const [themeSeed, setThemeSeed] = useState<ThemeSeed>({ prefix: 'wa' })

  useEffect(() => {
    const theme = createTheme(themeSeed)
    updateThemeCssVariables(theme)
  }, [themeSeed])

  // useEffect(() => {
  //   c()
  // }, [createColorPalette])

  const colorOptions = useMemo<ColorOptions[]>(
    () => [
      { value: 'red', label: 'Red' },
      { value: 'green', label: 'Green' },
      { value: 'blue', label: 'Blue' }
    ],
    []
  )

  // const handleModeChange = useCallback(
  //   (mode: Theme.ColorMode) => {
  //     // if (mode === 'black') {
  //     //   setTheme({ colors: [['--color-background-lvl-0', '#000000']] })
  //     // } else if (mode === 'dark') {
  //     //   setTheme({ colors: [['--color-background-lvl-0', '#444444']] })
  //     // } else {
  //     //   setTheme({ colors: [['--color-background-lvl-0', '#bbbbbb']] })
  //     // }
  //   },
  //   [setTheme]
  // )

  // const handleColorChange = useCallback(
  //   (mode: ColorOptions['value']) => {
  //     console.log('cxdsd', mode)

  //     if (mode === 'red') {
  //       fabricateTheme({ primary: '#aa0000' })
  //     } else if (mode === 'green') {
  //       fabricateTheme({ primary: '#00aa00' })
  //     } else if (mode === 'blue') {
  //       fabricateTheme({ primary: '#0000aa' })
  //     }
  //   },
  //   [fabricateTheme]
  // )

  return (
    <>
      <div></div>
      Primary
      <div>
        <Radio.Group
          buttonStyle="solid"
          onChange={e => {
            setThemeSeed(s => ({ ...s, primary: e.target.value }))
            console.log('vaLU', e.target.value)
          }}
        >
          {mainPalette.map(p => (
            <Radio.Button style={{ background: p }} value={p}>
              {p}
            </Radio.Button>
          ))}
        </Radio.Group>
      </div>
      Secondary
      <div>
        <Radio.Group
          buttonStyle="solid"
          onChange={e => {
            setThemeSeed(s => ({ ...s, secondary: e.target.value }))
          }}
        >
          {mainPalette.map(p => (
            <Radio.Button style={{ background: p }} value={p}>
              {p}
            </Radio.Button>
          ))}
        </Radio.Group>
      </div>
      Success
      <div>
        <Radio.Group
          buttonStyle="solid"
          onChange={e => {
            setThemeSeed(s => ({ ...s, success: e.target.value }))
          }}
        >
          {successPalette.map(p => (
            <Radio.Button style={{ background: p }} value={p}>
              {p}
            </Radio.Button>
          ))}
        </Radio.Group>
      </div>
      Warning
      <div>
        <Radio.Group
          buttonStyle="solid"
          onChange={e => {
            setThemeSeed(s => ({ ...s, warning: e.target.value }))
          }}
        >
          {warningPalette.map(p => (
            <Radio.Button style={{ background: p }} value={p}>
              {p}
            </Radio.Button>
          ))}
        </Radio.Group>
      </div>
      Danger
      <div>
        <Radio.Group
          buttonStyle="solid"
          onChange={e => {
            setThemeSeed(s => ({ ...s, danger: e.target.value }))
          }}
        >
          {dangerPalette.map(p => (
            <Radio.Button style={{ background: p }} value={p}>
              {p}
            </Radio.Button>
          ))}
        </Radio.Group>
      </div>
      Default
      <div>
        <Radio.Group
          buttonStyle="solid"
          onChange={e => {
            setThemeSeed(s => ({ ...s, default: e.target.value }))
          }}
        >
          {grayPalette.map(p => (
            <Radio.Button style={{ background: p }} value={p}>
              {p}
            </Radio.Button>
          ))}
        </Radio.Group>
      </div>
      Disabled
      <div>
        <Radio.Group
          buttonStyle="solid"
          onChange={e => {
            setThemeSeed(s => ({ ...s, disabled: e.target.value }))
          }}
        >
          {grayPalette.map(p => (
            <Radio.Button style={{ background: p }} value={p}>
              {p}
            </Radio.Button>
          ))}
        </Radio.Group>
      </div>
      Background
      <div>
        <Radio.Group
          buttonStyle="solid"
          onChange={e => {
            setThemeSeed(s => ({ ...s, background: e.target.value }))
          }}
        >
          {[...grayPalette, ...mainPalette].map(p => (
            <Radio.Button style={{ background: p }} value={p}>
              {p}
            </Radio.Button>
          ))}
        </Radio.Group>
      </div>
      Radius
      <div>
        <Radio.Group
          buttonStyle="solid"
          onChange={e => {
            setThemeSeed(s => ({ ...s, borderRadius: e.target.value }))
          }}
        >
          {[0, 0.1, 0.25, 0.3, 0.4, 0.5, 0.6, 0.75, 1].map(p => (
            <Radio.Button style={{ margin: '5px', borderRadius: p + 'rem' }} value={p}>
              {p}
            </Radio.Button>
          ))}
        </Radio.Group>
      </div>
      Light Angle
      <div>
        <Radio.Group
          buttonStyle="solid"
          onChange={e => {
            setThemeSeed(s => ({ ...s, lightAngle: e.target.value }))
          }}
        >
          {[0, 10, 20, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 210, 225].map(p => (
            <Radio.Button
              style={{ margin: '5px', background: `linear-gradient(${p}deg, #66ff66, #007700)` }}
              value={p}
            >
              {p}
            </Radio.Button>
          ))}
        </Radio.Group>
      </div>
    </>
  )
}

export default ThemeSwitcher
