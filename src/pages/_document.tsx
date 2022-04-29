import { Html, Head, Main, NextScript } from 'next/document'
import type { FC } from 'react'

const Document: FC = () => (
  <Html className='font-dm font-light tracking-wide md:text-[17px] xl:text-[18px]'>
    <Head />
    <body className='min-w-[320px] bg-primary-900 text-gray-100'>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
