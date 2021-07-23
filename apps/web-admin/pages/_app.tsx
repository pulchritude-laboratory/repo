import { AppProps } from 'next/app'
import Head from 'next/head'
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg'
import './styles.css'

import 'antd/dist/antd.css'
import '../../../libs/ui-antd/src/style/index.scss'
import '../themes/scrollbar.scss'

import Layout from '../components/layout/layout'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default CustomApp
