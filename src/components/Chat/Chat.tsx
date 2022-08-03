import React, { useEffect } from 'react'
import StyledChat from './StyledChat'
import { IoIosArrowBack } from 'react-icons/io';
import { ListMessage } from '../ListMessage/ListMessage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages, fetchConversations } from '../../redux/action/messageActions';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MessageSender } from '../MessageSender/MessageSender';

export const Chat = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { conversations, messages} = useSelector(state => state.messageReducer)
  const id = Number(router.query.slug)
  const timestamp = new Date(conversations[id - 1]?.lastMessageTimestamp)
  const date = `${timestamp.getDate()}/${timestamp.getMonth() + 1}/${timestamp.getFullYear()}`;
  useEffect(() => {
    if(conversations.length === 0){
      dispatch(fetchConversations())
    }
    dispatch(fetchMessages(id))
  },[conversations])
  return (
    <StyledChat>
      <div className='header-chat'>
        <Link href="/">
          <IoIosArrowBack/>
        </Link>
        <img src="/assets/avatar.svg" alt=""/>
        <div className='text-container'>
          <h1>{conversations[id - 1]?.recipientNickname}</h1>
          <span>{date}</span>
        </div>
      </div>
      <ListMessage data={messages}/>
      <MessageSender id={id}/>
    </StyledChat>
  )
}
