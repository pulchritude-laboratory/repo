import { NP } from '../../utils/types'
import { wrapPrivateLayout } from '../../components/layout/private/private-layout'
import { useState } from 'react'
import { Button, ThemeSwitcher, PageFrame } from '@repo/ui-antd'
import { LoremIpsum } from '../../components/ipsum/lorem-ipsum'

const Page: NP = () => {
  return (
    <PageFrame header={{ title: 'Settings' }}>
      <LoremIpsum />

      <h2 className="sss">Resources &amp; Tools fasdfsdaf </h2>
      <div style={{ height: '5rem' }}>
        <span style={{ padding: '1rem' }}>
          <Button type="primary" title="primary" />
        </span>
        <span style={{ margin: '3rem' }}>
          <Button type="secondary" title="secondary" />
        </span>
        <span style={{ margin: '3rem' }}>
          <Button type="default" title="default" />
        </span>
        <span style={{ margin: '3rem' }}>
          <Button type="ghost" title="ghost" />
        </span>
        <span style={{ margin: '3rem' }}>
          <Button type="danger" title="danger" />
        </span>
        <span style={{ margin: '3rem' }}>
          <Button type="warning" title="warning" />
        </span>
        <span style={{ margin: '3rem' }}>
          <Button type="link" title="link" />
        </span>
      </div>
      <div style={{ height: '5rem' }}>
        <span style={{ padding: '1rem' }}>
          <Button disabled type="primary" title="primary" />
        </span>
        <span style={{ margin: '3rem' }}>
          <Button disabled type="secondary" title="secondary" />
        </span>
        <span style={{ margin: '3rem' }}>
          <Button disabled type="default" title="default" />
        </span>
        <span style={{ margin: '3rem' }}>
          <Button disabled type="ghost" title="ghost" />
        </span>
        <span style={{ margin: '3rem' }}>
          <Button disabled type="danger" title="danger" />
        </span>
        <span style={{ margin: '3rem' }}>
          <Button disabled type="warning" title="warning" />
        </span>
        <span style={{ margin: '3rem' }}>
          <Button disabled type="link" title="link" />
        </span>
      </div>

      <ThemeSwitcher />
    </PageFrame>
  )
}

Page.getLayout = wrapPrivateLayout

export default Page
