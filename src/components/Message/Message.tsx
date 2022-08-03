import React, { useEffect, useState } from 'react'
import StyledMessage from './StyledMessage';
import { useSelector } from 'react-redux';

export const Message = ({data}) => {
  const[isUser, setIsUser ] = useState(null)
  const { usersId } = useSelector(state => state.messageReducer)
  const timestamp = new Date(data.timestamp)
  const date = `${timestamp.getDate()}/${timestamp.getMonth() + 1}/${timestamp.getFullYear()}`
  useEffect(() => {
    if(usersId === data.authorId){
      setIsUser(true)
    }else{
      setIsUser(false)
    }
  })
  return (
    <StyledMessage isUser={isUser}>
      <div className='container-message'>
        <p>{data.body}</p>
        <span>{date}</span>
      </div>
    </StyledMessage>
  )
}
