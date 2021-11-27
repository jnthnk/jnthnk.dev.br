import { Html, Head, Main, NextScript } from 'next/document'
import type { FC } from 'react'

const Document: FC = () => (
  <Html className='tracking-wide md:text-[17px] xl:text-[18px] font-light font-dm'>
    <Head />
    <body className='min-w-[320px]'>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
