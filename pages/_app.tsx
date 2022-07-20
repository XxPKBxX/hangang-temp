import HeadData from '../components/head'

import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <HeadData />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
