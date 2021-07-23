import styles from './index.module.scss'
import { Button, ThemeSwitcher } from '@repo/ui-antd'
import { useTheme } from '@repo/hooks'
import { useState } from 'react'
import Layout from '../components/layout/layout'
export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  const { setTheme } = useTheme()
  console.log('ddd', styles)

  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h2 className="sss">Resources &amp; Tools</h2>
      <Button type="primary" title="test" onClick={() => setCounter(v => v + 1)} />
      <div id="counter">{counter}</div>
      <Button
        type="primary"
        title="theme"
        onClick={() => setTheme({ colors: [['--color-primary-base', '#00ff00']] })}
      />
      <Button
        type="primary"
        title="theme 2"
        onClick={() => setTheme({ colors: [['--color-primary-base', '#0000ff']] })}
      />
      <ThemeSwitcher />
    </div>
  )
}

export default Index
