import React from 'react'
import StyledCardContact from './StyledCardContact'
import { useRouter } from 'next/router';

export const CardContact = ({id, recipientId, recipientNickname, lastMessageTimestamp}) => {
  const router = useRouter()
  let date = new Date(lastMessageTimestamp);
  const messageDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  const handleClick = () => {
    router.push(`/conversation/${id}`)
  }

  return (
    <StyledCardContact onClick={handleClick}>
      <div className='contact-container'>
        <img src="/assets/avatar.svg" alt=""/>
        <div className='name-container'>
          <h1>{recipientNickname}</h1>
          <p>{recipientId}</p>
        </div>
      </div>
      <span>{messageDate}</span>
      <div className='custom-bar'/>
    </StyledCardContact>
  )
}
