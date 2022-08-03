import React, { useEffect, useState } from 'react'
import StyledContact from './StyledContact';
import { BiCommentAdd } from 'react-icons/bi';
import { SearchBar } from '../SearchBar/SearchBar';
import { ListContact } from '../ListContact/ListContact';
import { useDispatch, useSelector } from 'react-redux';
import { fetchConversations } from '../../redux/action/messageActions';
import { ModalContact } from '../ModalContact/ModalContact';

export const Contact = () => {
  const [inputValue, setInputValue] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const { conversations } = useSelector (state => state.messageReducer)
  useEffect(() => {
    if(conversations.length === 0){
      dispatch(fetchConversations())
    }
  },[])
  const handleClick = () => {
    setIsOpen(true)
  }
  return (
    <StyledContact>
      <div className='header-contact'>
        <h1>Contact</h1>
        <BiCommentAdd onClick={handleClick}/>
      </div>
      <SearchBar inputValue={inputValue} setInputValue={setInputValue}/>
      <ListContact inputValue={inputValue}/>
      { isOpen &&
        <ModalContact setIsOpen={setIsOpen}/>
      }
    </StyledContact>
  )
}
