import React from 'react'
import StyledCardContact from './StyledCardContact'

export const CardContact = ({id, recipientId, recipientNickname, senderId, senderNickname, lastMessageTimestamp}) => {
  return (
    <StyledCardContact>
      <div/>
      <img src="/assets/avatar.svg" alt=""/>
      <h1>{senderNickname}</h1>
      <p>{senderId}</p>
      <span>{lastMessageTimestamp}</span>
    </StyledCardContact>
  )
}
