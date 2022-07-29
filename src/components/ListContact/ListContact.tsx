import React from 'react'
import { CardContact } from '../CardContact/CardContact';
import StyledListContact from './StyledListContact';

export const ListContact = () => {
  const dataInt = [
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
  return (
    <StyledListContact>
      {
        dataInt.map(contact => <CardContact key={contact.id} {...contact} />)
      }
    </StyledListContact>
  )
}
