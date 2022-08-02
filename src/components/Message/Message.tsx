import React from 'react'
import StyledMessage from './StyledMessage';

export const Message = ({data}) => {
  return (
    <StyledMessage>
      <p>{data.body}</p>
      <span>{data.timestamp}</span>
    </StyledMessage>
  )
}
