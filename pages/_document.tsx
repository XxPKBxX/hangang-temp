import { Html, Head, Main, NextScript } from 'next/document'

const MyDocument = (): JSX.Element => (
  <Html lang={'ko'}>
    <Head>
      <link
      rel={'icon'}
      type={'image/svg+xml'}
      href={'/favicon.svg'} />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default MyDocument