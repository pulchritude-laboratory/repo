import { NP } from '../../utils/types'
import { wrapPrivateLayout } from '../../components/layout/private/private-layout'
import { useState } from 'react'
import { Button, ThemeSwitcher, PageFrame } from '@repo/ui-antd'

const Page: NP = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */

  const [counter, setCounter] = useState(0)
  return (
    <PageFrame header={{ title: 'Settings' }}>
      <h2 className="sss">Resources &amp; Tools fasdfsdaf </h2>
      <div style={{ height: '5rem' }}>
        <span style={{ padding: '1rem' }}>
          <Button type="primary" title="primary" onClick={() => setCounter(v => v + 1)} />
        </span>
        <span style={{ margin: '3rem' }}>
          <Button type="secondary" title="secondary" onClick={() => setCounter(v => v + 1)} />
        </span>
        <span style={{ margin: '3rem' }}>
          <Button type="default" title="default" onClick={() => setCounter(v => v + 1)} />
        </span>
        <span style={{ margin: '3rem' }}>
          <Button type="ghost" title="ghost" onClick={() => setCounter(v => v + 1)} />
        </span>
        <span style={{ margin: '3rem' }}>
          <Button type="danger" title="danger" onClick={() => setCounter(v => v + 1)} />
        </span>
        <span style={{ margin: '3rem' }}>
          <Button type="warning" title="warning" onClick={() => setCounter(v => v + 1)} />
        </span>
        <span style={{ margin: '3rem' }}>
          <Button type="link" title="link" onClick={() => setCounter(v => v + 1)} />
        </span>
      </div>
      <div style={{ height: '5rem' }}>
        <span style={{ padding: '1rem' }}>
          <Button disabled type="primary" title="primary" onClick={() => setCounter(v => v + 1)} />
        </span>
        <span style={{ margin: '3rem' }}>
          <Button
            disabled
            type="secondary"
            title="secondary"
            onClick={() => setCounter(v => v + 1)}
          />
        </span>
        <span style={{ margin: '3rem' }}>
          <Button disabled type="default" title="default" onClick={() => setCounter(v => v + 1)} />
        </span>
        <span style={{ margin: '3rem' }}>
          <Button disabled type="ghost" title="ghost" onClick={() => setCounter(v => v + 1)} />
        </span>
        <span style={{ margin: '3rem' }}>
          <Button disabled type="danger" title="danger" onClick={() => setCounter(v => v + 1)} />
        </span>
        <span style={{ margin: '3rem' }}>
          <Button disabled type="warning" title="warning" onClick={() => setCounter(v => v + 1)} />
        </span>
        <span style={{ margin: '3rem' }}>
          <Button disabled type="link" title="link" onClick={() => setCounter(v => v + 1)} />
        </span>
      </div>

      <ThemeSwitcher />
    </PageFrame>
  )
}

Page.getLayout = wrapPrivateLayout

export default Page
