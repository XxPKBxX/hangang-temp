import React from 'react'
import Head from 'next/head'

interface HeadProps {
  title?: string
}

const HeadData = ({ title }: HeadProps) => (
  <Head>
    <title>{`한강 수온 측정기${title ? `- ${title}` : ''}`}</title>
    <meta property={'og:title'} content={'한강 수온 측정기'} />
    <meta property={'og:description'} content={'한강 수온 측정기는 서울시에서 제공하는 한강 수온 데이터를 이용하여 현재 한강의 수온이 어떤지를 표시하는 사이트입니다.'} />
    <meta property={'og:site_name'} content={'한강 수온 측정기'} />
  </Head>
)

export default HeadData