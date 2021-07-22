import { ReactNode } from 'react'
import $ from './AntStyleOverride.module.scss'

/* eslint-disable-next-line */
export interface AntStyleOverrideProps {
  children: ReactNode
}

export function AntStyleOverride(props: AntStyleOverrideProps) {
  return <div className={$.override}></div>
}

export default AntStyleOverride
