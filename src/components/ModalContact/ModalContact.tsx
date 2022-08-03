import React, { useState } from 'react'
import StyledModalContact from './StyledModalContact'
import { useSelector, useDispatch } from 'react-redux';
import { addNewConversation } from '../../redux/action/messageActions';

export const ModalContact = ({setIsOpen}) => {
  const dispatch = useDispatch()
  const [valueSelect, setValueSelect] = useState(0)
  const { users, usersId } = useSelector(state => state.messageReducer)
  const userRecipient = users.filter(user => user.id === Number(valueSelect))
  const handleChange = (e) => {
    setValueSelect(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const newConversation = {
      recipientId: userRecipient[0].id,
      recipientNickname: userRecipient[0].nickname,
      senderId: usersId,
      senderNickname: "patrick",
      lastMessageTimestamp:  Date.now()
    }
    dispatch(addNewConversation(newConversation))
    setIsOpen(false)
  }
  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <StyledModalContact onSubmit={handleSubmit}>
      <select onChange={handleChange} name="users" id="users" value={valueSelect} placeholder="choisissez un utilisateur">
        <option value="">choisissez un utilisateur</option>
        {
          users.map(user => <option key={user.id} value={user.id}>{user.nickname}</option>)
        }
      </select>
      <div>
        <button type='submit'>créer</button>
        <button onClick={handleClose}>retour</button>
      </div>
    </StyledModalContact>
  )
}
