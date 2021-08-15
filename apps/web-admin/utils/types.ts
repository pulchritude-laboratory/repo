import { FC } from 'react'
import { ReactNode, VFC } from 'react'

export type NP = VFC & { getLayout?: (page: JSX.Element) => JSX.Element }
