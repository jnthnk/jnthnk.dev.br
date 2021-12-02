import { Html, Head, Main, NextScript } from 'next/document'
import type { FC } from 'react'

const Document: FC = () => (
  <Html className='font-light font-dm tracking-wide md:text-[17px] xl:text-[18px]'>
    <Head />
    <body className='min-w-[320px] text-gray-100 bg-gray-900'>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
