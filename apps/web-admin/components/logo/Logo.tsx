import { FC } from 'react'
// import { Styler, stylerFactory } from 'utils/styling/styler'
import styles from './Logo.module.scss'
import { LogoCompact } from './variants/LogoCompact'
import { LogoFull, LogoFullProps } from './variants/LogoFull'

// const styler = stylerFactory(styles)

interface LogoProps extends LogoFullProps {
  dotColor?: string
  mode: 'compact' | 'full' | 'full-large'
}
export const Logo: FC<LogoProps> = ({ mode, dotColor, textColor }) => {
  return (
    <div className={`${styles.logo} `}>
      {mode === 'compact' && <LogoCompact dotColor={dotColor} />}
      {mode === 'full' && <LogoFull textColor={textColor} />}
      {mode === 'full-large' && (
        <LogoFull style={{ height: '4rem', marginTop: 0 }} textColor={textColor} />
      )}
    </div>
  )
}
