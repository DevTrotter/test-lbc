import React from 'react'
import { Message } from '../Message/Message';
import StyledListMessage from './StyledListMessage';

export const ListMessage = ({data}) => {
  return (
    <StyledListMessage>
      {
        data.map(message => <Message key={message.id} data={message}/>)
      }
    </StyledListMessage>
  )
}
