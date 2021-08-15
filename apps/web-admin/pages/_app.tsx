import { AppProps } from 'next/app'
import Head from 'next/head'
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg'
import './styles.css'

import 'antd/dist/antd.css'
import '../../../libs/ui-antd/src/style/index.scss'
import '../themes/scrollbar.scss'

// import Layout from '../components/layout/layout'
import { Background } from '@repo/ui-antd'
import { useEffect } from 'react'
import { createTheme, updateThemeCssVariables } from '@repo/utils/theme-maker'
import { NP } from '../utils/types'

function CustomApp({ Component, pageProps }: AppProps) {
  const layout = (Component as NP).getLayout || (page => page)

  useEffect(() => {
    updateThemeCssVariables(
      createTheme({
        prefix: 'wa',
        primary: '#058d64',
        background: '#ffffff',
        // background: '#777',
        accent: '#058d64',
        borderRadius: 0.6
      })
    )
  }, [])

  return (
    <div className="app">
      <Background>{layout(<Component {...pageProps} />)}</Background>
    </div>
  )
}

export default CustomApp
