import React from 'react'
import StyledCardContact from './StyledCardContact'

export const CardContact = ({id, recipientId, recipientNickname, senderId, senderNickname, lastMessageTimestamp}) => {
  let date = new Date(lastMessageTimestamp);
  const messageDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  return (
    <StyledCardContact>
      <div className='contact-container'>
        <img src="/assets/avatar.svg" alt=""/>
        <div className='name-container'>
          <h1>{recipientNickname}</h1>
          <p>{senderId}</p>
        </div>
      </div>
      <span>{messageDate}</span>
      <div className='custom-bar'/>
    </StyledCardContact>
  )
}
