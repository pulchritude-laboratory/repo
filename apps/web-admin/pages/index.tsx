import styles from './index.module.scss'
import { Button, ThemeSwitcher } from '@repo/ui-antd'
import { useState } from 'react'
import Layout from '../components/layout/layout'
export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */

  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h2 className="sss">Resources &amp; Tools</h2>
      <div style={{ height: '5rem' }}>
        <span style={{ padding: '1rem' }}>
          <Button type="primary" title="test" onClick={() => setCounter(v => v + 1)} />
        </span>
        <span style={{ margin: '3rem' }}>
          <Button type="default" title="test" onClick={() => setCounter(v => v + 1)} />
        </span>
      </div>

      <ThemeSwitcher />
    </div>
  )
}

export default Index
