import React from 'react'
import StyledChat from './StyledChat'
import { IoIosArrowBack } from 'react-icons/io';
import { ListMessage } from '../ListMessage/ListMessage';

export const Chat = () => {
  const dataConv = [
    {
      "id": 1,
      "recipientId": 3,
      "recipientNickname": "Patrick",
      "senderId": 1,
      "senderNickname": "Thibaut",
      "lastMessageTimestamp": 1625637849
    },
    {
      "id": 2,
      "recipientId": 3,
      "recipientNickname": "Patrick",
      "senderId": 1,
      "senderNickname": "Thibaut",
      "lastMessageTimestamp": 1620284667
    },
    {
      "id": 3,
      "recipientId": 3,
      "recipientNickname": "Patrick",
      "senderId": 4,
      "senderNickname": "Elodie",
      "lastMessageTimestamp": 1625648667
    }
  ]

  const dataChat = [
    {
      "id": 1,
      "conversationId": 1,
      "timestamp": 1625637849,
      "authorId": 1,
      "body": "Bonjour c'est le premier message de la première conversation"
    },
    {
      "id": 2,
      "conversationId": 1,
      "timestamp": 1625637867,
      "authorId": 1,
      "body": "Bonjour c'est le second message de la première conversation"
    },
    {
      "id": 3,
      "conversationId": 1,
      "timestamp": 1625648667,
      "authorId": 2,
      "body": "Bonjour c'est le troisième message de la première conversation"
    },
    {
      "id": 4,
      "conversationId": 2,
      "timestamp": 1620284667,
      "authorId": 2,
      "body": "Bonjour c'est le premier message de la seconde conversation"
    }
  ]
  return (
    <StyledChat>
      <div className='header-Chat'>
        <IoIosArrowBack/>
        <img src="/assets/avatar.svg" alt=""/>
        <h1>{dataConv[0].senderNickname}</h1>
        <span>{dataConv[0].lastMessageTimestamp}</span>
      </div>
      <ListMessage data={dataChat} />
    </StyledChat>
  )
}
