import React, { useState } from 'react'
import StyledMessageSender from './StyledMessageSender';
import { IoSend } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { addNewMessage } from '../../redux/action/messageActions';
import { Message } from '../../types/message';

export const MessageSender = ({id}) => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState("")
  const { usersId } = useSelector(state => state.messageReducer)
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      conversationId: id,
      authorId: usersId,
      body: inputValue,
      timestamp: Date.now(),
    }
    dispatch(addNewMessage(newMessage))
    setInputValue("")
  }
  return (
    <StyledMessageSender onSubmit={(e) => handleSubmit(e)}>
      <input type="text" value={inputValue} onChange={handleChange} placeholder="Messages..."/>
      <button type='submit'><IoSend/></button>
    </StyledMessageSender>
  )
}
