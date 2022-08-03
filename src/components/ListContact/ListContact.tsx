import React from 'react'
import { CardContact } from '../CardContact/CardContact';
import StyledListContact from './StyledListContact';
import { useSelector } from 'react-redux';

export const ListContact = ({inputValue}) => {
  const { conversations } = useSelector(state => state.messageReducer)
  let listContactArray = [...conversations]
  if(inputValue !== ""){
    listContactArray = listContactArray.filter(contact => contact.recipientNickname.toLowerCase().includes(inputValue.toLowerCase()))
  }
  return (
    <StyledListContact>
      {
        listContactArray?.map(contact => <CardContact key={contact.id} {...contact} />)
      }
    </StyledListContact>
  )
}
