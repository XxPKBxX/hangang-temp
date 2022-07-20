import React, { useEffect, useState, useRef } from 'react'
import { useTempContext } from '../../../contexts/temp'

import { HangangBorder, HangangTemp, HangangWrapper, HelpTextWrapper, InfoWrapper, Temp, Where, Button, Watermark } from './style'

const HangangData = (): JSX.Element => {
  const {
    data,
    settings: {
      current: [current, setCurrent]
    }
  } = useTempContext()

  const change = (): void => {
    setCurrent(
      current + 1 >= data.length
      ? 0 : current + 1
    )
  }

  const [isCapturing, setIsCapturing] = useState<boolean>(false)
  const ref = useRef(null)
  const screenshot = (): void => {
    if (!isCapturing) setIsCapturing(true)
  }

  const exportImage = useRef<Function>(() => null)
  useEffect(() => {
    if (!isCapturing || exportImage.current === null) return

    exportImage.current(ref, {
      backgroundColor: '#000000'
    })
    .then(() => setIsCapturing(false))
  }, [isCapturing])

  useEffect(() => {
    import('react-component-export-image').then((module) => {
      exportImage.current = module.exportComponentAsPNG
    })
  }, [])

  return (
    <HangangWrapper>
      <InfoWrapper
      ref={ref}
      capturing={isCapturing}>
        <HangangBorder>
          <HangangTemp width={
            Number(data[current].W_TEMP) + 10 / 50 * 100
          }>
            <Watermark>한강 수온 측정기</Watermark>
            <Temp>
              <span key={current}>
                {`${data[current].W_TEMP}°C`}
              </span>
            </Temp>
            <Where
            onClick={change}
            aria-label={'강 위치 변경'}>{data[current].SITE_ID}</Where>
          </HangangTemp>
        </HangangBorder>
      </InfoWrapper>
      <HelpTextWrapper>
        <span>강 이름을 클릭하여 위치를 바꿀 수 있어요.</span>
        <Button
        onClick={screenshot}
        disabled={isCapturing}>캡처</Button>
      </HelpTextWrapper>
    </HangangWrapper>
  )
}

export default HangangData