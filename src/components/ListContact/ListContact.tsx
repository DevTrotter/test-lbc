import React from 'react'
import { CardContact } from '../CardContact/CardContact';
import StyledListContact from './StyledListContact';
import { useSelector } from 'react-redux';

export const ListContact = () => {
  const { conversations } = useSelector(state => state.messageReducer)

  return (
    <StyledListContact>
      {
        conversations.map(contact => <CardContact key={contact.id} {...contact} />)
      }
    </StyledListContact>
  )
}
