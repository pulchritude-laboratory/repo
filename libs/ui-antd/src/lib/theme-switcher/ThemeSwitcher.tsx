import './ThemeSwitcher.module.css'
import { useTheme, Theme } from '@repo/hooks'
import { Button } from '../button/Button'
import { Radio } from 'antd'
import { useCallback, useMemo } from 'react'

interface BrightnessOptions {
  value: Theme.ColorMode
  label: string
}

interface ColorOptions {
  value: 'blue' | 'green' | 'red' | 'magenta'
  label: string
}

/* eslint-disable-next-line */
export interface ThemeSwitcherProps {}

export function ThemeSwitcher(props: ThemeSwitcherProps) {
  const { setTheme, fabricateTheme } = useTheme()

  const brightnessOptions = useMemo<BrightnessOptions[]>(
    () => [
      { value: 'light', label: 'Light' },
      { value: 'dark', label: 'Dark' },
      { value: 'black', label: 'Black' }
    ],
    []
  )

  const colorOptions = useMemo<ColorOptions[]>(
    () => [
      { value: 'red', label: 'Red' },
      { value: 'green', label: 'Green' },
      { value: 'blue', label: 'Blue' }
    ],
    []
  )

  const handleModeChange = useCallback(
    (mode: Theme.ColorMode) => {
      if (mode === 'black') {
        setTheme({ colors: [['--color-background-lvl-0', '#000000']] })
      } else if (mode === 'dark') {
        setTheme({ colors: [['--color-background-lvl-0', '#444444']] })
      } else {
        setTheme({ colors: [['--color-background-lvl-0', '#bbbbbb']] })
      }
    },
    [setTheme]
  )

  const handleColorChange = useCallback(
    (mode: ColorOptions['value']) => {
      if (mode === 'red') {
        fabricateTheme({ factoryColors: { primary: '#aa0000' } })
      } else if (mode === 'green') {
        fabricateTheme({ factoryColors: { primary: '#00aa00' } })
      } else if (mode === 'blue') {
        fabricateTheme({ factoryColors: { primary: '#0000aa' } })
      }
    },
    [setTheme]
  )

  return (
    <>
      <div>
        <Radio.Group
          defaultValue={brightnessOptions[0].value}
          buttonStyle="solid"
          onChange={e => handleModeChange(e.target.value)}
        >
          {brightnessOptions.map(op => (
            <Radio.Button value={op.value}>{op.label}</Radio.Button>
          ))}
        </Radio.Group>
      </div>
      <div>
        <Radio.Group
          defaultValue={colorOptions[0].value}
          buttonStyle="solid"
          onChange={e => handleColorChange(e.target.value)}
        >
          {colorOptions.map(op => (
            <Radio.Button value={op.value}>{op.label}</Radio.Button>
          ))}
        </Radio.Group>
      </div>
      <div style={{ background: 'var(--color-primary-baseqq)' }}>
        Theme Switcher
        <Button onClick={() => setTheme({ colors: [['--color-primary-base', '#ff0000']] })}>
          Red
        </Button>
        <Button onClick={() => setTheme({ colors: [['--color-primary-base', '#00ff00']] })}>
          Green
        </Button>
        <Button onClick={() => setTheme({ colors: [['--color-primary-base', '#0000ff']] })}>
          Blue
        </Button>
        <Button type="primary">Dumb</Button>
      </div>
    </>
  )
}

export default ThemeSwitcher
