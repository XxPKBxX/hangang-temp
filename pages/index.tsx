import { useState } from 'react'
import { TempContext, HangangTempRows, DefaultValueData } from '../contexts/temp'
import type { GetServerSideProps, NextPage } from 'next'

import ErrorWindow from '../components/home/error'
import HangangData from '../components/home/hangang'

interface HangangAPIResponse {
  WPOSInformationTime: {
    list_total_count: number
    RESULT: {
      CODE: string,
      MESSAGE: string
    }
    row: HangangTempRows[]
  }
}

export const getServerSideProps: GetServerSideProps = async () => {
  const url = `http://openapi.seoul.go.kr:8088/${process.env.SEOUL_API_KEY}/json/WPOSInformationTime/1/5/`

  const response = await fetch(url)
  const data: HangangAPIResponse = await response.json().catch(() => null)

  return {
    props: {
      data
    }
  }
}

const Home: NextPage<{ data: HangangAPIResponse }> = ({ data }) => {
  const [current, setCurrent] = useState<number>(0)
  
  if (data === null || data.WPOSInformationTime.RESULT.CODE !== 'INFO-000') return <ErrorWindow message={'정보를 불러오는 데 실패하였습니다.\n잠시 후에 다시 시도하여 주세요.'} />

  const value: DefaultValueData = {
    data: data.WPOSInformationTime.row,
    settings: {
      current: [current, setCurrent]
    }
  }

  return (
    <TempContext.Provider value={value}>
      <HangangData />
    </TempContext.Provider>
  )
}

export default Home