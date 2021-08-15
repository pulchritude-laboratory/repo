import { FC } from 'react'
// import { Styler, stylerFactory } from 'utils/styling/styler'
import styles from './Logo.module.scss'
import { LogoCompact } from './variants/LogoCompact'
import { LogoFull } from './variants/LogoFull'

// const styler = stylerFactory(styles)

interface LogoProps {
  dotColor?: string
  mode: 'compact' | 'full' | 'full-large'
  // styleMode?: Styler<'compact' | 'center'>
}
export const Logo: FC<LogoProps> = ({ mode, dotColor }) => {
  return (
    <div className={`${styles.logo} `}>
      {mode === 'compact' && <LogoCompact dotColor={dotColor} />}
      {mode === 'full' && <LogoFull />}
      {mode === 'full-large' && <LogoFull style={{ height: '4rem', marginTop: 0 }} />}
    </div>
  )
}
