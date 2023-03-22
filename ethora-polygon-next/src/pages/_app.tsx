import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/layout'

import Web3Provider from '../context/Web3Provider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Web3Provider>
        <Component {...pageProps} />
      </Web3Provider>
    </Layout>
  )
}
