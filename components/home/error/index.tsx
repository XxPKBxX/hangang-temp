import React from 'react'

import { ErrorWrapper, ErrorMessage, Title, Message } from './style'

interface ErrorProps {
  message: string
}

const ErrorWindow = ({ message }: ErrorProps): JSX.Element => (
  <ErrorWrapper>
    <ErrorMessage>
      <Title>오류가 발생하였습니다.</Title>
      <Message>
        <span>{message}</span>
      </Message>
    </ErrorMessage>
  </ErrorWrapper>
)

export default ErrorWindow