import { AppProps } from 'next/app'
import Head from 'next/head'
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg'
import './styles.css'

import 'antd/dist/antd.css'
import '../../../libs/ui-antd/src/style/index.scss'
import '../themes/scrollbar.scss'

import Layout from '../components/layout/layout'
import { Background } from '@repo/ui-antd'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app">
      <Background>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Background>
    </div>
  )
}

export default CustomApp
