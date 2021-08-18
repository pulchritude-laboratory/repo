import { FC } from 'react'
import { ReactNode, VFC } from 'react'

export type NP = VFC & {
  getLayout?: (page: JSX.Element, other?: { header: ReactNode }) => JSX.Element
  getHeader?: () => JSX.Element
}
